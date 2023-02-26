// Composables
import { createRouter, createWebHistory } from 'vue-router'


import Update from '@/views/Update'
import Delete from '@/views/Delete'
import updatePost from '@/views/updatePost'
import deletePost from '@/views/deletePost'

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
    path: '/update',
    name:'update',
    component: Update,

  }, 
  {
    path: '/update/:postid',
    name:'updateId',
    component: updatePost,

  },
  {
    path: '/delete',
    name:'delete',
    component: Delete,

  }, 
  {
    path: '/delete/:postid',
    name:'deleteId',
    component: deletePost,

  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
