import Vue from 'vue'
import bus from './bus'
import Ax from 'axios'
//获取主题列表
export function getTab(vm, par) {
    let items = []
    Ax.get(' https://cnodejs.org/api/v1/topics', {
            params: {
                limit: par.limit,
                page: par.page,
                tab: par.tab,
            }
        })
        .then(function (response) {
            let datas = response.data.data
            datas.map((val, idx) => {
                items.push({
                    title: val.title,
                    author: val.author.avatar_url,
                    reply: val.reply_count,
                    visit: val.visit_count,
                    create: val.create_at,
                    top: val.top,
                    good: val.good,
                    tab: val.tab,
                    idx: idx,
                    id: val.id,
                    ishow: true
                })
            })
            vm.items = items
        })
        .catch(function (error) {});

}
//获取主题详情
export function getTabDatailed(vm, id) {
    Ax.get('https://cnodejs.org/api/v1/topic/' + id, {
            params: {
                mdrender: true
            }
        })
        .then(function (res) {
            vm.cnt = res.data.data.content
            bus.$emit('comment', res.data.data.replies)
        })
}
//登录请求
export function Login(vm, acctoken) {
    Ax({
            method: 'post',
            url: 'https://cnodejs.org/api/v1/accesstoken/',
            data: {
                accesstoken: acctoken
            }
        })
        .then(function (res) {
            let userData = JSON.stringify([acctoken, res.data.avatar_url])
            localStorage.setItem('acctoken', userData)
            bus.$emit('login', res.data.avatar_url)
            history.back()
        })
        .catch(function (error) {
            alert('你的输入有误,请重新输入!')
        })
}
//新建评论
export function reply(vm, cntid, acctoken, entry) {
    console.log(cntid,acctoken,entry)
    Ax({
            method: 'post',
            url: 'https://cnodejs.org/api/v1/topic/' + cntid + '/replies/',
            data: {
                accesstoken: acctoken,
                content: entry,
            }
        })
        .then(function (res) {
            console.log(res)
        })
        .catch(function (error) {
            console.log(error)
        })
}