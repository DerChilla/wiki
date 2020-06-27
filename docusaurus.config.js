
const allDocHomesPaths = [
  '/docs',
  '/docs/next'
];

module.exports = {
  title: 'NosWings Wiki - Preview',
  tagline: 'NosWings Wiki - Preview',
  url: 'https://noswings.gitlab.io',
  baseUrl: '/preview-wiki/',
  favicon: 'img/favicon.ico',
  organizationName: 'noswings',
  projectName: 'preview-wiki',
  themeConfig: {
    navbar: {
      title: 'NosWings Wiki',
      logo: {
        alt: 'NosWings Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Patch Notes',
          position: 'left'},
        {
          href: 'https://gitlab.com/noswings/preview-wiki',
          label: 'GitLab',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Website',
              href: 'https://noswings.com',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/RUk4r4T',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Patch Notes',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/noswings',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NosWings.`,
    },
  },  
  plugins: [    
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
        createRedirects: function (path) {
          // redirect to /docs from /docs/introduction,
          // as introduction has been made the home doc
          if (allDocHomesPaths.includes(path)) {
            return [`${path}/introduction`];
          }
        },
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/noswings/wiki/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/noswings/wiki/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
