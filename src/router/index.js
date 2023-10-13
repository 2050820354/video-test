import Vue from 'vue'
import VueRouter from "vue-router";
import login from '@/views/login'
import home from '@/views/home'
import jtChat from '@/views/jtChat'
import video from '@/views/video'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login'},
    {
      path: '/login', component: login,
    },
    { 
      path: '/home', 
      component: home,
      children: [
        { path: '/jtChat', component: jtChat },
        { path:'/video', component: video}
      ]
    },
  ]
})

export default router