// 进行路由的初始化 和 配置
// 导入

import VueRouter from 'vue-router'

// 注册
import auth from '@/utils/auth'
import Vue from 'vue'
import Login from '@/views/login'  
import Home from '@/views/home'  
import Welcome from '@/views/welcome'
import Article from '@/views/article'
// 导入404 路由
import NotFound from  '@/views/404'  

Vue.use(VueRouter)
// 初始化

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Home,
      children: [
        { path: '/', component: Welcome },
        { path: '/article', component: Article }
      ]
    },
    { path:'*',component:NotFound}
  ]
})
//前置导航守卫
router.beforeEach((to, from, next) => {
  // 如果你不是登录页面，而且你没有token，拦截到登录页面
  if (to.path !== '/login' && !auth.getUser().token) return next('/login')
  // 其他情况放行
  next()
})
// 导出
export default router
