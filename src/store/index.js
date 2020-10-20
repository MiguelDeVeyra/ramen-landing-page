import { createStore } from 'vuex'

export default createStore({
  state: {
    defaultLanguage : true,
    message: 'hello vuex'
  },

  mutations: {
    LANG_SWITCH(state, payload) {
      state.defaultLanguage = payload;
    }
  },

  actions: {
  },

  getters: {

  },
  
  modules: {
    getMessage(state) {
      return state.message;
    }
  }
})
