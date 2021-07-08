<template>
  <v-container fluid class='mt-5'>
    <v-row no-gutters align='center' justify='center'>
      <v-col xs='9' sm='9'>
        <v-text-field v-model='search' :label='$t("SEARCH_CHARACTERS")' dense outlined hide-details />
      </v-col>
      <v-col xs='3' sm='3'>
        <v-btn outlined class='ml-3'>
          {{$t('SEARCH')}}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'SearchCharacter',
    data: function () {
      return {
        search: undefined,
      };
    },
  };
</script>
