import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource'

import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import AIadvisor from '@/components/AIadvisor'

import AssetsSteward from '@/components/views/AIadvisor/AssetsSteward'
import ProductManager from '@/components/views/AIadvisor/ProductManager'
import Strategist from '@/components/views/AIadvisor/Strategist'
import CustomBuilt from '@/components/views/AIadvisor/CustomBuilt'

import MyStrategy from '@/components/views/AICommunity/MyStrategy'

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(VueResource)

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
      component: AIadvisor,

      children: [
        {
          path: 'assetsSteward',
          name: 'AssetsSteward',
          component: AssetsSteward
        },
        {
          path: 'productManager',
          name: 'ProductManager',
          component: ProductManager
        },
        {
          path: 'strategist',
          name: 'Strategist',
          component: Strategist
        },
        {
          path: 'customBuilt',
          name: 'CustomBuilt',
          component: CustomBuilt
        }
      ]
    },
    {
      path: '/AICommunity/myStrategy',
      name: 'MyStrategy',
      component: MyStrategy
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x:0, y:0};
  }
})
