<template>
    <div id="TopBar">
        <header>
            <div class="menu">
                <img src="../../assets/cnodejs.svg" alt="">
                <ul>
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
                logInState:'',
                signUpState:'',
            }
        },
        created() {
            let vm = this
            bus.$on('login', function () {
                if (localStorage.getItem('acctoken')) {
                    vm.logInState = false
                    vm.signUpState = true
                }
            })
            if (localStorage.getItem('acctoken')) {
                    vm.logInState = false
                    vm.signUpState = true
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
        background: #ccc;
        >.menu {
            margin: 0 auto;
            width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            >img {
                width: 150px;
                height: 40px;
            }
            >ul {
                display: flex;
                >li {
                    margin-left: 15px;
                }
            }
        }
    }
</style>