<template>
    <div class="mainAll">
        <main>
            <div class="all">
                <ul>
                    <li v-for="(item,index) in items">
                        <img :src="item.author">
                        <span class='replyVisit'>{{ item.reply }}/{{ item.visit}}</span>
                        <span class='statu' v-text="statu(index)" v-if="item.ishow"></span>
                        <a href="#">{{ item.title }}</a>
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items:[]
            }
        },
        created() {
            this.Axios(this,{
                page:1,
                tab:'good',
                limit:10
            })
        },
         methods: {
            statu:function(val){
                if(this.items[val].top === true){
                    return "置顶"
                }else if(this.items[val].good === true){
                    return "精华"
                }else if(this.items[val].tab === "ask"){
                    return "问答"
                }else if(this.items[val].tab === "share"){
                    return "分享"
                }else if(this.items[val].tab === "job"){
                    return "招聘"
                }else{
                    this.items[val].ishow = false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    main {
        width: 80%;
        margin: 0 auto;
        background: #fff;
        >.all {
            background: #fff;
            >ul {
                >li {
                    display:flex;
                    align-items:center;
                    border-bottom: 1px solid #ccc;
                    padding: 5px;
                    padding-left: 10px;
                    >img{
                        width:30px;
                        height:30px;
                        margin-right:10px;
                    }
                    >.replyVisit{
                        font-size: 10px;
                        margin-right: 10px;
                        width:65px;
                        text-align: center;
                    }
                    >.statu{
                        font-size:14px;
                        margin-right:10px;
                        padding:2px;
                        background:green;
                    }
                }
            }
        }
    }
</style>