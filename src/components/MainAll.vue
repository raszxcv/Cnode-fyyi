<template>
    <div class="mainAll">
        <main>
            <div class="nav">
                <ul>
                    <li>
                        <a href="#" @click="changTab('all')">全部</a>
                    </li>
                    <li>
                        <a href="#" @click="changTab('good')">精华</a>
                    </li>
                    <li>
                        <a href="#" @click="changTab('share')">分享</a>
                    </li>
                    <li>
                        <a href="#" @click="changTab('ask')">问答</a>
                    </li>
                    <li>
                        <a href="#" @click="changTab('job')">招聘</a>
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
        </main>
    </div>
</template>

<script>
import bus from '../bus'
    export default {
        name: 'MainAll',
        components: {},
        data() {
            return {
                items: [],
                isAll: false,
                isGood: false,
                isAsk: false,
                isJob: false,
                isShare: false,
            }
        },
        created() {
            this.Axios.getTab(this, {
                    limit: 10,
                    page: 1,
                    tab: 'all'
                })
                bus.$emit('nice')
                
        },
        computed: {

        },
        methods: {
            content(id) {
                return `content/${id}`
            },
            statu: function (val) {
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
                        this.Axios(this, {
                            limit: 10,
                            tab: tab
                        })
                        break;
                    case 'ask':
                        this.isAsk = true
                        this.Axios(this, {
                            limit: 10,
                            tab: tab
                        })
                        break;
                    case 'job':
                        this.isJob = true
                        this.Axios(this, {
                            limit: 10,
                            tab: tab
                        })
                        break;
                    case 'share':
                        this.isShare = true
                        this.Axios(this, {
                            limit: 10,
                            tab: tab
                        })
                        break;
                    default:
                        this.isAll = true
                        this.Axios(this, {
                            limit: 10,
                        })
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    main {
        >.nav {
            width: 100%;
            background: red;
            margin: 0 auto;
            margin-top: 30px;
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
                    >.color {
                        color: black;
                    }
                }
            }
        }
        max-width: 980px;
        margin: 0 auto;
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
                    }
                    >img {
                        width: 30px;
                        margin-right: 10px;
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
                        background: green;
                        color: #fff;
                    }
                }
                >li:hover {
                    background: #ccc;
                }
            }
        }
    }
</style>