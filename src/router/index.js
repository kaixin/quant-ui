import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource'

import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import AIadvisor from '@/components/AIadvisor'
import Shelfsignal from '@/components/Shelfsignal'
import SignalDevelop from '@/components/SignalDevelop'

import AssetsSteward from '@/components/views/AIadvisor/AssetsSteward'
import ProductManager from '@/components/views/AIadvisor/ProductManager'
import Strategist from '@/components/views/AIadvisor/Strategist'
import CustomBuilt from '@/components/views/AIadvisor/CustomBuilt'

import MyStrategy from '@/components/views/AICommunity/MyStrategy'
import FuncLib from '@/components/views/AICommunity/MyStrategy/FuncLib'
import StrategyAPI from '@/components/views/AICommunity/MyStrategy/StrategyAPI'

import Shelfsignaler from '@/components/views/Shelfsignal/Shelfsignaler'
import Shelfsuccess from '@/components/views/Shelfsignal/Shelfsuccess'
import Customsignaler from '@/components/views/Customsignal/Customsignaler'
import Smallcapitalization from '@/components/views/Customsignal/Smallcapitalization'
import Publishsignal from '@/components/views/Customsignal/Publishsignal'
import Customizeddetails from '@/components/views/Customsignal/Customizeddetails'
import Customtable from '@/components/views/Customsignal/Customtable'
import Officialdetails from '@/components/views/Customsignal/Officialdetails'
import Developersignaler from '@/components/views/Developersignal/Developersignaler'
import Buyersignaler from '@/components/views/Buyersignal/Buyersignaler'


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
      path: '/signalDevelop',
      name: 'SignalDevelop',
      component: SignalDevelop
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
      
    },
    {
      path: '/AICommunity/myStrategy/funcLib',
      name: 'FuncLib',
      component: FuncLib
    },
    {
      path: '/AICommunity/myStrategy/strategyAPI',
      name: 'StrategyAPI',
      component: StrategyAPI
    },
    {
    	path: '/Shelfsignal',
    	name: 'Shelfsignal',
    	component: Shelfsignal,
    	children:[
    		{
    			path: 'Shelfsignaler',
		    	name: 'Shelfsignaler',
		    	component: Shelfsignaler
    		},
    		{
    			path: 'Shelfsuccess',
		    	name: 'Shelfsuccess',
		    	component: Shelfsuccess
    		},
    		{
    			path: 'Customsignaler',
    			name: 'Customsignaler',
    			component: Customsignaler,
    		},
    		{
    			path: 'Smallcapitalization',
    			name: 'Smallcapitalization',
    			component: Smallcapitalization,
    		},
    		{
    			path: 'Publishsignal',
    			name: 'Publishsignal',
    			component: Publishsignal,
    		},
    		{
    			path: 'Customizeddetails',
    			name: 'Customizeddetails',
    			component: Customizeddetails,
    		},
    		{
    			path: 'Customtable',
    			name: 'Customtable',
    			component: Customtable,
    		},
    		{
    			path: 'Officialdetails',
    			name: 'Officialdetails',
    			component: Officialdetails,
    		},
    		{
    			path: 'Developersignaler',
    			name: 'Developersignaler',
    			component: Developersignaler,
    		},
    		{
    			path: 'Buyersignaler',
    			name: 'Buyersignaler',
    			component: Buyersignaler,
    		},
    	]
    },

  ],
  scrollBehavior (to, from, savedPosition) {
    return {x:0, y:0};
  }
})
