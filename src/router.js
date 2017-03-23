import Vue from 'vue'
import VueRouter from 'vue-router'

import MainAll from './components/MainAll'
import Login from './components/Login'
import content from './components/content'



Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
	  {path:"/",component:MainAll},
      {path:"/MainAll/:state",component:MainAll,name:'MainAll'},
      {path:"/content/:id",component:content,name:'content'},
	  {path:"/Login",component:Login,name:'Login'}
	]
})
export default router