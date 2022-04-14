<template>
  <div class="home">
    <table>
      <tr>
        <td>번호</td>
        <td>제목</td>
        <td>클릭횟수(조회수)</td>
      </tr>
      <tr v-for="data in $store.state.board" :key="data.id"
      @click="[$router.push(`/board/${data.id}`), addcount($route.params.id)]">
        <td>{{data.id}}</td>
        <td>{{data.title}}</td>
        <td>{{data.count}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'HomeView',
  methods: {
    ...mapMutations([
      'addcount'
    ])
  }
}
</script>
