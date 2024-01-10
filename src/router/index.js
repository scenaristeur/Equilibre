import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/homme',
      name: 'homme',
      component: () => import('@/views/HommeView.vue')
    },
    {
      path: '/femme',
      name: 'femme',
      component: () => import('@/views/FemmeView.vue')
    },
       {
    path: '/chatbox',
    name: 'femchatboxme',
    component: () => import('@/components/ChatBox.vue')
  },
  {
    path: '/match',
    name: 'match',
    component: () => import('@/views/EmbedGraph.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/TypesenseSearch.vue')
  },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
