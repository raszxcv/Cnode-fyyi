import Vue from 'vue'
import VueRouter from 'vue-router'

import MainAll from './components/MainAll'
import MainAsk from './components/MainAsk'
import MainJob from './components/MainJob'
import MainShare from './components/MainShare'
import MainGood from './components/MainGood'

import content from './components/content'



Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
	  {path:"/",component:MainAll},
      {path:"/MainAll",component:MainAll,name:'MainAll'},
      {path:"/content/:id",component:content,name:'content'},
	]
})
export default router