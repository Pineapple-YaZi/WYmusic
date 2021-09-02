import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Home from '../views/Home'
import Search from '../views/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/index',
    component: Layout,
    children: [
      {
        path: '/home',
        component: Home,
        // 配值路由信息
        meta: {
          title: '首页'
        }
      },
      {
        path: '/search',
        component: Search,
        meta: {
          title: '搜索'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
