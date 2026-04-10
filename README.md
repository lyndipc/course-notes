# Course Notes — Astro Starlight

Personal documentation site for **[Course Name]**, built with [Astro Starlight](https://starlight.astro.build/).

Clone this template for each course. See the astro config comments for how to customize.

## Quick Start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → dist/
```

## Adding a New Page

**Option A — Manual:**
1. Create a `.md` file in `src/content/docs/` (in the right folder)
2. Add frontmatter with at least a `title`
3. Add a sidebar entry in `astro.config.mjs`

**Option B — Script:**
```bash
npm run notes
```
Follow the prompts. It creates the file and tells you what to add to the sidebar.

## Adding a New Section

1. Create a new folder under `src/content/docs/`
2. Add an `index.md` inside it
3. Add a new sidebar group in `astro.config.mjs`
4. Update the `SECTIONS` array in `scripts/new-note.mjs`

## Structure

```
src/content/docs/
├── index.md          ← Landing page
├── notes/            ← Lecture notes, readings
│   ├── index.md
│   └── example.md    ← Delete this once you're comfortable
└── resources/        ← Reference materials, formulas
    └── index.md
```

## Deployment

Works with Vercel, Netlify, or any static host. Just connect the repo and it auto-deploys on push.

## License

Personal use. Not for redistribution.
