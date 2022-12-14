/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'Introduction to Machine Learning',
  tagline: 'CSCI-UA 473, Fall 2022',
  url: 'https://NYU-robot-learning.github.io/',
  baseUrl: '/ml-class/',
  projectName: 'ml-class',
  organizationName: 'NYU-robot-learning',
  favicon: 'img/favicon/favicon.ico',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          // editUrl:
          //   'https://github.com/facebook/create-react-app/edit/master/docusaurus/website',
          // showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/logo-og.png',
    navbar: {
      title: 'Machine Learning ',
      // logo: {
      //   alt: 'NYU Courant LOGO',
      //   src: 'img/logo.svg',
      // },
      items: [
        { 
          to: 'docs/logistics', 
          label: 'Logistics', 
          position: 'left' 
        },
        { 
          to: 'docs/lectures', 
          label: 'Schedule', 
          position: 'left' 
        },
        { 
          to: 'docs/assignments', 
          label: 'Assignments', 
          position: 'left' 
        },

        // { 
        //   to: 'docs/suggested-projects', 
        //   label: 'Suggested Projects', 
        //   position: 'left' 
        // },
        // {
        //   href: 'https://reactjs.org/community/support.html',
        //   label: 'Help',
        //   position: 'left',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Schedule',
              to: 'docs/lectures',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Class Campuswire',
              href: 'https://campuswire.com/c/G7204E992/'
            },
            {
              label: 'Staff information',
              to: 'docs/logistics#course-staff'
            },
          ],
        },
      ],
      // logo: {
      //   alt: 'Facebook Open Source Logo',
      //   src: 'img/oss_logo.png',
      // },
      copyright: `Copyright ?? ${new Date().getFullYear()} NYU Generalizable Robotics and AI Lab`,
    },
  },
};

module.exports = siteConfig;
