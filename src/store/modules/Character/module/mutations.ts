import type {MutationTree} from 'vuex';
import type {
  CharacterStateType, CharacterType, InfoType
} from './state';

const mutations: MutationTree<CharacterStateType> = {
  setCharacterList: function (state: CharacterStateType, value?: CharacterType[]): void {
    state.list = value;
  },
  setInfo: function (state: CharacterStateType, value?: InfoType): void {
    state.info = value;
  }
};

export default mutations;
