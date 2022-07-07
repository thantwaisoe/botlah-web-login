
import { createStore } from 'vuex';

export default createStore({
  state: {
    userId: ""
  },
  mutations: {
    updateUserId(state,userId) {
      localStorage.setItem('userId', userId);
      state.userId = userId;
    }
  },
  actions: {}
})
