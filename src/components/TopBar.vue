<template>
    <div id="TopBar">
        <header>
            <div class="menu">
                <a href="#"><img src="../../assets/cnodejs.svg" alt=""></a>
                <ul>
                    <li>
                        <img :src="author" alt="" v-show='ishow'>
                    </li>
                    <li>
                        <router-link to="/">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/Login" v-show="logInState">登录</router-link>
                    </li>
                    <li><a href="#" @click.prevent="signUp" v-show="signUpState">登出</a></li>
                </ul>
            </div>
        </header>
    </div>
</template>
<script>
    import bus from '../bus'
    export default {
        name: "TopBar",
        data() {
            return {
                logInState: '',
                signUpState: '',
                ishow: false,
                author: ''
            }
        },
        created() {
            let vm = this
            bus.$on('login', function (author) {
                vm.author = JSON.parse(localStorage.getItem('acctoken'))[1]
                if (localStorage.getItem('acctoken')) {
                    vm.logInState = false
                    vm.signUpState = true
                    vm.ishow = true
                }

            })
            if (localStorage.getItem('acctoken')) {
                vm.author = JSON.parse(localStorage.getItem('acctoken'))[1]
                this.ishow = true
                vm.logInState = false
                vm.signUpState = true
            } else {
                this.ishow = false
                vm.logInState = true
                vm.signUpState = false
            }
        },
        methods: {
            signUp() {
                localStorage.removeItem('acctoken')
                this.author = ''
                this.ishow = false
                this.logInState = true
                this.signUpState = false
            },
        },
        computed: {

        }
    }
</script>

<style lang="scss" scoped>
    /*@media(max-width:600px) {
        header {
            >.menu {
                width: 100%;
            }
        }
    }*/
    @media(max-width:600px){
        header{
            margin-bottom:0px;
        }
    }
    @media(min-width:600px){
        header{
            margin-bottom:20px;
        }
    }
    header {
        width: auto;
        background: #58B7FF;
        @media(max-width:600px){
            >.menu{
                width:100%;
            }
        }
        @media(min-width:600px){
            >.menu{
                width:80%;
            }
        }
        >.menu {
            margin: 0 auto;           
            display: flex;
            justify-content: space-between;
            align-items: center;
            >a {

                >img {
                    width: 150px;
                    height: 40px;
                }
            }

            >ul {
                display: flex;
                align-items: center;
                justify-content: center;
                >li {
                    >img {
                        width: 30px;
                        height: 30px;
                        margin-right: 10px;
                    }
                    >a {
                        display: inline-block;
                        text-align: center;
                        min-width: 35px;
                    }
                }
            }
        }
    }
</style>