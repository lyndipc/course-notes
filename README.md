# Course Notes — Astro Starlight

Personal documentation site for **[Course Name]**, built with [Astro Starlight](https://starlight.astro.build/).

Clone this template for each course. See the astro config comments for how to customize.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

## Building & Running Locally

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/your-notes-repo.git
cd your-notes-repo

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

This launches a local server at `http://localhost:4321` with hot reload — any changes you save to `.md` files will appear instantly in the browser.

To generate a production build (static HTML/CSS/JS):

```bash
npm run build
```

The output goes to `dist/`. You can preview it locally with:

```bash
npm run preview
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

## A Note on Course Content

This repo is a **template** — it doesn't contain any course material. If you use it to take notes for a class, be mindful before deploying or publishing your notes publicly. Lecture slides, exam questions, textbook excerpts, and other instructor-created materials are often copyrighted or protected by your university's academic integrity policies. When in doubt, keep your notes repo private and run it locally.

## License

This template is released under the [MIT License](LICENSE).
