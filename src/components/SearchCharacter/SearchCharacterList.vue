<template>
  <v-container v-if='list' fluid class='pa-0'>
    <v-row no-gutters>
      <v-col
        v-for='item in list'
        :key='item.id'
        xs='12'
        sm='6'
        md='4'
        lg='3'
      >
        <search-character-list-item :character='item' @open-details='openDetails(item)' />
      </v-col>
    </v-row>
    <v-row no-gutters align='center' justify='center' class='mt-5'>
      <search-character-list-pagination />
    </v-row>

    <search-character-list-item-details v-if='showDetailsDialog' :id='selectedId' v-model='showDetailsDialog' />
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'SearchCharacterList',
    components: {
      SearchCharacterListItem: () => import('./SearchCharacterListItem.vue'),
      SearchCharacterListPagination: () => import('./SearchCharacterListPagination.vue'),
      SearchCharacterListItemDetails: () => import('./SearchCharacterListItemDetails.vue'),
    },
    data: function () {
      return {
        showDetailsDialog: false,
        selectedId: undefined,
      };
    },
    computed: {
      ...mapGetters('Character', [
        'list',
      ]),
    },
    methods: {
      openDetails: function (item) {
        this.selectedId = item.id;
        this.showDetailsDialog = true;
      },
    },
  };
</script>
