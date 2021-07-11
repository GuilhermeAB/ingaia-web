import Vue from 'vue';
import {shallowMount} from '@vue/test-utils';
import SearchCharacterListDetailsImage from '@/components/SearchCharacter/SearchCharacterListDetailsImage.vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('SearchCharacterListDetailsImage.vue', () => {
  let vuetify: any;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('Renders successfully', () => {
    shallowMount(SearchCharacterListDetailsImage, {
      vuetify: vuetify,
      propsData: {
        characterImage: '<IMAGE_URL>',
        characterName: 'Rick Sanchez'
      },
      mocks: {
        $t: (msg: string) => msg
      }
    });
  });

  it('CharacterImage prop is valid string', () => {
    const wrapper = shallowMount(SearchCharacterListDetailsImage, {
      vuetify: vuetify,
      propsData: {
        characterImage: '<IMAGE_URL>',
        characterName: 'Rick Sanchez'
      },
      mocks: {
        $t: (msg: string) => msg
      }
    });

    expect(wrapper.props('characterImage')).toBe('<IMAGE_URL>');
  });

  it('CharacterName prop is valid string', () => {
    const wrapper = shallowMount(SearchCharacterListDetailsImage, {
      vuetify: vuetify,
      propsData: {
        characterImage: '<IMAGE_URL>',
        characterName: 'Rick Sanchez'
      },
      mocks: {
        $t: (msg: string) => msg
      }
    });

    expect(wrapper.props('characterName')).toBe('Rick Sanchez');
  });
});
