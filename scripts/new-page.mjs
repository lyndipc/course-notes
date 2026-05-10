#!/usr/bin/env node

import { mkdirSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, res));

const SECTIONS = ["synopsis", "characters", "scenes", "world", "research"];

const TEMPLATES = {
  character: `---
title: "TITLE"
---

## Overview

| Field | Notes |
|-------|-------|
| **Role** | |
| **Age / Background** | |
| **External Goal** | |
| **Internal Need** | |
| **Core Flaw** | |
| **Wound** | |
| **Epiphany** | |

## One-Paragraph Summary

[Write here.]

## Notes

[Write here.]
`,

  scene: `---
title: "TITLE"
---

## Scene Summary

| Field | Notes |
|-------|-------|
| **POV** | |
| **Setting** | |
| **Time** | |
| **Characters present** | |

## Conflict

[What is the scene's central tension?]

## Beats

1.
2.
3.

## Outcome

[What changes by the end of this scene?]

## Notes

[Anything else — atmosphere, subtext, lines to remember.]
`,

  research: `---
title: "TITLE"
---

## Key Facts

[The most important things you found.]

## Details

[Longer notes, context, quotes.]

## Sources

| Source | Notes |
|--------|-------|
| | |

## Open Questions

- [ ]
`,

  note: `---
title: "TITLE"
---

## Notes

[Write here.]
`,
};

async function main() {
  console.log("\n✦ New Page — American Gothic\n");

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

  const title = (await ask("\nPage title: ")).trim();
  if (!title) {
    console.log("Title is required.");
    rl.close();
    process.exit(1);
  }

  const defaultSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  const slug =
    (await ask(`Filename [${defaultSlug}.md]: `)).trim() || defaultSlug;
  const filename = slug.endsWith(".md") ? slug : `${slug}.md`;

  const docsDir = resolve(
    dirname(new URL(import.meta.url).pathname),
    "..",
    "src",
    "content",
    "docs"
  );
  const filePath = resolve(docsDir, section, filename);

  if (existsSync(filePath)) {
    console.log(`\n⚠  ${filePath} already exists. Aborting.`);
    rl.close();
    process.exit(1);
  }

  mkdirSync(dirname(filePath), { recursive: true });
  const content = TEMPLATES[template].replace("TITLE", title);
  writeFileSync(filePath, content);

  console.log(`\n✓ Created: src/content/docs/${section}/${filename}`);

  const sidebarSlug = `${section}/${slug.replace(".md", "")}`;
  console.log(`\n  Add to astro.config.mjs sidebar:`);
  console.log(`  { label: '${title}', slug: '${sidebarSlug}' }\n`);

  rl.close();
}

main();
