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
          <!-- <v-progress-circular color='primary' indeterminate size='64' /> -->
          <v-avatar size='187' rounded>
            <v-img :alt='$t("LOADING_IMAGE")' :src='require("@/assets/loading.png")'>
              <template #placeholder>
                <v-row
                  class='fill-height ma-0'
                  align='center'
                  justify='center'
                >
                  <v-progress-circular
                    indeterminate
                    color='primary'
                  />
                </v-row>
              </template>
            </v-img>
          </v-avatar>
        </v-row>
        <v-row no-gutters align='center' justify='center' class='mt-3'>
          <span class='title white--text font-weight-regular'>
            {{$t('LOADING')}}
          </span>
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
