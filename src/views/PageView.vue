<template>
    <div>
        <p>{{gettitle}}</p>
        <p>{{getmemo}}</p>
    </div>
</template>

<script>
export default {
    name: 'PageView',
    computed: {
        gettitle() {
            return this.$store.state.board[this.$route.params.id-1].title
        },
        getmemo() {
            return this.$store.state.board[this.$route.params.id-1].memo
        }
    }
}
</script>