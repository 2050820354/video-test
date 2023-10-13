<template>
    <div class="center">
        <div class="pic-box">
            <div class="iconfont icon-qiatongxingxiang">LOGO</div>
            <div class="pic"></div>
        </div>
        <div class="login-box">
            <div class="login">
                <!-- 登入页面标题 -->
                <h1 class="title">Welcome Back :)</h1>
                <div class="title-word">如欲与我们保持联络，请登入🔔</div>
                <!-- 账号和密码 -->
                <div class="account-box">
                    <div class="account">
                        <div class="icon-box">
                            <div class="iconfont icon-zhanghaozhongxinzhanghaoguanli"></div>
                        </div>
                        
                        <div class="row g-2">
                            <div class="col-md">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="floatingInputGrid" placeholder="请输入账号"
                                        value="">
                                    <label for="floatingInputGrid">请输入账号</label>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="password">
                        <div class="icon-box">
                            <div class="iconfont icon-mima"></div>
                        </div>
                       
                        <div class="row g-2">
                            <div class="col-md">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="floatingInputGrid" placeholder="请输入密码" value="">
                                    <label for="floatingInputGrid">请输入密码</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 记住密码 -->
                <div class="function-box">
                    <div class="remember-box">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                        <label class="form-check-label" for="flexCheckChecked">
                            记住密码
                        </label>
                    </div>
                </div>

                <!-- 登入按钮 -->
                <div class="button-box">
                    <button type="button" class="btn btn-primary btn-lg">登入</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoWebLogin',

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
        box-sizing: border-box;
        width: 90vw;
        height: 100vh;
        background-color: white;
    }
    /* 左部分，背景和logo */
    .center .pic-box{
        width: 50%;
        height: 100%;
        float: left;
    }
    .center .pic-box .iconfont{
        margin-top: 3vw;
        margin-left: 5vw;
        color: rgb(106, 233, 233);
        font-size: 2vw;
        font-weight: bold;
    }
    .center .pic-box .pic{
        width: 100%;
        height: 100%;
        background: white url(../assets/imgs/login.png) no-repeat;
        background-size: contain;
        margin-top: 5vw;
    }
    /* 右部分，登入 */
    .center .login-box{
        width: 50%;
        height: 100%;
        float: right;
    }
    .center .login-box .login{
        width: 100%;
        margin-top: 5vw;
        height: 100%;
    }
    .center .login-box .login .title{
        font-size: 3vw;
        margin-left: 2vw;
    }
    .center .login-box .login .title-word{
        margin-top: 1rem;
        font-size:1rem;
        margin-left: 2vw;
    }
    .center .login-box .login .account-box{
        margin-top: 3rem;
        padding-left: 2vw;
        padding-right: 2vw;
        width: 100%;
    }

    .center .login-box .login .account-box .account{
        display: block;
        height: 4.5rem;
        width: 100%;
        margin-top: 1rem;
    }
    /* 账号 */
    .center .login-box .login .account-box .account .icon-box{
        float: left;
        width: 2rem;
        height: 100%
    }
    .center .login-box .login .account-box .account .icon-box .iconfont{
        line-height: 4.5rem;
        text-align: center;
    }
    /* 密码 */
    .center .login-box .login .account-box .password{
        height: 4.5rem;
        width: 100%;
        margin-top: 1rem;
    }
    .center .login-box .login .account-box .password .icon-box{
        float: left;
        width: 2rem;
        height: 100%
    }
    .center .login-box .login .account-box .password .icon-box .iconfont{
        line-height: 4.5rem;
        text-align: center;
    }

    /* 记住密码样式 */
    .function-box{
        width: 100%;
        margin-top: 2rem;
    }
    .function-box .remember-box{
        padding-left: 4rem;
    }
    .function-box .remember-box .form-check-input{
        margin-right: 0.25rem;
    }

    /* 登入按钮 */
    .button-box{
        margin-left: 4rem;
        margin-top: 3rem;
    }
</style>