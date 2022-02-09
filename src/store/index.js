import Vue from "vue";
import Vuex from 'vuex';
import states from '@/store/states'
import mutations from '@/store/mutations'
import getters from '@/store/getters'
import actions from '@/store/actions'

Vue.use(Vuex);
const store = new Vuex.Store({
  states,
  mutations,
  getters,
  actions,
});

export default store;