import { DocumentationEntry } from "./types";

export const getData = (lang: string): DocumentationEntry[] => [
  /* Getting Started */
  { title: "Getting Started", url: `https://docs.astro.build/${lang}/getting-started/`, keywords: ["stort", "sturt"] },
  { title: "Installation", url: `https://docs.astro.build/${lang}/install/auto/` },
  { title: "Editor Setup", url: `https://docs.astro.build/${lang}/editor-setup/` },
  /* Upgrade Guides */
  { title: "Upgrade to Astro v3", url: `https://docs.astro.build/${lang}/guides/upgrade-to/v3/` },
  { title: "Upgrade to Astro v2", url: `https://docs.astro.build/${lang}/guides/upgrade-to/v2/` },
  /* Core Concepts */
  { title: "Why Astro", url: `https://docs.astro.build/${lang}/concepts/why-astro/` },
  { title: "Islands", url: `https://docs.astro.build/${lang}/concepts/islands/` },
  /* Tutorials */
  { title: "Build a blog (tutorial)", url: `https://docs.astro.build/${lang}/tutorial/0-introduction/` },
  {
    title: "Content Collections (tutorial)",
    url: `https://docs.astro.build/${lang}/tutorials/add-content-collections/`,
  },
  { title: "View Transitions (tutorial)", url: `https://docs.astro.build/${lang}/tutorials/add-view-transitions/` },
  /* Basics */
  { title: "Project Structure", url: `https://docs.astro.build/${lang}/core-concepts/project-structure/` },
  { title: "Components", url: `https://docs.astro.build/${lang}/core-concepts/astro-components/` },
  { title: "Pages", url: `https://docs.astro.build/${lang}/core-concepts/astro-pages/` },
  { title: "Partials", url: `https://docs.astro.build/${lang}/core-concepts/astro-pages/#page-partials` },
  { title: "Layouts", url: `https://docs.astro.build/${lang}/core-concepts/layouts/` },
  { title: "Astro Syntax", url: `https://docs.astro.build/${lang}/core-concepts/astro-syntax/` },
  { title: "Rendering Modes", url: `https://docs.astro.build/${lang}/core-concepts/rendering-modes/` },
  /* Built-ins */
  { title: "Content Collections", url: `https://docs.astro.build/${lang}/guides/content-collections/` },
  { title: "View Transitions", url: `https://docs.astro.build/${lang}/guides/view-transitions/` },
  { title: "Prefetch", url: `https://docs.astro.build/${lang}/guides/guides/prefetch/` },
  /* Add-ons */
  { title: "Add Integrations", url: `https://docs.astro.build/${lang}/guides/integrations-guide/` },
  { title: "UI Frameworks", url: `https://docs.astro.build/${lang}/core-concepts/framework-components/` },
  { title: "Server Side Rendering (ssr)", url: `https://docs.astro.build/${lang}/guides/server-side-rendering/` },
  { title: "On-demand Rendering", url: `https://docs.astro.build/${lang}/guides/server-side-rendering/` },
  /* Recipes */
  { title: "Migration Guides", url: `https://docs.astro.build/${lang}/guides/migrate-to-astro/` },
  { title: "CMS Guides", url: `https://docs.astro.build/${lang}/guides/cms/` },
  { title: "Backend Guides", url: `https://docs.astro.build/${lang}/guides/backend/` },
  { title: "Deploy Guides", url: `https://docs.astro.build/${lang}/guides/deploy/` },
  { title: "Recipes", url: `https://docs.astro.build/${lang}/recipes/` },
  /* Guides */
  { title: "Routing", url: `https://docs.astro.build/${lang}/core-concepts/routing/` },
  { title: "Markdown & MDX", url: `https://docs.astro.build/${lang}/core-concepts/routing/` },
  { title: "Scripts & Event Handling", url: `https://docs.astro.build/${lang}/guides/client-side-scripts/` },
  { title: "CSS & Styling", url: `https://docs.astro.build/${lang}/guides/styling/` },
  { title: "Images", url: `https://docs.astro.build/${lang}/guides/images/` },
  { title: "Fonts", url: `https://docs.astro.build/${lang}/guides/fonts/` },
  { title: "Imports", url: `https://docs.astro.build/${lang}/guides/imports/` },
  { title: "Endpoints", url: `https://docs.astro.build/${lang}/core-concepts/endpoints/` },
  { title: "Data Fetching", url: `https://docs.astro.build/${lang}/guides/data-fetching/` },
  { title: "Middleware", url: `https://docs.astro.build/${lang}/guides/middleware/` },
  { title: "Testing", url: `https://docs.astro.build/${lang}/guides/testing/` },
  { title: "Troubleshooting", url: `https://docs.astro.build/${lang}/guides/troubleshooting/` },
  /* Configuration */
  { title: "Configuration", url: `https://docs.astro.build/${lang}/guides/configuring-astro/` },
  { title: "TypeScript", url: `https://docs.astro.build/${lang}/guides/typescript/` },
  { title: "Aliases", url: `https://docs.astro.build/${lang}/guides/aliases/` },
  { title: "Environment Variables", url: `https://docs.astro.build/${lang}/guides/environment-variables/` },
  /* Reference section */
  { title: "Configuration Reference", url: `https://docs.astro.build/${lang}/reference/configuration-reference/` },
  { title: "Runtime API Reference", url: `https://docs.astro.build/${lang}/reference/api-reference/` },
  { title: "Integration API Reference", url: `https://docs.astro.build/${lang}/reference/integrations-reference/` },
  { title: "Adapter API Reference", url: `https://docs.astro.build/${lang}/reference/adapter-reference/` },
  { title: "Image Service API Reference", url: `https://docs.astro.build/${lang}/reference/image-service-reference/` },
  { title: "Dev Overlay Plugin API Reference", url: `https://docs.astro.build/${lang}/reference/dev-overlay-plugin-reference/` },
  { title: "Template Directives Reference", url: `https://docs.astro.build/${lang}/reference/directives-reference/` },
  { title: "CLI Reference", url: `https://docs.astro.build/${lang}/reference/cli-reference/` },
  { title: "Error Reference", url: `https://docs.astro.build/${lang}/reference/error-reference/` },
  { title: "Publish to NPM Reference", url: `https://docs.astro.build/${lang}/reference/publish-to-npm/` },
];