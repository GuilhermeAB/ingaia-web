<template>
  <v-container fluid class='mt-5'>
    <v-row no-gutters align='center' justify='center' class='mb-5'>
      <v-col xs='6' sm='6'>
        <v-text-field v-model='search' :label='$t("SEARCH_CHARACTERS")' dense outlined hide-details />
      </v-col>
      <v-col xs='2' sm='2'>
        <v-btn outlined class='ml-3' @click='doSearch'>
          {{$t('SEARCH')}}
        </v-btn>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <search-character-list />
    </v-row>
  </v-container>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'SearchCharacter',
    components: {
      SearchCharacterList: () => import('./SearchCharacterList.vue'),
    },
    data: function () {
      return {
        search: undefined,
      };
    },
    methods: {
      ...mapActions('Character', [
        'getCharacterList',
      ]),
      doSearch: async function () {
        await this.getCharacterList({ name: this.search });
      },
    },
  };
</script>
