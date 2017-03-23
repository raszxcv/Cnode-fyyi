<template>
    <div id="Login">
        <div class="box">
            <input v-model="acctoken" placeholder="请输入你的Access Token">
        </div>
        <div class="btn">
            <!--<button @click="login">登录</button>-->
            <a href="#" @click="login">登录</a>  
        </div>

    </div>
</template>

<script>
import bus from '../bus'
    export default {
        name:"login",
        data() {
            return {
                acctoken:'',
            }
        },
        created(){
        },
        methods:{
            login() {
                this.Axios.Login(this,this.acctoken)
            },
        },
    }
    
</script>

<style lang="scss" scoped>
    #Login {
        margin: 0 auto;
        margin-top: 30px;
        max-width: 500px;
        height: 100px;
        background: #fff;
        >.box {
            text-align: center;
            >input {
                margin-top: 20px;
                width: 80%;
            }
        }
        >.btn {
            text-align: center;
            margin-top: 20px;
            >button {
                width: 50px;
            }
        }
    }
</style>