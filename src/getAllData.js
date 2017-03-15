import Vue from 'vue'

function Axios(vm,par) {
    vm.items=[];
    vm.axios.get(' https://cnodejs.org/api/v1/topics', {
        params: {
            page:par.page,
            tab:par.tab,
            limit:par.limit
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
                ishow: true
            })
        })
        console.log(datas)
    })
    .catch(function (error) {
    });
}

export default Axios
