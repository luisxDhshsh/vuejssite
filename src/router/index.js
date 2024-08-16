import { createRouter, createWebHistory } from 'vue-router';

// Importar componentes de forma assíncrona
const HomeView = () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue');
const VideoComponent = () => import(/* webpackChunkName: "video" */ '@/components/VideoComponent.vue');
const TabelaComponent = () => import(/* webpackChunkName: "tabela" */ '@/components/TabelaComponent.vue');
const ImagensComponent = () => import(/* webpackChunkName: "imagens" */ '@/components/ImagensComponent.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/videos',
      name: 'videos',
      component: VideoComponent
    },
    {
      path: '/tabela',
      name: 'tabela',
      component: TabelaComponent
    },
    {
      path: '/imagens',
      name: 'imagens',
      component: ImagensComponent
    }
  ]
});

export default router;
