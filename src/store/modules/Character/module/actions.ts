import type {ActionContext, ActionTree} from 'vuex';
import gql from 'graphql-tag';
import {apolloClient} from '@/api/apollo';
import type {CharacterStateType} from './state';
import type {RootState} from '~/store';

const actions: ActionTree<CharacterStateType, RootState> = {
  setSearch: function ({commit}: ActionContext<CharacterStateType, RootState>, payload: {search?: string,}): void {
    commit('setSearch', payload.search);
  },
  getCharacterList: async function ({commit, dispatch, state}: ActionContext<CharacterStateType, RootState>): Promise<any> {
    try {
      dispatch('Loading/toggleLoading', {value: true}, {root: true});

      const {data} = await apolloClient.query({
        query: gql`query ($page: Int, $name: String) {
          characters(page: $page, filter: { name: $name}) {
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
          page: state.currentPage,
          name: state.search
        }
      });

      if (data && data.characters && data.characters.results) {
        commit('setCharacterList', data.characters.results);
      }
      if (data && data.characters && data.characters.info) {
        commit('setInfo', data.characters.info);
      }
      dispatch('Loading/toggleLoading', {value: false}, {root: true});
    } catch (e) {
      commit('setCharacterList', undefined);
      commit('setInfo', undefined);
      dispatch('Loading/toggleLoading', {value: false}, {root: true});
    }
  },
  getCharacterById: async function ({dispatch}: ActionContext<CharacterStateType, RootState>, payload: {id: string,}): Promise<any> {
    try {
      dispatch('Loading/toggleLoading', {value: true}, {root: true});

      const {data} = await apolloClient.query({
        query: gql`{
          character (id: ${payload.id}) {
            id,
            name,
            image,
            status,
            species,
            type,
            gender,
            origin {
              id,
              name,
              dimension,
              created,
              residents {
                id,
                name
              }
            },
            location {
              id,
              name,
              type,
              dimension,
              created,
              residents {
                id,
                name
              }
            }
          }
        }`,
        errorPolicy: 'ignore'
      });

      dispatch('Loading/toggleLoading', {value: false}, {root: true});

      return data && data.character;
    } catch (e) {
      console.log(e);
      dispatch('Loading/toggleLoading', {value: false}, {root: true});

      return undefined;
    }
  },
  goToPage: function ({commit, dispatch}: ActionContext<CharacterStateType, RootState>, payload: {page: number,}): void {
    commit('setCurrentPage', payload.page);
    dispatch('getCharacterList');
  },
  nextPage: function ({commit, dispatch, state}: ActionContext<CharacterStateType, RootState>): void {
    commit('setCurrentPage', state.info?.next);
    dispatch('getCharacterList');
  },
  previousPage: function ({commit, dispatch, state}: ActionContext<CharacterStateType, RootState>): void {
    commit('setCurrentPage', state.info?.prev);
    dispatch('getCharacterList');
  }
};

export default actions;
