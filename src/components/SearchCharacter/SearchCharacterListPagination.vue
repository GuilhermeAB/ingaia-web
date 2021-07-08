<template>
  <v-pagination
    :value='currentPage'
    :length='info.pages'
    @input='navigateToPage'
    @next='goToNextPage'
    @previous='goToPreviousPage'
  />
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'SearchCharacterListPagination',
    computed: {
      ...mapGetters('Character', [
        'info',
        'currentPage',
      ]),
    },
    methods: {
      ...mapActions('Character', [
        'nextPage',
        'previousPage',
        'goToPage',
      ]),
      goToNextPage: function () {
        this.nextPage();
      },
      goToPreviousPage: function () {
        this.previousPage();
      },
      navigateToPage: function (value) {
        this.goToPage({ page: value });
      },
    },
  };
</script>
