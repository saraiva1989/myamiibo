import Vue from 'vue'
import Vuex from 'vuex'
//importa o caminho do modulo (organização por pasta)
import amiibo from './amiibo'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    amiibo
  }
})
