import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },

  {
    path: '/groups',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Groups.vue') }],
  },


  {
    path: '/changes',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Changes.vue') }],
  },

  {
    path: '/teachers',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Teachers.vue') }],
  },

  {
    path: '/disciplines',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Disciplines.vue') }],
  },

  {
    path: '/cabinets',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Cabinets.vue') }],
  },

  {
    path: '/times',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Times.vue') }],
  },

  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', component: () => import('pages/Login.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
