import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/tokenomics',
    name: 'tokenomics',
    component: () => import(/* webpackChunkName: "tokenomics" */ '../views/TokenomicsView.vue')
  },
  {
    path: '/roadmap',
    name: 'roadmap',
    component: () => import(/* webpackChunkName: "roadmap" */ '../views/RoadmapView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top when navigating to a new route
    return { top: 0 }
  }
})

export default router
