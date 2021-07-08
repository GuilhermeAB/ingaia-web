<template>
  <div>
    <v-row no-gutters>
      <span class='title primary--text ml-3'>
        {{title}}
      </span>
    </v-row>

    <v-row no-gutters>
      <span class='subtitle-2 ml-3'>
        {{$t('PLANET')}}
      </span>
    </v-row>

    <v-row no-gutters>
      <span class='subtitle-1 ml-3'>
        {{originName}}
      </span>
    </v-row>

    <v-row no-gutters>
      <span class='subtitle-1 ml-3'>
        {{dimension}}
      </span>
    </v-row>

    <v-row no-gutters align='center'>
      <v-icon small class='ml-3'>
        mdi-account-multiple-outline
      </v-icon>
      <span class='subtitle-1 ml-3'>
        {{$t('RESIDENTS_COUNT', { value: residentsCount })}}
      </span>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'SearchCharacterListItemDetailsInfo',
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
