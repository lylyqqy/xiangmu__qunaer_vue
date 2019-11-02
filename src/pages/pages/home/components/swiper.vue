<template>
<div class="wrapper">
     <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for="item of swiperList " :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    
   
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
   
     </swiper>
</div>
</template>
<script>
export default {
    name:"homeSwiper",
    data (){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true,
            },
            swiperList:[{
                id:"0001",
                imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/e7eac5a5e99e6517c61b953c0fece63b.jpg_750x200_4b701cf8.jpg"
            },{
                id:"0002",
                imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/f9511d2b13e02be5aa3969a68d63a633.jpg_750x200_1c250e36.jpg" 
            }]
        }
    }
}
</script>
<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: red !important
    .swiper-img
     width :100%
</style>