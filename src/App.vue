<template>
    <div>
        <TopBar></TopBar>
        <!--<MainNav></MainNav>-->
        <router-view>

        </router-view>
    </div>
</template>

<script>
    import 'normalize.css/normalize.css'
    import '../assets/reset.css'
    import TopBar from './components/TopBar'
    import MainNav from './components/MainNav'
    import MainAll from './components/MainAll'

    export default {
        data() {
            return {
                message: '你好aaasdasd'
            }
        },
        components: {
            TopBar,
            MainAll,
            MainNav
        },
        created() {}

    }
</script>

<style lang="scss">
    li {
        list-style: none;
    }
    
    a {
        text-decoration: none;
    }
</style>