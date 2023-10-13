<template>
    <div class="center">
        <div class="content">
            <div class="background"></div>
            <router-view></router-view>
        </div>
        <div class="tabbar-box">
            <!-- logo -->
            <div class="logo-box">
                <div class="iconfont icon-shouye"></div>
                <div class="logo-word" >欢迎尊贵的用户</div>
            </div>

            <!-- 导航内容 -->
            <nav class="tabbar">
                <router-link to="/jtChat">AI聊天</router-link>
                <router-link to="/video">首页视频</router-link>
                <router-link to="/">用户视频</router-link>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoWebHome',

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
    /* 主体 */
    .center{
        position: relative;
        width: 100vw;
        height: 100vh;
        background-color: rgb(255, 255, 255);
    }
    /* 内容部分 */
    .center .content{
        width: 80vw;
        height: 100%;
        position: absolute;
        left: 20vw;

    }
    /* 背景部分 */
    .center .content .background{
        background: white url(../assets/imgs/home.png) no-repeat;
        width: 100%;
        height: 100%;
        background-size: contain;
        background-position: 10rem;
        position: absolute;
        /* left: 10vw;
        top: 5vh; */
    }
    /* 导航条 */
    .center .tabbar-box{
        position: fixed;
        left: 0;
        width: 15vw;
        background-color: rgb(198, 222, 250,0.5);
        height: 100vh;
        text-align: center;
    }
    /* 导航条-logo */
    .center .tabbar-box .logo-box{
        width: 100%;
        height: 10rem;
        padding-top: 5vh;
    }
    .center .tabbar-box .logo-box .iconfont{
        font-size: 3rem;
        color: #9BD1FF;
    }
    /* 导航条-跳转item */
    .center .tabbar-box .tabbar{
        width: 100%;
        height: 100%;
    }
    .center .tabbar-box .tabbar a{
        display: block;
        text-decoration: none;
        width: 100%;
        height: 5rem;
        line-height: 5rem;
        color: #91D4EC;
        font-weight: bolder;
    }
    .center .tabbar-box .tabbar a:hover{
        background-color: rgb(155, 209, 255,0.5);
    }
</style>