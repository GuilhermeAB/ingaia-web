import type {GetterTree} from 'vuex';
import type {RootState} from '~/store';
import type {CharacterStateType} from './state';

const getters: GetterTree<CharacterStateType, RootState> = {
  info: (state) => state.info,
  currentPage: (state) => state.currentPage,
  list: (state) => state.list,
  search: (state) => state.search
};

export default getters;
