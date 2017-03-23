<template>
    <div>
        <TopBar :state='message'></TopBar>
        <!--<MainNav></MainNav>-->
        <router-view></router-view>
    </div>
</template>

<script>
    import 'normalize.css/normalize.css'
    import '../assets/reset.css'
    import TopBar from './components/TopBar'
    import MainAll from './components/MainAll'
    import store from './store/index.js'
    import bus from './bus.js'
    export default {
        data() {
            return {
                message: bus.acctoken
            }
        },
        components: {
            TopBar,
            MainAll,
        },
        created() {
            
        },
        store

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