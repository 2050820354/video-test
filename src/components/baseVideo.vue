<template>
    <div class="video-center">
        <div class="video-box">
            <div class="container text-center">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-2 g-lg-3">
                    <div class="col mb-3">
                        <input class="form-check-input" type="checkbox">
                        <div class="p-3">
                            <video src="../assets/sp.mp4" controls></video>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <input class="form-check-input" type="checkbox">
                        <div class="p-3">
                            <video src="../assets/sp.mp4" controls></video>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <input class="form-check-input" type="checkbox">
                        <div class="p-3">
                            <video src="../assets/sp.mp4" controls></video>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <input class="form-check-input" type="checkbox">
                        <div class="p-3">
                            <video src="../assets/sp.mp4" controls></video>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <input class="form-check-input" type="checkbox">
                        <div class="p-3">
                            <video src="../assets/sp.mp4" controls></video>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <input class="form-check-input" type="checkbox">
                        <div class="p-3">
                            <video src="../assets/sp.mp4" controls></video>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div class="download-box">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox" value="">
                <label for="inlineCheckbox" style="margin-right: 5px;">全选</label>
                <button class="btn btn-primary" type="submit" >下载</button>
            </div>
        </div>

        <!-- 分页按钮部分 -->
        <div class="page-box">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link">上一页</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">下一页</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'VideoWebBaseVideo',

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
    .video-center{
        width: 100%;
        height: 70vh;
    }
    .video-center .video-box{
        width: 100%;
        height: 100%;
    }
    .video-center .video-box .container{
        height: 100%;
        width: 100%;
    }
    .video-center .video-box .container .row{
        height: 100%;
        margin: 0; 
    }

    video{
        width: 100%;
        border-radius: 15px;
    }
    /* 下载盒子 */
    .download-box{
        width: 50%;
        height: 10vh;
        display: flex;
        align-items: center; 
        padding-left: 2rem;
        float: left;
    }
    /* 分页盒子 */
    .page-box{
        float: right;
        height: 10vh;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .form-check-input{
        width: 1.2rem;
        height: 1.2rem;
    }
    /* 视频单选按钮 */
    .mb-3{
        position: relative;
        display: flex;
        align-items: flex-start;
        z-index: 99;
    }
    .mb-3 .form-check-input{
        top: 1.2rem;
        left: 2rem;
        position: absolute;
        z-index: 999;
        border-radius: 8px
    }
    .mb-3 .p-3{
        border-radius: 20px;
        border: 3px solid black;
        box-shadow: 10px 20px 30px rgb(45, 45, 45);
    }
</style>