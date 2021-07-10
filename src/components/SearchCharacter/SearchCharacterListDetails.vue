<template>
  <v-dialog
    :value='value'
    persistent
    :fullscreen='isMobile'
    max-width='1034px'
  >
    <v-card v-if='character' flat min-height='600px' height='100%'>
      <!-- ---------------------------------------------------------------- -->
      <!-- App bar -->
      <!-- ---------------------------------------------------------------- -->
      <v-app-bar flat tile absolute color='transparent'>
        <v-tooltip bottom>
          <template #activator='{ on }'>
            <v-btn
              :icon='isMobile'
              :outlined='!isMobile'
              class='mr-1'
              v-on='on'
              @click.native='closeDialog'
            >
              <v-icon v-if='isMobile'>
                mdi-close
              </v-icon>
              <span v-else>
                {{$t('CLOSE')}}
              </span>
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
            md='12'
            lg='4'
            xl='4'
          >
            <search-character-list-details-image :character-image='character.image' :character-name='character.name' :character-type='character.type' />
          </v-col>

          <v-col
            cols='12'
            xs='12'
            sm='12'
            md='12'
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
      SearchCharacterListDetailsImage: () => import('./SearchCharacterListDetailsImage.vue'),
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
