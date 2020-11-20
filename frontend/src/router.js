import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import ProductsList from './pages/ProductsList.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/products', component: ProductsList },
    { path: '/:notFound(.*)', component: NotFound },
  ]
})

export default router;
