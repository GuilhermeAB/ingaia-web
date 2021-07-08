<template>
  <v-container fluid class='pa-0'>
    <v-row no-gutters align='center' justify='center'>
      <v-col
        cols='12'
        xs='12'
        sm='12'
        md='6'
        lg='6'
        xl='6'
      >
        <v-row no-gutters align='center' justify='center'>
          <v-col
            cols='8'
            xs='8'
            sm='8'
            md='8'
            lg='6'
            xl='6'
          >
            <v-img :src='require("@/assets/banner.png")' />
          </v-col>
        </v-row>
        <v-row no-gutters align='center' justify='center'>
          <search-character />
        </v-row>
      </v-col>
    </v-row>

    <v-snackbar
      v-model='snackbarWorkInProgress'
      color='warning'
      timeout='-1'
    >
      {{$t('WIP_WARNIN')}}

      <template #action='{ attrs }'>
        <v-btn
          text
          v-bind='attrs'
          @click='snackbarWorkInProgress = false'
        >
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',
    components: {
      SearchCharacter: () => import('@/components/SearchCharacter/SearchCharacter.vue'),
    },
    data: function () {
      return {
        snackbarWorkInProgress: process.env.NODE_ENV === 'production',
      };
    },
  };
</script>
