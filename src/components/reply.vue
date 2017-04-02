<template>
    <div id='reply'>
        <div class="cnt">
            <textarea v-model="entry"></textarea>
        </div>
        <button @click="add()">提交</button>
    </div>
</template>

<script>
import {reply} from '../getAllData'
    export default {
        name:'reply',
        props:['replyId'],
        data() {
            return {
                entry: '',
                id:'',
            }
        },
        created(){
        },
        methods: {
            add() {
                if(localStorage.getItem('acctoken')){
                    let acctoken = JSON.parse(localStorage.getItem('acctoken'))[0]
                    reply(this,this.replyId,acctoken,this.entry)
                }else{
                    alert('请先登录后再评论!')
                }
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    #reply {
        
        max-width: 980px;
        margin: 0 auto;
        margin-top:10px;
        >.cnt {
            >textarea {
                height: 100px;
                width: 100%;
                border: none;
            }
        }
        @media(max-width:600px){
            >button{
                width:100%;
            }
        }
        @media(min-width:600px){
            >button{
                width:50px;
            }
        }
        >button {
            background: #A3DDF0;
            border: none;
            border-radius: 3px;
            padding: 5px 6px;
            transition: 0.3s;
        }
        >button:hover {
            cursor: pointer;
            background: #6495ED;
        }
    }
</style>