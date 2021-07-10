<template>
  <v-dialog
    :value='value'
    persistent
    :fullscreen='isMobile'
    max-width='1034px'
  >
    <v-card v-if='character' flat min-height='600px'>
      <!-- ---------------------------------------------------------------- -->
      <!-- App bar -->
      <!-- ---------------------------------------------------------------- -->
      <v-app-bar flat tile absolute color='transparent'>
        <v-tooltip bottom>
          <template #activator='{ on }'>
            <v-btn
              icon
              class='mr-1'
              v-on='on'
              @click.native='closeDialog'
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
          <span>{{$t('CLOSE')}}</span>
        </v-tooltip>
      </v-app-bar>

      <v-container fluid fill-height class='pa-0'>
        <v-row no-gutters>
          <!-- ---------------------------------------------------------------- -->
          <!-- Image -->
          <!-- ---------------------------------------------------------------- -->
          <v-col
            cols='12'
            xs='12'
            sm='12'
            md='4'
            lg='4'
            xl='4'
          >
            <v-card flat width='100%' height='100%' min-height='600px'>
              <v-img :src='character.image' style='filter: blur(200px); position: absolute;' />

              <v-card flat :class='{"card-image-mobile": isMobile, "card-image": !isMobile}'>
                <v-img width='100%' height='88%' :src='character.image' />
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
            </v-card>
          </v-col>

          <v-col
            cols='12'
            xs='12'
            sm='12'
            md='4'
            lg='4'
            xl='4'
          >
            <v-card flat width='100%' height='100%' min-height='600px'>
              <!-- ---------------------------------------------------------------- -->
              <!-- About -->
              <!-- ---------------------------------------------------------------- -->
              <v-row no-gutters>
                <span class='card-info-title primary--text ml-3' style='margin-top: 64px;'>
                  {{$t('ABOUT')}}
                </span>
              </v-row>
              <v-row no-gutters>
                <span class='subtitle-1 font-weight-light ml-3'>
                  {{$t('ABOUT_CHARACTER_INFO', { name: character.name, gender: character.gender, race: character.species })}}
                </span>
              </v-row>
              <!-- ---------------------------------------------------------------- -->
              <!-- Origin -->
              <!-- ---------------------------------------------------------------- -->
              <search-character-list-details-info
                v-if='character.origin'
                :title='$t("ORIGIN")'
                :origin-name='character.origin.name'
                :dimension='character.origin.dimension'
                :residents-count='5'
              />

              <!-- ---------------------------------------------------------------- -->
              <!-- Location -->
              <!-- ---------------------------------------------------------------- -->
              <search-character-list-details-info
                v-if='character.location'
                :title='$t("LOCATION")'
                :origin-name='character.location.name'
                :dimension='character.location.dimension'
                :residents-count='5'
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'SearchCharacterListDetails',
    components: {
      SearchCharacterListDetailsInfo: () => import('./SearchCharacterListDetailsInfo.vue'),
    },
    props: {
      value: {
        type: Boolean,
        default: false,
      },
      id: {
        type: String,
        required: true,
      },
    },
    data: function () {
      return {
        character: undefined,
      };
    },
    computed: {
      isMobile: function () {
        return this.$vuetify.breakpoint.mobile;
      },
    },
    mounted: function () {
      this.getData();
    },
    methods: {
      ...mapActions('Character', [
        'getCharacterById',
      ]),
      closeDialog: function () {
        this.$emit('input', false);
      },
      getData: async function () {
        const data = await this.getCharacterById({ id: this.id });
        this.character = data;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .card-image {
    width: 350px;
    height: 500px;
    position: fixed;
    margin-left: -50px;
    margin-top: 64px;
    border: 2px solid #606060;
  }
</style>
