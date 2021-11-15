import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import quemsou from '@/components/quemsou'
import oquefaco from '@/components/oquefaco'
import hobbies from '@/components/hobbies'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/quemsou',
      name: 'quemsou',
      component: quemsou
    },
    {
      path: '/oquefaco',
      name: 'oquefaco',
      component: oquefaco
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: hobbies
    }
  ]
})
