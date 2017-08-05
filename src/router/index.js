import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import AIadvisor from '@/components/Aiadvisor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path: '/aboutUs',
    	name: 'AboutUs',
    	component: AboutUs
    },
    {
      path: '/AIadvisor',
      name: 'AIadvisor',
      component: AIadvisor
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x:0, y:0};
  }
})
