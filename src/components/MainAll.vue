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
                <li @click.prevent='top' class='top'>
                    <a href="#">
                        <<</a>
                </li>
                <li @click.prevent='pre' class='pre'>
                    <a href="#">
                        <</a>
                </li>
                <li class='page'>
                    <span v-for="(item,index) in pageNum" @click="page(index)" :class="{ inpage:isPage(index) }">
                        <a href="javascript:void(0)" >{{ item }}</a>
                        </span>
                </li>
                <li @click.prevent='next' class='next'><a href="#">></a></li>
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
                isAll: localStorage.getItem('tab') === 'all',
                isGood: localStorage.getItem('tab') === 'good',
                isAsk: localStorage.getItem('tab') === 'ask',
                isJob: localStorage.getItem('tab') === 'job',
                isShare: localStorage.getItem('tab') === 'share',
                num: +localStorage.getItem('page') || 1,
                status: localStorage.getItem('tab') || '',
                pages: [1, 2, 3, 4, 5],
            }
        },
        created() {
            localStorage.setItem('tab','all')
            this.pages = [this.num, this.num + 1, this.num + 2, this.num + 3, this.num + 4]
            getTab(this, {
                limit: 20,
                page: this.num,
                tab: this.status
            })
            bus.$emit('nice')
        },
        computed: {
            pageNum() {
                if (this.pages.indexOf(this.num) > 2) {
                    this.pages.shift()
                    this.pages.push(this.pages[this.pages.length - 1] + 1)
                    return this.pages
                } else if (this.pages.indexOf(this.num) < 1) {
                    if (this.num === 1) {
                        this.pages = [1, 2, 3, 4, 5]
                        return this.pages
                    }
                    this.pages.pop()
                    this.pages.unshift(this.pages[0] - 1)
                    return this.pages
                } else {
                    return this.pages
                }
            },
            num() {
                if (localStorage.getItem('page')) {
                    return localStorage.getItem('page')
                } else {
                    return 1
                }
            }
        },
        methods: {
            isPage(idx) {
                if (this.pages[idx] === this.num) {
                    return true
                }
            },
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
                        this.num = 1
                        this.pages = [1, 2, 3, 4, 5]
                        localStorage.setItem('tab', tab)
                        getTab(this, {
                            limit: 20,
                            tab: tab
                        })
                        break;
                    case 'ask':
                        this.isAsk = true
                        this.num = 1
                        this.pages = [1, 2, 3, 4, 5]
                        localStorage.setItem('tab', tab)
                        getTab(this, {
                            limit: 20,
                            tab: tab
                        })
                        break;
                    case 'job':
                        this.isJob = true
                        this.num = 1
                        this.pages = [1, 2, 3, 4, 5]
                        localStorage.setItem('tab', tab)
                        getTab(this, {
                            limit: 20,
                            tab: tab
                        })
                        break;
                    case 'share':
                        this.isShare = true
                        this.num = 1
                        this.pages = [1, 2, 3, 4, 5]
                        localStorage.setItem('tab', tab)
                        getTab(this, {
                            limit: 20,
                            tab: tab
                        })
                        break;
                    default:
                        this.isAll = true
                        this.num = 1
                        this.pages = [1, 2, 3, 4, 5]
                        localStorage.setItem('tab', tab)
                        getTab(this, {
                            limit: 20,
                        })
                }
            },
            page(idx) {
                this.num = this.pages[idx]
                localStorage.setItem('page', this.num)
                getTab(this, {
                    limit: 20,
                    page: this.num,
                    tab: this.status
                })
            },
            top() {
                this.num = 1
                getTab(this, {
                    limit: 20,
                    page: this.num,
                    tab: this.status
                })
            },
            next() {
                this.num += 1
                localStorage.setItem('page', this.num)
                getTab(this, {
                    limit: 20,
                    page: this.num,
                    tab: this.status
                })
            },
            pre() {
                this.num -= 1
                if (this.num < 1) {
                    this.num = 1
                }
                localStorage.setItem('page', this.num)
                getTab(this, {
                    limit: 20,
                    page: this.num,
                    tab: this.status
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
@media(min-width:600px){
    main{
        margin-bottom:20px;  
    }
}
@media(max-width:600px){
    main{
        margin-bottom:0px;  
    }
}
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
        margin-left:auto;
        margin-right:auto;
        background: #fff;
        box-shadow:5px 5px 10px #888;
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
                        color: #000;
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
        display: flex;
        >li {
            text-align: center;
            width: 30px;
            height: 30px;
            line-height:30px;
            background: #ADD8E6;
            border-radius: 3px;
        }
        >li:hover {
            background: #87CEEB;
        }
        >.page:hover {
            background: none;
        }
        >.pre {
            margin-right: 0px;
        }
        @media(min-width:600px) {
            >.page {
                width: 150px;
            }
        }
        >.page {
            width: 150px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-content: center;
            margin-right: 0px;
            padding-right: 0;
            padding-left: 0;
            >span {
                display: inline-block;
                line-height: 30px;
                width: 30px;
                height: 30px;
                background: #fff;
                border-radius: 3px;
                background: #87CEEB;
                cursor: pointer;
                >a {
                    color: black;
                }            
            }
            >span:hover{
                background:#eee;
            }
            >.inpage {
                    background:#fff;
                }
        }
    }
</style>