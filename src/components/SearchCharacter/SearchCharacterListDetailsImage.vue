<template>
  <v-card v-if='!isMobile' flat width='100%' height='100%' min-height='600px'>
    <v-img :src='characterImage' style='filter: blur(200px); position: absolute;' />

    <v-card flat class='card-image'>
      <v-img :alt='$t("CHARACTER_AVATAR", {name: characterName})' width='100%' height='88%' :src='characterImage'>
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

      <v-card-actions>
        <v-container fluid class='pa-0'>
          <v-row no-gutters>
            <v-tooltip bottom>
              <template #activator='{on}'>
                <span class='d-inline-block text-truncate' v-on='on'>
                  {{characterName}}
                </span>
              </template>
              {{characterName}}
            </v-tooltip>
          </v-row>
          <v-row no-gutters>
            <v-tooltip bottom>
              <template #activator='{on}'>
                <span class='caption font-weight-light d-inline-block text-truncate' v-on='on'>
                  {{characterType || '-'}}
                </span>
              </template>
              {{characterType || '-'}}
            </v-tooltip>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-card>

  <v-container v-else fluid class='pa-0'>
    <v-row no-gutters align='center' justify='center'>
      <v-card flat class='card-image-mobile'>
        <v-img :alt='$t("CHARACTER_AVATAR", {name: characterName})' width='100%' :src='characterImage'>
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

        <v-card-actions>
          <v-container fluid class='pa-0'>
            <v-row no-gutters>
              <v-tooltip bottom>
                <template #activator='{on}'>
                  <span class='d-inline-block text-truncate' v-on='on'>
                    {{characterName}}
                  </span>
                </template>
                {{characterName}}
              </v-tooltip>
            </v-row>
            <v-row no-gutters>
              <v-tooltip bottom>
                <template #activator='{on}'>
                  <span class='caption font-weight-light d-inline-block text-truncate' v-on='on'>
                    {{characterType || '-'}}
                  </span>
                </template>
                {{characterType || '-'}}
              </v-tooltip>
            </v-row>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'SearchCharacterListDetailsImage',
    props: {
      characterImage: {
        type: String,
        required: true,
      },
      characterName: {
        type: String,
        required: true,
      },
      characterType: {
        type: String,
        default: undefined,
      },
    },
    computed: {
      isMobile: function () {
        return this.$vuetify.breakpoint.mobile;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .card-image {
    margin-top: 64px;
    border: 2px solid #606060;
    width: 350px;
    height: 500px;
    position: fixed;
    margin-left: -50px;
  }

  .card-image-mobile {
    max-width: 250px;
    margin-top: 64px;
    border: 2px solid #606060;
  }
</style>
