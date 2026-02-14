import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 configuration for wiki.andydao.dev
 * Theme: 80s Neon (https://github.com/saberzero1/quartz-themes/tree/master/themes/80s-neon)
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Andy's Wiki",
    pageTitleSuffix: " | wiki.andydao.dev",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "wiki.andydao.dev",
    ignorePatterns: [
      ".obsidian",
      ".trash",
      "private",
      "_private",
      "_drafts",
      "helpers/prompts",
      "api-keys",
      ".DS_Store",
      "*.canvas",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Space Grotesk",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        // 80s Neon palette (dark-only design)
        // Source: https://github.com/saberzero1/quartz-themes/tree/master/themes/80s-neon
        lightMode: {
          light: "#2b213a",           // --background-primary (deep purple)
          lightgray: "#1a1836",       // --background-secondary (darker purple)
          gray: "#bd93f9",            // --text-faint (purple accents)
          darkgray: "#d4f5ff",        // --text-normal (cyan text)
          dark: "#d4f5ff",            // headings
          secondary: "#ff1690",       // --link-color (neon pink)
          tertiary: "#7a6ae6",        // --link-color-hover (purple)
          highlight: "rgba(138, 92, 245, 0.10)",
          textHighlight: "rgba(255, 211, 25, 0.20)",
        },
        darkMode: {
          light: "#2b213a",           // --background-primary (deep purple)
          lightgray: "#1a1836",       // --background-secondary (darker purple)
          gray: "#bd93f9",            // --text-faint (purple accents)
          darkgray: "#d4f5ff",        // --text-normal (cyan text)
          dark: "#d4f5ff",            // headings
          secondary: "#ff1690",       // --link-color (neon pink)
          tertiary: "#7a6ae6",        // --link-color-hover (purple)
          highlight: "rgba(138, 92, 245, 0.10)",
          textHighlight: "rgba(255, 211, 25, 0.20)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "one-dark-pro",
          dark: "one-dark-pro",
        },
      }),
      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: false,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
      }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [
      Plugin.RemoveDrafts(),
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
