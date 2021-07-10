<template>
  <div class='mt-12'>
    <v-row no-gutters>
      <span class='card-info-title primary--text ml-10'>
        {{title}}
      </span>
    </v-row>

    <v-row no-gutters>
      <span class='subtitle-2 disabled-text font-weight-light ml-10'>
        {{$t('PLANET')}}
      </span>
    </v-row>

    <v-row no-gutters>
      <span class='title font-weight-light ml-10'>
        {{originName || $t('UNKNOWN_ORIGIN')}}
      </span>
    </v-row>

    <v-row no-gutters>
      <span class='subtitle-1 disabled-light-text font-weight-light ml-10 mt-n2'>
        {{dimension || $t('UNKNOWN_DIMENSION')}}
      </span>
    </v-row>

    <v-row v-if='residentsCount' no-gutters align='center'>
      <v-icon small class='ml-10' color='#8C8C8C'>
        mdi-account-multiple-outline
      </v-icon>
      <span class='subtitle-1 disabled-text font-weight-light ml-3'>
        {{$t('RESIDENTS_COUNT', { value: residentsCount })}}
      </span>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'SearchCharacterListDetailsInfo',
    props: {
      title: {
        type: String,
        required: true,
      },
      originName: {
        type: String,
        default: undefined,
      },
      dimension: {
        type: String,
        default: undefined,
      },
      residentsCount: {
        type: Number,
        default: undefined,
      },
    },
  };
</script>
