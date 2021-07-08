import Vue from 'vue';
import Vuex from 'vuex';
import Loading from './modules/Loading';
import type {LoadingStateType} from './modules/Loading/module/state';

Vue.use(Vuex);

export type RootState = {
  Loading: LoadingStateType,
};

const store = new Vuex.Store<RootState>({
  modules: {
    Loading: Loading
  }
});

export default store;
