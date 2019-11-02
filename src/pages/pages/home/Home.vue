<template>
    <div>
       <home-header>
       </home-header>
       <home-swiper>
       </home-swiper>
       <home-icons>
       </home-icons>
       <home-recommend>
       </home-recommend>
    </div>
</template>
<script>
import homeHeader from './components/header.vue' 
import homeSwiper from './components/swiper.vue'
import homeIcons from './components/icons.vue'
import homeRecommend from './components/Recommend.vue'
export default {
    name:'Home',
    components:{
        homeHeader,
        homeSwiper,
        homeIcons,
        homeRecommend,
    }
}
</script>
<style >

</style>