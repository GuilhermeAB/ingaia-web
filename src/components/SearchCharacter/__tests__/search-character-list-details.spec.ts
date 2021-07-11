import Vue from 'vue';
import {shallowMount} from '@vue/test-utils';
import SearchCharacterListDetails from '@/components/SearchCharacter/SearchCharacterListDetails.vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('SearchCharacterListDetails.vue', () => {
  let vuetify: any;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('Renders successfully', () => {
    shallowMount(SearchCharacterListDetails, {
      vuetify: vuetify,
      propsData: {
        id: '1'
      },
      mocks: {
        $t: (msg: string) => msg
      },
      stubs: ['SearchCharacterListDetailsInfo', 'SearchCharacterListDetailsImage']
    });
  });

  it('Id prop is valid string', () => {
    const wrapper = shallowMount(SearchCharacterListDetails, {
      vuetify: vuetify,
      propsData: {
        id: '1'
      },
      mocks: {
        $t: (msg: string) => msg
      },
      stubs: ['SearchCharacterListDetailsInfo', 'SearchCharacterListDetailsImage']
    });

    expect(wrapper.props('id')).toBe('1');
  });

  it('Value prop is valid boolean', () => {
    const wrapper = shallowMount(SearchCharacterListDetails, {
      vuetify: vuetify,
      propsData: {
        id: '1',
        value: true
      },
      mocks: {
        $t: (msg: string) => msg
      },
      stubs: ['SearchCharacterListDetailsInfo', 'SearchCharacterListDetailsImage']
    });

    expect(wrapper.props('value')).toBe(true);
  });
});
