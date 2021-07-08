import Vue from 'vue';
import Vuex from 'vuex';
import Character from './modules/Character';
import type {CharacterStateType} from './modules/Character/module/state';
import Loading from './modules/Loading';
import type {LoadingStateType} from './modules/Loading/module/state';

Vue.use(Vuex);

export type RootState = {
  Loading: LoadingStateType,
  Character: CharacterStateType,
};

const store = new Vuex.Store<RootState>({
  modules: {
    Loading: Loading,
    Character: Character
  }
});

export default store;
