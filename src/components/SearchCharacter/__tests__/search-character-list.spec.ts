import Vue from 'vue';
import {shallowMount} from '@vue/test-utils';
import SearchCharacterList from '@/components/SearchCharacter/SearchCharacterList.vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';

Vue.use(Vuetify);
Vue.use(Vuex);

describe('SearchCharacterList.vue', () => {
  let getters;
  let store: any;

  beforeEach(() => {
    getters = {
      list: jest.fn()
    };
    store = new Vuex.Store({
      modules: {
        Character: {
          namespaced: true,
          getters: getters
        }
      }
    });
  });

  it('Renders successfully', () => {
    shallowMount(SearchCharacterList, {
      mocks: {
        $t: (msg: string) => msg,
        $store: store
      },
      stubs: ['SearchCharacterListItem', 'SearchCharacterListPagination', 'SearchCharacterListDetails']
    });
  });
});
