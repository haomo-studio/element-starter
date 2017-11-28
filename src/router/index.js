import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/demo',
    auth: true,
    name: '示例文件',
    component: () => import('../views/modules/demo.vue')
  }
]

const router = new Router({
  mode: 'history',
  base: '/',
  routes: routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
