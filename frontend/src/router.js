import { createRouter, createWebHistory } from 'vue-router';
import ProductsList from './pages/products/ProductsList.vue';
import ProductRegistration from './pages/products/ProductRegistration.vue';
import ProductSearch from './pages/products/ProductSearch.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList },
    { path: '/register', component: ProductRegistration },
    { path: '/search', component: ProductSearch },
    { path: '/:notFound(.*)', component: NotFound },
  ]
})

export default router;
