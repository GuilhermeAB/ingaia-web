import type {MutationTree} from 'vuex';
import type {LoadingStateType} from './state';

const mutations: MutationTree<LoadingStateType> = {
  setLoading: function (state: LoadingStateType, value: boolean): void {
    state.isLoading = value;
  }
};

export default mutations;
