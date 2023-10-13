<template>
    <div class="center">
        <div class="chat-w">
            <h1>大模型</h1>
            <div class="robot-responce">
                <div class="text-box">
                    <div class="icon-box">
                        <div class="iconfont icon-jiqiren">
                        </div>
                    </div>
                    <div class="response-box">
                        <p class="response">您好，很高兴为您服务🥰</p>
                    </div>
                </div>
            </div>
            <div v-for="message in chatMessages" :key="message.id" :class="message.type + '-responce'">
                <div class="text-box">
                    <div class="icon-box">
                        <div class="iconfont" :class="message.type === 'robot' ? 'icon-jiqiren' : 'icon-yonghu'">
                        </div>
                    </div>
                    <div class="response-box">
                        <p class="response" v-html="renderMarkdown(message.text)" style="white-space: pre-line;"></p>
                    </div>
                </div>
            </div>
            <div class="clear-part" v-show="chatMessages.length > 0">
                <button type="button" class="btn btn-outline-dark" @click="clearChat">
                    清空对话
                </button>
            </div>
        </div>
        <div class="q-bar">
            <div class="form-floating">
                <textarea v-focus v-model="newMessage" @keyup.enter="sendMessage" class="form-control"
                    placeholder="Shift + Enter 换行，Enter 发送" style="height: 100px"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        data() {
            return {
                chatMessages: [],
                newMessage: ''
            };
        },
        methods: {
            async sendMessage() {
                // 添加用户的消息到聊天
                if (!this.newMessage.trim()){
                    return
                }
                this.addMessage('human', this.newMessage);

                // 发送用户的消息到OpenAI API
                const response = await this.getOpenAIResponse(this.newMessage);

                // 添加OpenAI对聊天的响应
                this.addMessage('robot', response.data.choices[0].text);

                // 清除输入字段
                this.newMessage = '';
            },
            async getOpenAIResponse(prompt) {
                // 调用OpenAI API
                try {
                    const response = await axios.post(
                        'https://api.openai.com/v1/completions',
                        {
                            model: "text-davinci-003",
                            prompt: prompt,
                            temperature: 0.5,
                            max_tokens: 700,
                            top_p: 1,
                            frequency_penalty: 1,
                            presence_penalty: 1.0,
                            stop: ["ai"],
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer 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'
                            }
                        }
                    );
                    console.log(response);
                    return response;
                } catch (error) {
                    console.error('Error calling OpenAI API:', error);
                    // 处理错误
                    return { 
                        data: { 
                            choices: [{ text: '对不起,可能由于接口额度不够，我无法处理您的请求。' }] 
                        } 
                    };
                }
            },
            addMessage(type, t) {
                // 在聊天中添加消息
                const text = t.replace(/\n/,'')
                // const text = t2.replace(/^```([\s\S]*)```$/g, '<kbd>$1</kbd>')
                this.chatMessages.push({ id: Date.now(), type, text });
            },
            clearChat() {
                // 清除聊天记录
                this.chatMessages = [];
            },
            renderMarkdown(text) {
                // 将Markdown风格的"```"代码块转换为HTML
                return text.replace(/```([\s\S]*?)```/g, (match, code) => {
                    // 使用 <pre> 和 <code> 标签包裹代码块
                    return `<pre><code>${code}</code></pre>`;
                });
            },
        },
    };
</script>
<style scoped>
    /* 主体部分 */
    .center{
        max-width: 70vw;
        background-color: rgb(255, 255, 255,0.5);
    }
    .center .chat-w{
        padding-top: 5rem ;
        width: 100%;
        padding-bottom: 10rem;
    }
    .center .chat-w h1{
        font-size: 2rem;
        font-weight: bold;
    }

    /* 机器回答 */
    .robot-responce{
        margin-top: 1.5rem;
        
        padding-left: 1rem;
    }
    .icon-box{
        float: left;
    }
    .text-box{
        line-height: 3rem;
    }
    .icon-box{
        width: 2rem;
        height: 2rem;
        border: 1px solid rgb(209, 207, 207);
        position: relative;
        top: 0.8rem;
        margin-right: 1rem;
        border-radius: 8px;
    }
    .icon-box .iconfont{
        font-size: 1.5rem;
        position: relative;
        left: 0.18rem;
        bottom: 0.5rem;
    }
    
    /* 人类部分 */
    .human-responce{
        margin-top: 1.5rem;
        padding-left: 1rem;
        background-color: rgb(219, 219, 219,0.5);
        border-radius: 8px;
    }
    .response{
        word-break: break-word;
        line-height: 1.5rem;
        margin-bottom: 0rem;
    }
    /* .response::before{

    } */
    .response-box::before{
        content: '';
        display: block;
        width: 100%;
        height: 1rem;
    }
    .response-box::after{
        content: '';
        display: block;
        width: 100%;
        height: 1rem;
    }
    .response-box{
        margin-left: 3rem;
    }
    /* 清空按钮 */
    .clear-part{
        padding-top: 1rem;
    }
    /* question box*/
    .q-bar{
        background-color: white;
        height: 10rem;
        position: fixed;
        bottom: 0;
        width: 70vw;
    }
    .q-bar .form-control{
        border-radius: 10px;
    }
</style>