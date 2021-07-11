import Vue from 'vue';
import {shallowMount} from '@vue/test-utils';
import SearchCharacter from '@/components/SearchCharacter/SearchCharacter.vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';

Vue.use(Vuetify);
Vue.use(Vuex);

describe('SearchCharacter.vue', () => {
  let actions;
  let mutations;
  let store: any;

  beforeEach(() => {
    actions = {
      getCharacterList: jest.fn(),
      setSearch: jest.fn()
    };
    mutations = {
      setCurrentPage: jest.fn()
    };
    store = new Vuex.Store({
      modules: {
        Character: {
          namespaced: true,
          actions: actions,
          mutations: mutations
        }
      }
    });
  });

  it('Renders successfully', () => {
    shallowMount(SearchCharacter, {
      mocks: {
        $t: (msg: string) => msg,
        $store: store
      },
      stubs: ['SearchCharacterList']
    });
  });

  it('Search text field - has field', () => {
    const wrapper = shallowMount(SearchCharacter, {
      mocks: {
        $t: (msg: string) => msg,
        $store: store
      },
      stubs: ['SearchCharacterList']
    });

    wrapper.find('#tfSearch');
  });

  it('Search button - Triggers a click', async () => {
    const wrapper = shallowMount(SearchCharacter, {
      mocks: {
        $t: (msg: string) => msg,
        $store: store
      },
      stubs: ['SearchCharacterList']
    });

    await wrapper.find('#btnSearch').trigger('click');
  });
});
