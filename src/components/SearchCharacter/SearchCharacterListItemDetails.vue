<template>
  <v-dialog
    :value='value'
    persistent
    :fullscreen='isMobile'
    max-width='1034px'
  >
    <v-card v-if='character'>
      <!-- ---------------------------------------------------------------- -->
      <!-- App bar -->
      <!-- ---------------------------------------------------------------- -->
      <v-app-bar flat tile color='transparent'>
        <v-spacer />
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
      <v-container fluid>
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
            <v-img :src='character.image' />
          </v-col>

          <v-col
            cols='12'
            xs='12'
            sm='12'
            md='4'
            lg='4'
            xl='4'
          >
            <!-- ---------------------------------------------------------------- -->
            <!-- About -->
            <!-- ---------------------------------------------------------------- -->
            <v-row no-gutters>
              <span class='title primary--text ml-3'>
                {{$t('ABOUT')}}
              </span>
            </v-row>
            <v-row no-gutters>
              <span class='subtitle-1 ml-3'>
                {{$t('ABOUT_CHARACTER_INFO', { name: character.name, gender: character.gender, race: character.species })}}
              </span>
            </v-row>
            <!-- ---------------------------------------------------------------- -->
            <!-- Origin -->
            <!-- ---------------------------------------------------------------- -->
            <search-character-list-item-details-info
              :title='$t("ORIGIN")'
              :origin-name='character.origin.name'
              :dimension='character.origin.dimension'
              :residents-count='character.origin.residents.length'
            />

            <!-- ---------------------------------------------------------------- -->
            <!-- Location -->
            <!-- ---------------------------------------------------------------- -->
            <search-character-list-item-details-info
              :title='$t("LOCATION")'
              :origin-name='character.location.name'
              :dimension='character.location.dimension'
              :residents-count='character.location.residents.length'
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'SearchCharacterListItemDetails',
    components: {
      SearchCharacterListItemDetailsInfo: () => import('./SearchCharacterListItemDetailsInfo.vue'),
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
