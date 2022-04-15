<template>
  <div class="write">
    <h3>글을 작성하는 공간입니다</h3>
    <input type="text" size="27" v-model="title"><br>
    <textarea cols="30" rows="10" v-model="memo"></textarea><br>
    <button @click="addboard">완료</button>
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
    addboard() {
      const board = {title: this.title, memo: this.memo}
      this.$store.commit('addboard', board);
      this.$router.push('/')
    }
  }
}
</script>
