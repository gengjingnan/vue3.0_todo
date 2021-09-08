import { createRouter, createWebHistory } from 'vue-router'
import Start from '../views/Start.vue'
// 路由的配置数组 
// path:路由路径 必须以/开头   (必填)
// component:对应的路由组件    (必填)
// name:路由的属性
const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // 按需引入   
    // 如果没有访问  就不会加载该组件  节约性能
    component: () => import( '../views/About.vue')
  }
]
// 创建路由对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
