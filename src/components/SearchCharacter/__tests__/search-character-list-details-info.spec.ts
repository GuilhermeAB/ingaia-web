import Vue from 'vue';
import {shallowMount} from '@vue/test-utils';
import SearchCharacterListDetailsInfo from '@/components/SearchCharacter/SearchCharacterListDetailsInfo.vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('SearchCharacterListDetailsInfo.vue', () => {
  let vuetify: any;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('Renders successfully', () => {
    shallowMount(SearchCharacterListDetailsInfo, {
      vuetify: vuetify,
      propsData: {
        title: 'Origin'
      },
      mocks: {
        $t: (msg: string) => msg
      }
    });
  });

  it('Title prop is valid string', () => {
    const wrapper = shallowMount(SearchCharacterListDetailsInfo, {
      vuetify: vuetify,
      propsData: {
        title: 'Origin'
      },
      mocks: {
        $t: (msg: string) => msg
      }
    });

    expect(wrapper.props('title')).toBe('Origin');
  });

  it('OriginName prop is valid string', () => {
    const wrapper = shallowMount(SearchCharacterListDetailsInfo, {
      vuetify: vuetify,
      propsData: {
        title: 'Origin',
        originName: 'Earth'
      },
      mocks: {
        $t: (msg: string) => msg
      }
    });

    expect(wrapper.props('originName')).toBe('Earth');
  });
  it('Dimension prop is valid string', () => {
    const wrapper = shallowMount(SearchCharacterListDetailsInfo, {
      vuetify: vuetify,
      propsData: {
        title: 'Origin',
        dimension: 'Replacement Dimension'
      },
      mocks: {
        $t: (msg: string) => msg
      }
    });

    expect(wrapper.props('dimension')).toBe('Replacement Dimension');
  });
  it('ResidentsCount prop is valid number', () => {
    const wrapper = shallowMount(SearchCharacterListDetailsInfo, {
      vuetify: vuetify,
      propsData: {
        title: 'Origin',
        residentsCount: 54
      },
      mocks: {
        $t: (msg: string) => msg
      }
    });

    expect(wrapper.props('residentsCount')).toBe(54);
  });
});
