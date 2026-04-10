import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// ============================================================
// HOW TO USE THIS TEMPLATE
// ============================================================
// 1. Update the title and description below for your course
// 2. Update the GitHub href in social (or remove it)
// 3. Edit the sidebar to match your course structure:
//    - Each { label, items } block = a collapsible group
//    - Each item = { label: "Page Title", slug: "folder/filename" }
//    - The slug maps to src/content/docs/<slug>.md
// 4. When you add a new .md file, add a matching sidebar entry
// ============================================================

export default defineConfig({
  integrations: [
    starlight({
      // ── Change these for each course ──────────────────────
      title: "Course Notes",
      description: "Personal notes for [Course Name]",

      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: false,
      },
      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/yourusername/course-notes",
        },
      ],

      // ── Sidebar ───────────────────────────────────────────
      // Modify this for your course. The examples below show
      // two common patterns:
      //   1. A section with an overview + topic pages
      //   2. A flat section with standalone pages
      //
      // To add a new page:
      //   1. Create the .md file in src/content/docs/
      //   2. Add a { label, slug } entry here
      //
      // To add a new section:
      //   1. Create a folder in src/content/docs/
      //   2. Add an index.md inside it
      //   3. Add a new { label, items } block here
      sidebar: [
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Notes",
          items: [
            { label: "Overview", slug: "notes" },
            // ── Add your note pages here ──
            // { label: "Week 1", slug: "notes/week-1" },
            // { label: "Week 2", slug: "notes/week-2" },
            { label: "Example Page", slug: "notes/example" },
          ],
        },
        {
          label: "Resources",
          items: [
            { label: "Overview", slug: "resources" },
            // ── Add resource pages here ──
            // { label: "Formulas", slug: "resources/formulas" },
            // { label: "Study Guide", slug: "resources/study-guide" },
          ],
        },
      ],
    }),
  ],
});
