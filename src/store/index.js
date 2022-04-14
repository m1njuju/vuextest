import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    board: [
      { id:1, title:"첫 번째 제목", count:0, memo:"첫 번째 작성된 내용입니다" },
      { id:2, title:"두 번째 제목", count:0, memo:"두 번째 작성된 내용입니다" }
    ]
  },
  getters: {
  },
  mutations: {
    addmemo(state, {title, memo}) {
      const id = state.board.length+1;
      state.board.push({ id: id, title: title, count:0, memo: memo})
    },
    addcount(state, id) {
      return state.board[id-1].count++;
    }
  },
  actions: {
  },
  modules: {
  }
})
