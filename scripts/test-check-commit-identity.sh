#!/usr/bin/env bash
# Builds throwaway git repos and checks scripts/check-commit-identity.sh against them.
set -u -o pipefail

here=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
check="$here/check-commit-identity.sh"
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

# Isolate from any user or system git config (signing, hooks, templates).
export GIT_CONFIG_GLOBAL=/dev/null GIT_CONFIG_NOSYSTEM=1

BOT_NAME='Factory Watchdog Bot'
BOT_EMAIL='factory-watchdog@users.noreply.github.com'
DEPENDABOT_EMAIL='49699333+dependabot[bot]@users.noreply.github.com'
WEBFLOW_EMAIL='noreply@github.com'
OTHER_NAME='Someone'
OTHER_EMAIL='someone@example.com'

pass=0
fail=0
n=0

new_repo() { # new_repo <name>: repo with one allowlisted base commit
  n=$((n + 1))
  repo="$tmp/$1"
  git init -q "$repo"
  commit "$repo" "$BOT_NAME" "$BOT_EMAIL" "$BOT_NAME" "$BOT_EMAIL" 'chore: base'
}

commit() { # commit <repo> <an> <ae> <cn> <ce> <message>
  (
    cd "$1" || exit 1
    echo "$n$RANDOM$RANDOM" >> file.txt
    git add file.txt
    GIT_AUTHOR_NAME=$2 GIT_AUTHOR_EMAIL=$3 GIT_COMMITTER_NAME=$4 GIT_COMMITTER_EMAIL=$5 \
      git commit -q --no-gpg-sign --no-verify -m "$6"
  )
}

# expect <label> <want-exit> <repo> [output-must-contain...]
expect() {
  local label=$1 want=$2 repo=$3 out got
  shift 3
  out=$(cd "$repo" && "$check" HEAD~1..HEAD 2>&1)
  got=$?
  local ok=1
  [ "$got" -eq "$want" ] || ok=0
  for needle in "$@"; do
    printf '%s' "$out" | grep -qF -- "$needle" || ok=0
  done
  # Emails of non-allowlisted people must never be printed.
  printf '%s' "$out" | grep -qF "$OTHER_EMAIL" && ok=0
  if [ "$ok" -eq 1 ]; then
    pass=$((pass + 1)); echo "ok   - $label (exit $got)"
  else
    fail=$((fail + 1)); echo "FAIL - $label (exit $got, want $want)"; printf '%s\n' "$out" | sed 's/^/       /'
  fi
}

new_repo trailer
commit "$repo" "$BOT_NAME" "$BOT_EMAIL" "$BOT_NAME" "$BOT_EMAIL" 'feat: x

Co-authored-by: Some Person <p@example.org>'
expect 'Co-authored-by trailer fails' 1 "$repo" 'Co-authored-by trailer'

new_repo trailer-case
commit "$repo" "$BOT_NAME" "$BOT_EMAIL" "$BOT_NAME" "$BOT_EMAIL" 'feat: x

co-authored-BY: Some Person <p@example.org>'
expect 'lowercase co-authored-by trailer fails' 1 "$repo" 'Co-authored-by trailer'

new_repo other-author
commit "$repo" "$OTHER_NAME" "$OTHER_EMAIL" "$BOT_NAME" "$BOT_EMAIL" 'feat: x'
expect 'non-allowlisted author fails' 1 "$repo" 'author not in allowlist'

new_repo other-committer
commit "$repo" "$BOT_NAME" "$BOT_EMAIL" "$OTHER_NAME" "$OTHER_EMAIL" 'feat: x'
expect 'non-allowlisted committer fails' 1 "$repo" 'committer not in allowlist'

new_repo clean
commit "$repo" "$BOT_NAME" "$BOT_EMAIL" "$BOT_NAME" "$BOT_EMAIL" 'feat: x'
expect 'clean Factory Watchdog Bot commit passes' 0 "$repo" 'passed'

new_repo dependabot
commit "$repo" 'dependabot[bot]' "$DEPENDABOT_EMAIL" 'dependabot[bot]' "$DEPENDABOT_EMAIL" 'chore(deps): bump x'
expect 'dependabot-authored commit passes' 0 "$repo" 'passed'

new_repo webflow-committer
commit "$repo" "$BOT_NAME" "$BOT_EMAIL" 'GitHub' "$WEBFLOW_EMAIL" 'feat: x'
expect 'web-flow as committer passes' 0 "$repo" 'passed'

new_repo webflow-author
commit "$repo" 'GitHub' "$WEBFLOW_EMAIL" "$BOT_NAME" "$BOT_EMAIL" 'feat: x'
expect 'web-flow as author fails' 1 "$repo" 'author not in allowlist'

# Only the offending commit in a multi-commit range is reported.
new_repo multi
commit "$repo" "$OTHER_NAME" "$OTHER_EMAIL" "$BOT_NAME" "$BOT_EMAIL" 'feat: bad'
bad=$(git -C "$repo" rev-parse --short=8 HEAD)
commit "$repo" "$BOT_NAME" "$BOT_EMAIL" "$BOT_NAME" "$BOT_EMAIL" 'feat: good'
out=$(cd "$repo" && "$check" HEAD~2..HEAD 2>&1); got=$?
if [ "$got" -eq 1 ] && printf '%s' "$out" | grep -qF "FAIL $bad:" && [ "$(printf '%s\n' "$out" | grep -c '^FAIL ')" -eq 1 ]; then
  pass=$((pass + 1)); echo "ok   - only the offending commit is reported (exit $got)"
else
  fail=$((fail + 1)); echo "FAIL - only the offending commit is reported (exit $got)"; printf '%s\n' "$out" | sed 's/^/       /'
fi

# BASE HEAD args and BASE_SHA/HEAD_SHA env forms agree with the range form.
base=$(git -C "$repo" rev-parse HEAD~2); head=$(git -C "$repo" rev-parse HEAD)
(cd "$repo" && "$check" "$base" "$head" >/dev/null 2>&1); a=$?
(cd "$repo" && BASE_SHA=$base HEAD_SHA=$head "$check" >/dev/null 2>&1); b=$?
if [ "$a" -eq 1 ] && [ "$b" -eq 1 ]; then
  pass=$((pass + 1)); echo "ok   - args and env input forms work"
else
  fail=$((fail + 1)); echo "FAIL - args and env input forms work ($a, $b)"
fi

# Usage and git errors exit 2.
(cd "$repo" && "$check" >/dev/null 2>&1); a=$?
(cd "$repo" && "$check" nope..HEAD >/dev/null 2>&1); b=$?
if [ "$a" -eq 2 ] && [ "$b" -eq 2 ]; then
  pass=$((pass + 1)); echo "ok   - missing range and unknown ref exit 2"
else
  fail=$((fail + 1)); echo "FAIL - missing range and unknown ref exit 2 ($a, $b)"
fi

echo "$pass passed, $fail failed"
[ "$fail" -eq 0 ]
