<template>
    <div class="center">
        <div class="content">
            <div class="search-box">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">搜索</button>
                </form>
            </div>
            
            <!-- 视频排版组件部分 -->
            <baseVideo></baseVideo>     
        </div>
    </div>
</template>

<script>
import baseVideo from '../components/baseVideo'
export default {
    name: 'VideoWebVideo',
    components:{
        baseVideo
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
    .center{
        width: 80vw;
        height: 100vh;
        background-color: rgb(255, 255, 255, 0.5);
    }
    .center .content{
        padding-top: 10vh;
        width: 75vw;
        height: 100%;
    }
    .center .content .search-box{
        width: 70vw;
        padding-left: 2rem;
        height: 10vh;
    }
    .center .content .search-box .d-flex{
        height: 3rem;
    }
    .center .content .search-box .d-flex .me-2{
        width: 60vw;
    }
</style>