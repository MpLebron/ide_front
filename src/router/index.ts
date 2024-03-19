import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/homePage.vue'),
  },
  {
    path: '/GeoAgent',
    name: 'GeoAgent',
    component: () => import('../views/geoAgent.vue'),
  },
  {
    path: '/agentDetail',
    name: 'agentDetail',
    component: () => import('../views/agentDetail.vue'),
  },
  {
    path: '/qapage',
    name: 'qapage',
    component: () => import('../views/qaPage.vue'),
  },
  {
    path: '/pdfChat',
    name: 'pdfChat',
    component: () => import('../components/pdfViewer.vue'),
  },
  {
    path: '/flowEditor',
    name: 'flowEditor',
    component: () => import('../components/flowEditor.vue'),
  },
  {
    path: '/knowledgeGraph',
    name: 'knowledgeGraph',
    component: () => import('../components/knowledgeGraph.vue'),
  },
  {
    path: '/createAgent',
    name: 'createAgent',
    component: () => import('../views/createAgent.vue'),
  },
  {
    path: '/demoSpace',
    name: 'demoSpace',
    component: () => import('../views/demoSpace.vue'),
  },
  {
    path: '/swatSA',
    name: 'swatSA',
    component: () => import('../components/modelingDemos/swatSA.vue'),
  },
  {
    path: '/areaInnovation',
    name: 'areaInnovation',
    component: () => import('../components/modelingDemos/areaInnovation.vue'),
  },
  {
    path: '/hydroForecast',
    name: 'hydroForecast',
    component: () => import('../components/modelingDemos/hydroForecast.vue'),
  },
  {
    path: '/swatAgentQA',
    name: 'swatAgentQA',
    component: () => import('../components/qaDemo/swatAgentQA.vue'),
  },
  {
    path: '/ui',
    name: 'ui',
    component: () => import('../components/UIComponent/commonUI.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
