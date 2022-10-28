// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Figment",
  tagline: "Visual Coding for Creative AI",
  url: "https://figmentapp.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "figmentapp", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/figmentapp/docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Figment",
        logo: {
          alt: "Figment Logo",
          src: "img/figment.png",
        },
        items: [
          {
            to: "download",
            position: "left",
            label: "Download",
          },
          {
            type: "doc",
            docId: "tutorials/index",
            position: "left",
            label: "Tutorial",
          },
          {
            type: "doc",
            docId: "nodes/index",
            position: "left",
            label: "Reference",
          },
          {
            href: "https://github.com/figmentapp/figment",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Tutorial",
                to: "/docs/tutorials",
              },
              {
                label: "Reference",
                to: "/docs/nodes",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Forum coming soon!",
                href: "#",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Documentation GitHub",
                href: "https://github.com/figmentapp/docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Figment.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
