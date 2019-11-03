import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/pages/home/Home.vue'
import City from '../pages/pages/city/City.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/City',
      name:'City',
      component:City
    }
    
  ]
})
