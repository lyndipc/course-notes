#!/usr/bin/env node

import { mkdirSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, res));

// ── Update these to match your sidebar sections ──
const SECTIONS = ["notes", "resources"];

const TEMPLATES = {
  lecture: `---
title: "TITLE"
---

## Key Takeaways

<!-- The 3-5 most important ideas from this lecture -->

## Notes

<!-- Detailed notes -->

## Questions

<!-- Things to follow up on or ask about -->
`,

  reference: `---
title: "TITLE"
---

## Quick Reference

<!-- The stuff you need to look up fast -->

## Details

<!-- Longer explanations -->

## Sources

<!-- Where this info came from -->
`,
};

async function main() {
  console.log("\n📝 New Notes Page\n");

  // Pick section
  console.log("Sections:");
  SECTIONS.forEach((s, i) => console.log(`  ${i + 1}. ${s}`));
  const sectionIdx =
    parseInt(await ask("\nSection number (or 0 to create new): ")) - 1;

  let section;
  if (sectionIdx === -1) {
    section = (await ask("New section name (kebab-case): "))
      .trim()
      .toLowerCase();
  } else if (sectionIdx >= 0 && sectionIdx < SECTIONS.length) {
    section = SECTIONS[sectionIdx];
  } else {
    console.log("Invalid selection.");
    rl.close();
    process.exit(1);
  }

  // Pick template
  const templateKeys = Object.keys(TEMPLATES);
  console.log("\nTemplates:");
  templateKeys.forEach((t, i) => console.log(`  ${i + 1}. ${t}`));
  const templateIdx = parseInt(await ask("\nTemplate number: ")) - 1;

  if (templateIdx < 0 || templateIdx >= templateKeys.length) {
    console.log("Invalid selection.");
    rl.close();
    process.exit(1);
  }
  const template = templateKeys[templateIdx];

  // Get title
  const title = (await ask("\nPage title: ")).trim();
  if (!title) {
    console.log("Title is required.");
    rl.close();
    process.exit(1);
  }

  // Derive filename from title
  const defaultSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  const slug =
    (await ask(`Filename [${defaultSlug}.md]: `)).trim() || defaultSlug;
  const filename = slug.endsWith(".md") ? slug : `${slug}.md`;

  // Build path
  const docsDir = resolve(
    dirname(new URL(import.meta.url).pathname),
    "..",
    "src",
    "content",
    "docs"
  );
  const filePath = resolve(docsDir, section, filename);

  if (existsSync(filePath)) {
    console.log(`\n⚠️  ${filePath} already exists. Aborting.`);
    rl.close();
    process.exit(1);
  }

  // Write file
  mkdirSync(dirname(filePath), { recursive: true });
  const content = TEMPLATES[template].replace("TITLE", title);
  writeFileSync(filePath, content);

  console.log(`\n✅ Created: src/content/docs/${section}/${filename}`);

  // Remind about sidebar
  const sidebarSlug = `${section}/${slug.replace(".md", "")}`;
  console.log(`\n📌 Add to sidebar in astro.config.mjs:`);
  console.log(`   { label: '${title}', slug: '${sidebarSlug}' }\n`);

  rl.close();
}

main();
