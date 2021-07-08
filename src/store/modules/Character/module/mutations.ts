import type {MutationTree} from 'vuex';
import type {
  CharacterStateType, CharacterType, InfoType
} from './state';

const mutations: MutationTree<CharacterStateType> = {
  setSearch: function (state: CharacterStateType, value?: string): void {
    state.search = value;
  },
  setCharacterList: function (state: CharacterStateType, value?: CharacterType[]): void {
    state.list = value;
  },
  setInfo: function (state: CharacterStateType, value?: InfoType): void {
    state.info = value;
  },
  setCurrentPage: function (state: CharacterStateType, value?: number): void {
    state.currentPage = value;
  }
};

export default mutations;
