import Vue from "vue";
import Vuex from "vuex";
// import * as actions from './actions';
// import mutations from './mutations';
// import state from './state';
import todos from "./modules/todos";

// Load Vuex

Vue.use(Vuex);

// Create Store

export default new Vuex.Store({
  namespaced: true,
  modules: {
    todos,
  },
});
