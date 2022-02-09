import VueRouter from 'vue-router';
import Paths from '@/router/paths.js';

const router = new VueRouter({
  mode: 'history',
  routes: Paths,
});

export default router;