<template>
  <div class='mt-12'>
    <v-row no-gutters>
      <span class='card-info-title primary--text ml-3'>
        {{title}}
      </span>
    </v-row>

    <v-row no-gutters>
      <span class='subtitle-2 disabled-text font-weight-light ml-3'>
        {{$t('PLANET')}}
      </span>
    </v-row>

    <v-row no-gutters>
      <span class='title font-weight-light ml-3'>
        {{originName}}
      </span>
    </v-row>

    <v-row no-gutters>
      <span class='subtitle-1 disabled-light-text font-weight-light ml-3 mt-n2'>
        {{dimension}}
      </span>
    </v-row>

    <v-row no-gutters align='center'>
      <v-icon small class='ml-3' color='#8C8C8C'>
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
        required: true,
      },
      dimension: {
        type: String,
        required: true,
      },
      residentsCount: {
        type: Number,
        required: true,
      },
    },
  };
</script>
