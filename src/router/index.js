import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue"
import AboutPage from "../views/AboutPage.vue"
import ProductsPage from "../views/ProductsPage.vue"

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/products',
    name: 'ProductsPage',
    component: ProductsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
