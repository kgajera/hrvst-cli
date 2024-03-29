// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Harvest CLI",
  tagline: "Unoffical CLI for Harvest",
  url: "https://kgajera.github.io",
  baseUrl: "/hrvst-cli/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kgajera", // Usually your GitHub org/user name.
  projectName: "hrvst-cli", // Usually your repo name.

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
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-1XZT7KYD6B",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Harvest CLI",
        logo: {
          src: "/img/logo.svg",
        },
        items: [
          {
            href: "https://github.com/kgajera/hrvst-cli",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
        style: "primary",
      },
      footer: {
        copyright: "Harvest CLI built by Kishan Gajera",
        links: [
          {
            label: "GitHub",
            href: "https://github.com/kgajera/hrvst-cli",
          },
          {
            label: "Harvest",
            href: "https://www.getharvest.com/integrations/hrvst-cli",
          },
        ],
      },
      algolia: {
        appId: "7T7NPZ0ZD9",
        apiKey: "79e587afc3909f9652d8bcd1ee71b286",
        indexName: "hrvst-cli",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
