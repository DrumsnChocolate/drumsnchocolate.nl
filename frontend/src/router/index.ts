import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmptyView from '../views/EmptyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/allesbehalvepop',
      beforeEnter: () => {
        location.href =
          'https://open.spotify.com/playlist/5JoczxodeFm4vwLcNPgfvZ?si=d6401f1679564a8d&pt=76293441e5e87d2daaad52a7bd8a7e2f'
      },
      component: EmptyView
    }
  ]
})

export default router
