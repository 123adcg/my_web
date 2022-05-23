import Vue from 'vue'
import VueRouter from 'vue-router'
import Book from '../views/BookView.vue'
import Blog from '../views/BlogView.vue'
import Resource from '../views/ResourceView.vue'
import Home from '../views/HomeView.vue'
import Video from '../views/VideoView.vue'
import User from '../views/UserView.vue'
import Layout from '../views/LayoutView.vue'
import Login from '../views/LoginView.vue'
import BlogDetail from '../components/BlogDetail'
import SectionDetail from '../components/SectionDetail'
import Chapter from '../components/MyChapter'
import Section from '../components/MySection'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: '',
    component: Layout,
    children: [{
        path: '/',
        name: '',
        component: Home
      },
      {
        path: '/book',
        name: '',
        component: Book
      },

      {
        path: '/chapter',
        name: '',
        component: Chapter
      },
      {
        path: '/section',
        name: '',
        component: Section
      }, {
        path: '/section/:id',
        name: '',
        component: SectionDetail
      }, {
        path: '/createSection',
        name: '',
        component: SectionDetail
      },
      {
        path: '/blog',
        name: '',
        component: Blog
      },
      {
        path: '/blog/:id',
        name: '',
        component: BlogDetail
      },
      {
        path: '/createBlog',
        name: '',
        component: BlogDetail
      },
      {
        path: '/video',
        name: '',
        component: Video
      },
      {
        path: '/resource',
        name: '',
        component: Resource
      },
      {
        path: '/user',
        name: '',
        component: User
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  if(to.path == '/login'){
    next();
  }else{
    if(localStorage.getItem("token")){
      next();
    }else{
      next("/login")
    }
  }
})

//防止element-ui路由跳转报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router