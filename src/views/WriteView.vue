<template>
  <div class="write">
    <h1>글을 작성하는 공간입니다</h1>
    <input type="text" size="27" v-model="title"><br>
    <textarea cols="30" rows="10" v-model="memo"></textarea><br>
    <button @click="addmemoMu">완료</button>
  </div>
</template>

<script>
export default {
  name: 'WriteView',
  data: () =>({
    title:'',
    memo:''
  }),
  methods: {
    addmemoMu() {
      this.$store.commit('addmemo',{
        title: this.title,
        memo: this.memo
      })
      this.$router.push('/')
    }
  }
}
</script>
