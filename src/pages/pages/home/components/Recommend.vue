<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
               
                    <img class="item-img" :src="item.imgUrl" alt="" >
                
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"homeRecommend",
    data(){
        return{
            recommendList:[{
                id:'0001',
                imgUrl:"http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg",
                title:"成都大熊猫繁育研究基地",
                desc:"看！熊猫宝宝在向你招手呢"
            },
            {
                id:'0002',
                imgUrl:"http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg",
                title:"成都大熊猫繁育研究基地",
                desc:"看！熊猫宝宝在向你招手呢"
            },
            {
                id:'0003',
                imgUrl:"http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg",
                title:"成都大熊猫繁育研究基地",
                desc:"看！熊猫宝宝在向你招手呢"
            },
            {
                id:'0004',
                imgUrl:"http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg",
                title:"成都大熊猫繁育研究基地",
                desc:"看！熊猫宝宝在向你招手呢"
            },]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl' 
    .title
        line-height: .8rem
        background :#eee
        margin-top :.2rem
        text-indent: .2rem
    .item
        display:flex
        height: 1.9rem
        overflow: hidden
        
        .item-img
            width: 1.7rem
            height:1.7rem
            padding:.1rem
        .item-info
            flex:1
            padding : .1rem 
            min-width :0
            .item-title
                list-style height 0.54rem
                font-size :.32rem
                ellipsis()
            .item-desc
                line-height : .4rem
                color: #ccc
                ellipsis()
            .item-btn
                background #ff9300
                padding :0 .2rem 
                border-radius : .06rem
                color : #fff
                line-height: .44rem
                margin-top : .16rem
                
</style>