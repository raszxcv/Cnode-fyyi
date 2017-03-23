<template>
    <div>
        <main class="markdown-body" v-html="cnt">
        </main>
        <comment></comment>
    </div>

</template>

<script>
    import 'github-markdown-css/github-markdown.css'
    import comment from './comment'
    export default {
        name: "content",
        components: {
            comment
        },
        data() {
            return {
                cnt: '',
            }
        },
        created() {
            this.Axios.getTabDetailed(this, this.$route.params.id)
        }
    }
</script>

<style lang="scss">
    main.markdown-body {
        margin: 0 auto;
        margin-top: 30px;
        max-width: 980px;
        background: #fff;
        word-break: break-all;
    }

    .markdown-text {
        width: 96%;
        margin: 0 auto;
        >p {
            margin: 0 auto;
            >img {
                width: 100%;
            }
        }
        >pre {
            white-space: pre-wrap;
        }
    }
</style>