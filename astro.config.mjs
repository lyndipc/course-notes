import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "American Gothic",
      description: "Novel planning & research notes",

      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: false,
      },
      customCss: ["./src/styles/custom.css"],
      social: [],

      sidebar: [
        {
          label: "Premise",
          link: "/",
        },
        {
          label: "Synopsis",
          items: [
            { label: "Paragraph — Step 2", slug: "synopsis/paragraph" },
            { label: "Page — Step 4", slug: "synopsis/page" },
            { label: "Full Synopsis — Step 6", slug: "synopsis/full" },
          ],
        },
        {
          label: "Characters",
          items: [
            { label: "Sketches — Step 3", slug: "characters/sketches" },
            { label: "Synopses — Step 5", slug: "characters/synopses" },
            { label: "Detail Charts — Step 7", slug: "characters/charts" },
          ],
        },
        {
          label: "Scenes",
          link: "/scenes/",
        },
        {
          label: "World",
          link: "/world/",
        },
        {
          label: "Research",
          link: "/research/",
        },
      ],
    }),
  ],
});
