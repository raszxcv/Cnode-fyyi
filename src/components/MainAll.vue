<template>
    <div class="mainAll">
        <main>
            <div class="nav">
                <ul>
                    <li>
                        <a href="#" @click="changTab('all')" :class="{color:isAll}">全部</a>
                    </li>
                    <li>
                        <a href="#" @click="changTab('good')" :class="{color:isGood}">精华</a>
                    </li>
                    <li>
                        <a href="#" @click="changTab('share')" :class="{color:isShare}">分享</a>
                    </li>
                    <li>
                        <a href="#" @click="changTab('ask')" :class="{color:isAsk}">问答</a>
                    </li>
                    <li>
                        <a href="#" @click="changTab('job')" :class="{color:isJob}">招聘</a>
                    </li>
                </ul>
            </div>
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
        name: 'MainAll',
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
            this.Axios(this, {
                limit: 10,
                page: 1,

            })
            this.isAll = true
        },
        computed: {},
        methods: {
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
                        console.log(this.isGood)
                        this.isGood = true
                        console.log(this.isGood)
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
            }
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
        width: 80%;
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
                    >img {
                        width: 30px;
                        height: 30px;
                        margin-right: 10px;
                    }
                    >.replyVisit {
                        font-size: 10px;
                        margin-right: 10px;
                        width: 65px;
                        text-align: center;
                    }
                    >.statu {
                        font-size: 14px;
                        margin-right: 10px;
                        padding: 2px;
                        background: green;
                    }
                }
                >li:hover {
                    background: #ccc;
                }
            }
        }
    }
</style>