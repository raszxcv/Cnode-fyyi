<template>  
    <div id="comment">
        <ul>
            <li v-for="item in items">
                <div class="markdown-body" v-html="item.commentText"></div>
            </li>
        </ul>
    </div>
</template>

<script>
import bus from '../bus'
    export default{
        data(){
            return {
                items:[],

            }
        },
        created() {
            let vm = this
            bus.$on('comment',function(cnt){
                cnt.map(val => {
                    vm.items.push({
                        commentText:val.content,
                        commentTime:val.create_at,
                        userName:val.author.loginname,
                        userUrl:val.author.avatar_url
                    })
                })
                console.log(cnt)
            })
        }
    }
</script>

<style lang='scss'>
    #comment>ul>li>.markdown-body{
        border:1px solid red;
        padding:5px;
        background:#fff;
        max-width: 980px; 
        margin:0 auto;
        margin-top:10px;
    }
</style>