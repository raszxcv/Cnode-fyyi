import Vue from 'vue'
import bus from './bus'
const Axios = {
    //获取首页主题列表
    getTab(vm, par) {
        vm.items = []
        vm.axios.get(' https://cnodejs.org/api/v1/topics', {
                params: {
                    limit: par.limit,
                    page: par.page,
                    tab: par.tab,
                }
            })
            .then(function (response) {
                let datas = response.data.data
                datas.map((val, idx) => {
                    vm.items.push({
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
            })
            .catch(function (error) {});
    },
    //获取主题详情页
    getTabDetailed(vm, id) {
        vm.axios.get('https://cnodejs.org/api/v1/topic/' + id, {
                params: {
                    mdrender: true
                }
            })
            .then(function (res) {
                vm.cnt = res.data.data.content
                bus.$emit('comment',res.data.data.replies)
                // console.log(res.data.data.replies[0])
            })
    },
    //登录请求
    Login(vm, acctoken) {
        vm.axios({
                method: 'post',
                url: 'https://cnodejs.org/api/v1/accesstoken/',
                data: {
                    accesstoken: acctoken
                }
            })
            .then(function (res) {
                localStorage.setItem('acctoken',acctoken)
                bus.$emit('login')
                console.log(res)
            })
            .catch(function (error) {
                console.log(error)
            })
    }



}
export default Axios