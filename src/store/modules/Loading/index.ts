import actions from './module/actions';
import getters from './module/getters';
import mutations from './module/mutations';
import state from './module/state';

const Loading = {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};

export default Loading;
