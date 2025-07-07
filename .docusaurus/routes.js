import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/cs/markdown-page',
    component: ComponentCreator('/cs/markdown-page', '78c'),
    exact: true
  },
  {
    path: '/cs/docs',
    component: ComponentCreator('/cs/docs', 'fc4'),
    routes: [
      {
        path: '/cs/docs',
        component: ComponentCreator('/cs/docs', 'bbb'),
        routes: [
          {
            path: '/cs/docs',
            component: ComponentCreator('/cs/docs', 'f9d'),
            routes: [
              {
                path: '/cs/docs/assistants',
                component: ComponentCreator('/cs/docs/assistants', '015'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cs/docs/chat',
                component: ComponentCreator('/cs/docs/chat', '87a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cs/docs/conversations',
                component: ComponentCreator('/cs/docs/conversations', '739'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cs/docs/data',
                component: ComponentCreator('/cs/docs/data', 'f28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cs/docs/feedback',
                component: ComponentCreator('/cs/docs/feedback', 'd80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cs/docs/intro',
                component: ComponentCreator('/cs/docs/intro', '0cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cs/docs/organization',
                component: ComponentCreator('/cs/docs/organization', '2fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cs/docs/ovladaci-prvky',
                component: ComponentCreator('/cs/docs/ovladaci-prvky', 'a20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cs/docs/prihlaseni',
                component: ComponentCreator('/cs/docs/prihlaseni', '091'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cs/docs/profile',
                component: ComponentCreator('/cs/docs/profile', '19c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cs/docs/roles',
                component: ComponentCreator('/cs/docs/roles', 'e31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cs/docs/users',
                component: ComponentCreator('/cs/docs/users', 'b07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cs/docs/zaver',
                component: ComponentCreator('/cs/docs/zaver', '140'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/cs/',
    component: ComponentCreator('/cs/', 'e8b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
