import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        city:'上海'
    },
    // 因为没有异步操作，比较简单所以可以直接通过mutations调用，不用actions
    // actions:{
    //     // ctx执行期上下文
    //     changeCity (ctx,city){
    //         ctx.commit('hasChangeCity',city)
    //     }
    // },
    mutations:{
        hasChangeCity(state,city){
            state.city = city
        }
    }
})