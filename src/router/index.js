// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Create from '@/views/Create'
import Read from '@/views/Read'
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
    path: '/updatePost/:postid',
    name:'updatePost',
    component: updatePost,

  },
  {
    path: '/delete',
    name:'delete',
    component: Delete,

  }, 
  {
    path: '/deletePost/:postid',
    name:'deletePost',
    component: deletePost,

  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
