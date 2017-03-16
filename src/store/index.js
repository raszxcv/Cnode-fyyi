import Vuex from 'vuex'
import Vue from 'vue'
import Axios from '../getAllData'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [1,2],
        a:1,
        // isAll: false,
        // isGood: false,
        // isAsk: false,
        // isJob: false,
        // isShare: false,
    },
    mutations: {
        getData: function (state, payload) {
            
            Axios(state,payload)
        }
    }
})