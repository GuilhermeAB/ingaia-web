import type {ActionContext, ActionTree} from 'vuex';
import gql from 'graphql-tag';
import {apolloClient} from '@/api/apollo';
import type {CharacterStateType} from './state';
import type {RootState} from '~/store';

const actions: ActionTree<CharacterStateType, RootState> = {
  getCharacterList: async function ({commit, dispatch}: ActionContext<CharacterStateType, RootState>, payload: {name?: string,}): Promise<any> {
    try {
      dispatch('Loading/toggleLoading', {value: true}, {root: true});
      // const filter = payload.name ? `(filter: { name: "${payload.name}" })` : '';

      const {data} = await apolloClient.query({
        query: gql`query ($name: String) {
          characters(filter: { name: $name}) {
            info {
              count,
              pages,
              next,
              prev
            },
            results {
              id,
              name,
              type,
              status,
              image,
              created
            }
          }
        }`,
        variables: {
          name: payload.name
        }
      });

      dispatch('Loading/toggleLoading', {value: false}, {root: true});
      if (data && data.characters && data.characters.results) {
        commit('setCharacterList', data.characters.results);
      }
      if (data && data.characters && data.characters.info) {
        commit('setInfo', data.characters.info);
      }
    } catch (e) {
      console.log(e);
      dispatch('Loading/toggleLoading', {value: false}, {root: true});
    }
  }
};

export default actions;
