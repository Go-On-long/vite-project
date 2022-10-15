//router目录下的index.js
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import utils from '../utils'

const router = createRouter({
  // hash 或者 history 模式
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
})

//路由全局前置守卫
router.beforeEach(async (to, from) => {
  // 是否认证
  if (to.meta.Authentication) {
    // token 校验
    if (utils.getUtils()) {
    } else
      return {
        // name: 'login'
        path: '/',
      }
  }
})
//路由全局后置守卫
router.afterEach((to, from) => {
  // console.log('路由全局后置守卫', to, from)
})

export default router
