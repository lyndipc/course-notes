---
title: "Example Page"
description: "This page shows how to use the different formatting options available. Delete it once you're comfortable."
---

This is an example page showing the formatting you can use in your notes. Delete this file (and its sidebar entry in `astro.config.mjs`) once you don't need it anymore.

## Basic Formatting

Regular paragraphs work as expected. You can use **bold**, *italics*, `inline code`, and [links](https://example.com).

## Code Blocks

Use triple backticks with a language identifier:

```python
def hello():
    print("Hello, world!")
```

```bash
echo "You can use any language identifier"
```

## Tables

| Term | Definition |
|------|-----------|
| Example | A thing that serves as a pattern |
| Template | A preset format for a document |

## Admonitions

Starlight supports these natively in markdown — no imports needed:

:::tip
This is a tip. Use it for helpful hints.
:::

:::note
This is a note. Use it for supplementary info.
:::

:::caution
This is a caution. Use it for things to watch out for.
:::

:::danger
This is a danger warning. Use it for critical warnings.
:::

## Task Lists

- [ ] Read chapter 1
- [ ] Complete homework
- [x] Set up notes repo

## Images

Store images in `src/assets/images/` and reference them with a relative path:

```markdown
![Description](../../assets/images/your-image.png)
```

## Math (if needed)

Starlight doesn't render LaTeX by default. If your course is math-heavy, you can add the `remark-math` and `rehype-katex` plugins — see the [Starlight docs](https://starlight.astro.build/guides/authoring-content/) for setup.
