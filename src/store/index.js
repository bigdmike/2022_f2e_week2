import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_dialog: false,
    signup_dialog: false,
    main_dialog: {
      status: false,
      content: '',
    },
  },
  getters: {},
  mutations: {
    SetLoginDialog(state, action) {
      state.login_dialog = action;
    },
    SetSignupDialog(state, action) {
      state.signup_dialog = action;
    },
    SetMainDialog(state, { action, content }) {
      state.main_dialog.status = action;
      state.main_dialog.content = content;
    },
  },
  actions: {},
  modules: {},
});
