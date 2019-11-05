import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    // 因为没有异步操作，比较简单所以可以直接通过mutations调用，不用actions
    // actions:{
    //     // ctx执行期上下文
    //     changeCity (ctx,city){
    //         ctx.commit('hasChangeCity',city)
    //     }
    // },
    mutations,
    
})