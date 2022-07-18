import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        user :{
            uid :'',
            username : '',
            type: '',



        }
    },

    mutations :{
        setUser(state,val){
            state.user = val


        },

        clearUser(state){
            state.user = {uid: '', username:'', type:''}
        }


    }




})
