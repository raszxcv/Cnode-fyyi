<template>
    <div>
        <main v-html="cnt">
           
        </main>
    </div>
</template>

<script>
    export default {
        name:"content",
        data() {
            return {
                cnt:'',
            }
        },
        created(){
            console.log(this.$route.params.id)
            let vm = this
            this.axios.get('https://cnodejs.org/api/v1/topic/'+this.$route.params.id,{
                params:{
                    mdrender:true
                }
            })
            .then(function(res){
                vm.cnt = res.data.data.content

            })
        }
    }
</script>

<style lang="scss" scoped>
    main {
        margin: 0 auto;
        margin-top: 30px;
        width: 80%;
        background: #fff;
    }
</style>