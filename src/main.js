
import  Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import Axios from './getAllData.js'
Vue.prototype.axios = axios;
Vue.prototype.Axios = Axios;
new Vue({
    el:'#app',
    template:'<App/>',
    components:{App},    
    router,
})