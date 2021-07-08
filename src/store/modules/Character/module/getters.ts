import type {GetterTree} from 'vuex';
import type {RootState} from '~/store';
import type {CharacterStateType} from './state';

const getters: GetterTree<CharacterStateType, RootState> = {
  info: (state) => state.info,
  list: (state) => state.list
};

export default getters;
