<template>
    <div id="TopBar">
        <header>
            <div class="menu">
                <img src="../../assets/cnodejs.svg" alt="">
                <ul>
                    <li><a href="#">首页</a></li>
                    <li><a href="#">关于</a></li>
                    <li><a href="#">注册</a></li>
                    <li><a href="#">登录</a></li>
                </ul>
            </div>
        </header>      
    </div>
</template>
<script>
    export default {
        name: "TopBar",
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>

    header {
        width: 100%;
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