#!/usr/bin/env node
// Fail when a Markdown file links to a relative path that does not exist.
// Usage: node scripts/check-md-links.mjs [root]   (root defaults to the cwd)
// Checks inline links/images [t](path) and reference definitions [id]: path.
// Skips URLs with a scheme (http, https, mailto, ...), //host links and pure
// #anchors. Anchors and queries are stripped; only file existence is checked.
// Fenced code blocks and inline code spans are ignored.
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const SKIP_DIRS = new Set([".git", "node_modules", ".next", "out", "coverage"]);

export function listMarkdown(root) {
  const found = [];
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (!SKIP_DIRS.has(entry.name)) walk(join(dir, entry.name));
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
        found.push(join(dir, entry.name));
      }
    }
  };
  walk(root);
  return found.sort();
}

export function extractTargets(text) {
  const targets = [];
  let fence = null;
  text.split("\n").forEach((raw, i) => {
    const marker = raw.match(/^\s{0,3}(`{3,}|~{3,})/);
    if (marker) {
      if (!fence) fence = marker[1][0];
      else if (marker[1][0] === fence) fence = null;
      return;
    }
    if (fence) return;
    const line = raw.replace(/`+[^`]*`+/g, "");
    for (const m of line.matchAll(/!?\[[^\]]*\]\(\s*(<[^>]*>|[^\s)]+)/g)) {
      targets.push({ line: i + 1, target: m[1] });
    }
    const def = line.match(/^\s{0,3}\[[^\]]+\]:\s*(<[^>]*>|\S+)/);
    if (def) targets.push({ line: i + 1, target: def[1] });
  });
  return targets;
}

export function isChecked(target) {
  const t = target.replace(/^<|>$/g, "");
  if (t === "" || t.startsWith("#") || t.startsWith("//")) return false;
  return !/^[a-z][a-z0-9+.-]*:/i.test(t);
}

export function checkTree(root) {
  const base = resolve(root);
  const dead = [];
  for (const file of listMarkdown(base)) {
    for (const { line, target } of extractTargets(readFileSync(file, "utf8"))) {
      if (!isChecked(target)) continue;
      let path = target.replace(/^<|>$/g, "").split("#")[0].split("?")[0];
      if (path === "") continue;
      try {
        path = decodeURIComponent(path);
      } catch {
        // keep the raw path
      }
      const resolved = path.startsWith("/") ? join(base, path) : resolve(dirname(file), path);
      if (!existsSync(resolved)) {
        dead.push({ file: file.slice(base.length + 1), line, target });
      }
    }
  }
  return { files: listMarkdown(base).length, dead };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const { files, dead } = checkTree(process.argv[2] ?? ".");
  for (const d of dead) console.error(`${d.file}:${d.line}: dead link -> ${d.target}`);
  if (dead.length) {
    console.error(`markdown link check failed: ${dead.length} dead link(s) in ${files} file(s)`);
    process.exit(1);
  }
  console.log(`markdown link check passed: ${files} file(s)`);
}
