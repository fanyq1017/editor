import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        user : JSON.parse(sessionStorage.getItem('USER_INFO')) || {uid:'', username:'', type:''}
    },

    mutations :{
        setUser(state,val){
            state.user = val
            sessionStorage.setItem('USER_INFO', JSON.stringify(val))


        },

        clearUser(state){
            state.user = {}
            sessionStorage.setItem('USER_INFO',JSON.stringify({uid:'', username:'', type:''}))
        }


    }




})
