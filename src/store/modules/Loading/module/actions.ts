import type {ActionContext, ActionTree} from 'vuex';
import type {LoadingStateType} from './state';
import type {RootState} from '~/store';

const actions: ActionTree<LoadingStateType, RootState> = {
  toggleLoading: function ({commit, getters}: ActionContext<LoadingStateType, RootState>, payload: {value: boolean,}): void {
    commit('setLoading', payload?.value !== undefined ? payload.value : !getters.isLoading);
  }
};

export default actions;
