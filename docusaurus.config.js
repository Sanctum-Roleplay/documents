// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sanctum RP',
  tagline: 'Sanctum Roleplay Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sanctum-roleplay.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documents/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sanctum-Roleplay', // Usually your GitHub org/user name.
  projectName: 'documents', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      // Replace with your project's social card
      image: 'img/sanctum.png',
      navbar: {
        title: 'Sanctum RP Docs',
        logo: {
          alt: 'Sanctunm RP',
          src: 'img/sanctum.png',
        },
        items: [
          {
            href: 'https://sanctumrp.net/',
            label: 'Main Site',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog & Updates', position: 'left'},
          {
            href: 'https://github.com/Sanctum-Roleplay',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'DOJ',
                to: '/docs/DOJ',
              },
              {
                label: 'LSPD',
                to: '/docs/LSPD',
              },
              {
                label: 'BCSO',
                to: '/docs/BCSO',
              },
              {
                label: 'SAMS',
                to: '/docs/SAMS',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Main Website',
                href: 'https://sanctumrp.net/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.gg/EGgSuz9y55',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Cad',
                href: 'https://cad.sanctumrp.net/',
              },
              {
                label: 'Server Status',
                href: 'https://status.sanctumrp.net/'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sanctum RP, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
