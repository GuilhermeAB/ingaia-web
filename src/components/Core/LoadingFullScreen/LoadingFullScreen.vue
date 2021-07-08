<template>
  <v-dialog
    v-model='isLoading'
    persistent
    width='300'
    style='z-index: 999999999;'
  >
    <v-card
      flat
      color='transparent'
    >
      <v-card-text>
        <v-row no-gutters align='center' justify='center'>
          <v-progress-circular color='primary' indeterminate size='64' />
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'LoadingFullScreen',
    computed: {
      ...mapGetters('Loading', [
        'isLoading',
      ]),
    },
  };
</script>

<style lang='scss' scoped>
  ::v-deep .v-dialog {
    box-shadow: none !important;
  }
</style>
