import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// createRouter 创建路由实例，===> new VueRouter()
// history 是路由模式，hash模式，history模式
// createWebHistory() 是开启history模块 
// createWebHashHistory() 是开启hash模式   

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/loginAndRegister/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/loginAndRegister/RegisterForm.vue')
  },
  {
    path:'/cesium',
    name:'cesium',
    component:()=>import('../views/Cesium/cesium.vue')
  },
  {
    path:'/text',
    name:'text',
    component:()=>import('../views/text.vue')
  },
] as RouteRecordRaw[]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router