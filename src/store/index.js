import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 번호, 제목, 내용, 클릭횟수 > 객체
    // 여러 개 들어가 있음 > 배열
    boardlist: [
      // 객체의 특징 - 속성이름(문자열): 속성값(모든 자료형)
      { id:1, title:"첫 번째 제목", memo:"첫 번째 작성된 내용입니다", count:0 },
      { id:2, title:"두 번째 제목", memo:"두 번째 작성된 내용입니다", count:0 }
    ]
  },
  getters: {
  },
  mutations: {
    addboard(state, {title, memo}) {
      const id = state.boardlist.length+1;
      state.boardlist.push({ id: id, title: title, count:0, memo: memo})
    },
    addcount(state, id) {
      // console.log(this.$store.state.boardlist[0])
      state.boardlist[id-1].count++;
    }
  },
  actions: {
  },
  modules: {
  }
})
