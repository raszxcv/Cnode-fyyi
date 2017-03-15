import Vue from 'vue'
import VueRouter from 'vue-router'

import MainAll from './components/MainAll'
import MainAsk from './components/MainAsk'
import MainJob from './components/MainJob'
import MainShare from './components/MainShare'
import MainGood from './components/MainGood'



Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
	  {path:"/",component:MainAll},
      {path:"/MainAll",component:MainAll},
      {path:"/MainAsk",component:MainAsk},
      {path:"/MainJob",component:MainJob},
      {path:"/MainShare",component:MainShare},
      {path:"/MainGood",component:MainGood},
	]
})

export default router