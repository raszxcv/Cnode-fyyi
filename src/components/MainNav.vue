<template>
    <div>
        <div class="nav">
            <ul>
                <li><router-link to="/MainAll">全部</router-link></li>
                <li><router-link to="/MainGood">精华</router-link></li>
                <li><router-link to="/MainShare">分享</router-link></li>
                <li><router-link to="/MainAsk">问答</router-link></li>
                <li><router-link to="/MainJob">招聘</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        name:"MainNav",
        data(){
            return {

            }
        }
    }
</script>


<style lang="scss" scoped>
    .nav {
        width: 80%;
        background: red;
        margin:0 auto;
        margin-top:30px;
        >ul {
            display: flex;
            padding: 8px;
            >li {
                margin: 1px;
                margin-left: 12px;
                padding: 2px;
                >a {
                    color: #fff;
                    font-size: 14px;
                }
            }
            >li:hover {
                >a {
                    color: #000;
                }
            }
        }
    }
</style>