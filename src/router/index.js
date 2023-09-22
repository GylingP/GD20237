import { createRouter, createWebHistory  } from 'vue-router'

const routes= [
  {
    path: '/',
    redirect: '/main',
  },
  {
    name: 'main',
    path: '/main',
    component: () => import('../views/main/MainIndex.vue'),
  },{
    name: 'decsnow',
    path: '/decsnow',
    component: () => import('../views/pagesD/DIndex.vue')
  },{
    name: 'gyling',
    path: '/gyling',
    component: () => import('../views/pagesG/GIndex.vue')
  },
  {
    name: 'flg',
    path: '/flg',
    component: () => import('../views/main/FlagIndex.vue')
  },
  {
    name: 'articles',
    path: '/gyling/articles',
    component: () => import('../views/pagesG/GArticles.vue')
  },
  {
    name: 'projects',
    path: '/gyling/projects',
    component: () => import('../views/pagesG/GProjects.vue')
  },{
    name:'detail',
    path:'/gyling/articles/detail/:path',
    params:{
      path:''
    },
    component:()=>import('@/views/pagesG/GArticlesDetail.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
