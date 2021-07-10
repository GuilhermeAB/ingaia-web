<template>
  <v-hover v-slot='{ hover }'>
    <v-card
      flat
      rounded
      class='ma-1 flex-grow-1'
      :class='{ "on-card-hover": hover }'
      @click='openDetails'
    >
      <v-card-text class='pa-0'>
        <v-img :alt='$t("CHARACTER_AVATAR", {name: character.name})' :src='character.image'>
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

          <v-overlay
            v-if='character.status === "Dead"'
            absolute
            opacity='0.8'
          >
            <v-tooltip bottom>
              <template #activator='{on}'>
                <v-icon x-large style='opacity: 0.3;' v-on='on'>
                  mdi-skull
                </v-icon>
              </template>
              {{$t('DEAD')}}
            </v-tooltip>
          </v-overlay>
        </v-img>
      </v-card-text>

      <v-card-actions>
        <v-container fluid class='pa-0'>
          <v-row no-gutters>
            <v-tooltip bottom>
              <template #activator='{on}'>
                <span class='d-inline-block text-truncate' v-on='on'>
                  {{character.name}}
                </span>
              </template>
              {{character.name}}
            </v-tooltip>
          </v-row>
          <v-row no-gutters>
            <v-tooltip bottom>
              <template #activator='{on}'>
                <span class='caption font-weight-light d-inline-block text-truncate' v-on='on'>
                  {{character.type || '-'}}
                </span>
              </template>
              {{character.type || '-'}}
            </v-tooltip>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
  export default {
    name: 'SearchCharacterListItem',
    props: {
      character: {
        type: Object,
        required: true,
      },
    },
    methods: {
      openDetails: function () {
        this.$emit('open-details');
      },
    },
  };
</script>

<style lang='scss' scoped>
  .on-card-hover {
    box-shadow: 0px 0px 6px 2px var(--v-primary-base) !important;
    // transition: transform 0.5s ease;
    // transform: scale(0.9);
  }
</style>
