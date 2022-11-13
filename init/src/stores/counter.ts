import { createStore } from "vuex";

// 创建一个新的 store 实例
export const counter = createStore({
  state() {
    return {
      count: 0,
    };
  },
  // 类似reducer
  mutations: {
    increment(state) {
      state.count++;
    },
    increment2(state, payload) {
      state.count += payload.amount;
      // store.commit('increment', {
      //   amount: 10
      // })
      // store.commit({
      //   type: 'increment',
      //   amount: 10
      // })
    },
  },
  getters: {
    // store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]
    doubleCount (state) {
      return state.count * 2
    }
  },
  // 类似effects
  actions: {
    increment({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    // async actionA ({ commit }) {
    //   commit('gotData', await getData())
    // },
    // async actionB ({ dispatch, commit }) {
    //   await dispatch('actionA') // 等待 actionA 完成
    //   commit('gotOtherData', await getOtherData())
    // }
  },
});
