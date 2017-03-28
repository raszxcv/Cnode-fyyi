<template>
    <div class="mainAll">
        <main>
            <div class="nav">
                <ul>
                    <li :class="{active:isAll}">
                        <a href="#" @click.prevent="changTab('all')">全部</a>
                    </li>
                    <li :class="{active:isGood}">
                        <a href="#" @click.prevent="changTab('good')">精华</a>
                    </li>
                    <li :class="{active:isShare}">
                        <a href="#" @click.prevent="changTab('share')">分享</a>
                    </li>
                    <li :class="{active:isAsk}">
                        <a href="#" @click.prevent="changTab('ask')">问答</a>
                    </li>
                    <li :class="{active:isJob}">
                        <a href="#" @click.prevent="changTab('job')">招聘</a>
                    </li>
                </ul>
            </div>
            <div class="all">
                <ul>
                    <li v-for="(item,index) in items">
                        <img :src="item.author">
                        <span class='replyVisit'>{{ item.reply }}/{{ item.visit}}</span>
                        <span class='statu' v-text="statu(index)"></span>
                        <router-link :to="content(item.id)">{{ item.title }}</router-link>
                    </li>
                </ul>
            </div>
            <ul class="ab">
                <li>
                    <a href="#" @click.prevent='top'>
                        <<</a>
                </li>
                <li>
                    <a href="#" @click.prevent='pre'>
                        <</a>
                </li>
                <li><a href="#" @click.prevent='next'>></a></li>
                <li><a href="#" @click.prevent='page'>>></a></li>
                {{num}}
            </ul>
        </main>

    </div>
</template>

<script>
    import bus from '../bus'
    import {
        getTab
    } from '../getAllData'
    export default {
        name: 'MainAll',
        components: {},
        data() {
            return {
                items: [],
                isAll: true,
                isGood: false,
                isAsk: false,
                isJob: false,
                isShare: false,
                num: 1,
                status: '',
            }
        },
        created() {
            getTab(this,{
                limit:20,
                page:this.num,
                tab:this.status
            })
            bus.$emit('nice')
        },
        computed: {

        },
        methods: {
            content(id) {
                return `content/${id}`
            },
            statu(val) {
                if (this.items[val].top === true) {
                    return "置顶"
                } else if (this.items[val].good === true) {
                    return "精华"
                } else if (this.items[val].tab === "ask") {
                    return "问答"
                } else if (this.items[val].tab === "share") {
                    return "分享"
                } else if (this.items[val].tab === "job") {
                    return "招聘"
                } else {
                    this.items[val].ishow = false
                }
            },
            changTab(tab) {
                [this.isGood, this.isAsk, this.isJob, this.isShare, this.isAll] = [false, false, false, false, false]
                switch (tab) {
                    case 'good':
                        this.isGood = true
                        this.status = tab
                        this.num = 1
                        getTab(this, {
                            limit: 20,
                            tab: tab
                        })
                        break;
                    case 'ask':
                        this.isAsk = true
                        this.status = tab
                        this.num = 1
                        getTab(this, {
                            limit: 20,
                            tab: tab
                        })
                        break;
                    case 'job':
                        this.isJob = true
                        this.status = tab
                        this.num = 1
                        getTab(this, {
                            limit: 20,
                            tab: tab
                        })
                        break;
                    case 'share':
                        this.isShare = true
                        this.status = tab
                        this.num = 1
                        getTab(this, {
                            limit: 20,
                            tab: tab
                        })
                        break;
                    default:
                        this.isAll = true
                        this.num = 1
                        this.status = ''
                        getTab(this, {
                            limit: 20,
                        })
                }
            },
            page(status) {
                // switch (status) {
                //     case "next":
                //         this.num += 1
                //         getTab(this, {
                //             limit: 10,
                //             page: this.num,
                //             tab: this.status
                //         })
                //         break;
                //     case "pre":
                //         this.num -= 1
                //         getTab(this, {
                //             limit: 10,
                //             page: this.num,
                //             tab: this.status
                //         })
                //         break;
                // }
            },
            next(){
                this.num += 1
                getTab(this,{
                    limit:20,
                    page:this.num,
                    tab:this.status
                })
            },
            pre(){
                this.num -= 1
                if(this.num<1){
                    this.num = 1
                }
                getTab(this,{
                    limit:20,
                    page:this.num,
                    tab:this.status
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    main {
        >.nav {
            width: 100%;
            background: #87CEFA;
            margin: 0 auto;

            >ul {
                display: flex;
                >li {
                    transition: 0.3s;
                    margin-left: 12px;
                    padding: 10px;
                    >a {
                        color: #fff;
                        font-size: 14px;
                        text-align: center;
                    }
                    >.color {
                        color: black;
                    }
                }
                >li:hover {
                    background: #1E90FF;
                }
            }
        }
        max-width: 980px;
        margin: 0 auto;
        margin-top: 30px;
        background: #fff;
        >.all {
            background: #fff;
            >ul {
                >li {
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #ccc;
                    padding: 5px;
                    padding-left: 10px;
                    >a {
                        word-break: break-all;
                        margin-left: 5px;
                        color:#000;
                    }
                    >img {
                        width: 30px;
                        margin-right: 10px;
                        border-radius: 3px;
                    }
                    >.replyVisit {
                        font-size: 10px;
                        margin-right: 10px;
                        min-width: 65px;
                        text-align: center;
                    }
                    >.statu {
                        font-size: 14px;
                        margin-right: 10px;
                        min-width: 30px;
                        background: #F0FFFF;
                        color: #000;
                        padding: 1px;
                        text-align: center;
                    }
                }
                >li:hover {
                    background: #F0F8FF;
                }
            }
        }
    }

    .active {
        background: #1E90FF;
    }

    .ab {
        margin-top: 20px;
        margin-left: 10px;
        display: flex;
        >li {
            text-align: center;
            padding: 5px;
            width: 30px;
            margin-right: 3px;
            background: #ADD8E6;
            border-radius: 3px;
        }
        >li:hover {
            background: #87CEEB;
        }
    }
</style>