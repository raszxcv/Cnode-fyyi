<template>
    <div id="comment">
        <header>
            {{commentL}}回复
        </header>
        <ul>
            <li v-for="(item,index) in items">
                <div class='userData'>
                    <span><img :src="item.userUrl"></span>

                    <span>{{item.userName}} {{index+1}}楼</span>
                </div>

                <div class="markdown-body" v-html="item.commentText"></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import bus from '../bus'
    export default {
        data() {
            return {
                items: [],
                commentL: ''

            }
        },
        created() {
            let vm = this
            bus.$on('comment', function (cnt) {
                cnt.map(val => {
                    vm.items.push({
                        commentText: val.content,
                        userName: val.author.loginname,
                        userUrl: val.author.avatar_url
                    })
                })
                vm.commentL = cnt.length
            })
        }
    }
</script>

<style lang='scss'>
    #comment {
        background: #fff;
        max-width: 980px;
        margin: 0 auto;
        margin-top: 10px;
        >header {
            background: #bbb;
        }
        >ul {
            >li {
                border-bottom: 1px solid #ccc;
                >.userData {
                    >span {
                        
                        >img {
                            width: 30px;
                            height:30px;
                            border-radius:5px;
                        }
                    }
                }
                >.markdown-body {
                    padding-left: 20px;
                }
            }
        }
    }
</style>