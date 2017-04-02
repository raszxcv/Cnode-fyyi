<template>
    <div id="TopBar">
        <header>
            <div class="menu">
                <a href="#"><img src="../../assets/cnodejs.svg" alt=""></a>
                <ul>
                    <li>
                        <img :src="author" alt="">
                    </li>
                    <li>
                        <router-link to="/">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/Login" v-show="logInState">登录</router-link>
                    </li>
                    <li><a href="#" @click="signUp" v-show="signUpState">登出</a></li>
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
                }
            })
            if (localStorage.getItem('acctoken')) {
                vm.author = JSON.parse(localStorage.getItem('acctoken'))[1]
                vm.logInState = false
                vm.signUpState = true
            } else {
                vm.logInState = true
                vm.signUpState = false
            }
        },
        methods: {
            signUp() {
                localStorage.removeItem('acctoken')
                this.logInState = true
                this.signUpState = false
            },
        },
        computed: {

        }
    }
</script>

<style lang="scss" scoped>
    header {
        width: auto;
        background: #58B7FF;
        >.menu {
            margin: 0 auto;
            width: 80%;
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
                    margin-left: 15px;
                    >img {
                        width: 30px;
                        height: 30px;
                    }
                }
            }
        }
    }
</style>