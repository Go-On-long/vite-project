//router目录下的index.js
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import { routes } from "./routes"

const router = createRouter({
    // hash 或者 history 模式
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes,
})
// 全局路由守卫的方法跟vue-router3一样
//路由全局前置守卫
router.beforeEach((to, from, next) => {
    console.log("路由全局前置守卫", to, from)
    next()
})
//路由全局后置守卫
router.afterEach((to, from, next) => {
    console.log("路由全局后置守卫", to, from)
    next()
})

export default router
