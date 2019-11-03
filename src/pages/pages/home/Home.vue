<template>
    <div>
       <home-header >
       </home-header>
       <home-swiper :list="swiperList">
       </home-swiper>
       <home-icons :list="iconList">
       </home-icons>
       <home-recommend :list="recommendList">
       </home-recommend>
       <home-weekend :list="weekendList">
       </home-weekend>
    </div>
</template>
<script>
import homeHeader from './components/Header.vue' 
import homeSwiper from './components/swiper.vue'
import homeIcons from './components/icons.vue'
import homeRecommend from './components/Recommend.vue'
import homeWeekend from './components/Weekend.vue'
import axios from 'axios'
export default {
    name:'Home',
    components:{
        homeHeader,
        homeSwiper,
        homeIcons,
        homeRecommend,
        homeWeekend,
    },
    mounted() {
      this.getHomeInfo()  
    },
    data(){
        return {
            
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[],
        }
    },
    methods:{
        getHomeInfo () {
            axios.get('/api/index.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data;
            if(res.ret && res.data)
            {
                const data =res.data;
                
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList;
            }
           
        }
    },
}
</script>
<style >

</style>