import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/pages/HomePage';
import NewBuildingsPage from '@/pages/NewBuildingsPage';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/buildings',
      name: 'newBuildings',
      component: NewBuildingsPage
    }
  ]
});

export default router;
