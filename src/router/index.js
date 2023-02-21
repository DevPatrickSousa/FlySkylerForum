// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Create from '@/views/Create'
import Read from '@/views/Read'
import Update from '@/views/Update'
import Delete from '@/views/Delete'
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/create',
    name:'create',
    component: Create,

  }, 
  {
    path: '/read',
    name:'read',
    component: Read,

  }, 
  {
    path: '/update',
    name:'update',
    component: Update,

  }, 
  {
    path: '/delete',
    name:'delete',
    component: Delete,

  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
