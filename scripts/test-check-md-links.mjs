#!/usr/bin/env node
// Fixture test for check-md-links.mjs. Fixtures are written to a temp dir so the
// dead link never lives in the repo tree. Run from the repo root.
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const checker = join(dirname(fileURLToPath(import.meta.url)), "check-md-links.mjs");
const repoRoot = resolve(dirname(checker), "..");
const tmp = mkdtempSync(join(tmpdir(), "md-links-"));
let failed = 0;

function run(root) {
  return spawnSync(process.execPath, [checker, root], { encoding: "utf8" });
}

function expect(label, root, wantStatus, wantText) {
  const r = run(root);
  const out = r.stdout + r.stderr;
  const ok = r.status === wantStatus && (!wantText || out.includes(wantText));
  console.log(`${ok ? "ok  " : "FAIL"} - ${label} (exit ${r.status})`);
  if (!ok) {
    failed++;
    console.log(out.replace(/^/gm, "       "));
  }
}

function fixture(name, files) {
  const root = join(tmp, name);
  for (const [path, body] of Object.entries(files)) {
    mkdirSync(dirname(join(root, path)), { recursive: true });
    writeFileSync(join(root, path), body);
  }
  return root;
}

try {
  expect(
    "dead relative link fails",
    fixture("dead", { "README.md": "# T\n\nSee [guide](docs/missing.md).\n" }),
    1,
    "README.md:3: dead link -> docs/missing.md",
  );
  expect(
    "dead link in a subdirectory file fails",
    fixture("dead-sub", { "docs/a.md": "[up](../nope.md#x)\n", "README.md": "ok\n" }),
    1,
    "docs/a.md:1",
  );
  expect(
    "dead reference-style definition fails",
    fixture("dead-ref", { "README.md": "[x][1]\n\n[1]: ./gone.md\n" }),
    1,
    "gone.md",
  );
  expect(
    "valid, skipped and code-fenced links pass",
    fixture("good", {
      "README.md": [
        "[doc](docs/a.md) [anchor](docs/a.md#top) [self](#top) [site](https://example.com/x)",
        "[mail](mailto:a@example.org) [proto](//example.com/x) ![img](docs/pic.png)",
        "`[inline](not-checked.md)`",
        "```",
        "[fenced](not-checked-either.md)",
        "```",
        "",
      ].join("\n"),
      "docs/a.md": "back to [readme](../README.md)\n",
      "docs/pic.png": "x",
    }),
    0,
    "passed",
  );
  expect("real tree passes", repoRoot, 0, "passed");
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

console.log(failed ? `${failed} failed` : "all passed");
process.exit(failed ? 1 : 0);
