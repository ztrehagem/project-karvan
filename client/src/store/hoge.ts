import Vue from 'vue';
import Vuex, { Module } from 'vuex';

Vue.use(Vuex);

export interface HogeState {
  hoge: null;
}

export const hoge: Module<HogeState, {}> = {
  namespaced: true,
  state: {
    hoge: null,
  },
  mutations: {
  },
  actions: {
  },
};

export default hoge;
