// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Conecta ONG Docs', // Mudei o título
  tagline: 'Documentação da API e Guias',
  favicon: 'img/favicon.ico',

  // --- CONFIGURAÇÃO DE DEPLOY DO GITHUB PAGES (CRITICO) ---
  url: 'https://conecta-ong-impacta.github.io',
  baseUrl: '/conecta-ong-pages/', // O nome do seu repositório com barras
  organizationName: 'conecta-ong-impacta',
  projectName: 'conecta-ong-pages',
  trailingSlash: false, // Recomendado para GitHub Pages
  // --------------------------------------------------------

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-br', // Mudei para português
    locales: ['pt-br'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/conecta-ong-impacta/conecta-ong-pages/tree/main/',
        },
        blog: false, // Desativei o blog por enquanto (mude para {} se quiser usar)
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    // --- AQUI ENTRA O REDOCUSAURUS ---
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'swagger.json', // O arquivo que está na raiz
            route: '/api/',       // A URL onde vai aparecer
          },
        ],
        theme: {
          primaryColor: '#25c2a0', // Uma cor verde bonita (opcional)
        },
      },
    ],
    // ---------------------------------
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Conecta ONG',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutoriais',
          },
          // --- LINK PARA A SUA API ---
          { 
            to: '/api/', 
            label: 'API Reference', 
            position: 'left' 
          },
          // ---------------------------
          {
            href: 'https://github.com/conecta-ong-impacta/conecta-ong-pages',
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
              { label: 'Começando', to: '/docs/intro' },
              { label: 'API Reference', to: '/api/' },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/conecta-ong-impacta/conecta-ong-pages',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Conecta ONG. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;