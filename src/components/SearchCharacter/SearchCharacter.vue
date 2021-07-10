<template>
  <v-container fluid class='mt-5'>
    <v-row no-gutters align='center' justify='center' class='mb-5'>
      <v-col
        cols='8'
        sm='6'
      >
        <v-text-field
          ref='search'
          v-model='search'
          dense
          outlined
          hide-details
          autocomplete='off'
          @keyup.enter='doSearch'
        >
          <template #label>
            <div>
              {{$t("SEARCH_CHARACTERS")}}
              <span v-if='!isMobile'>({{$t('PRESS_SLASH_KEY')}})</span>
            </div>
          </template>
          <template #append>
            <v-icon @click='speech'>
              mdi-microphone
            </v-icon>
          </template>
        </v-text-field>
      </v-col>

      <v-col
        cols='4'
        sm='2'
      >
        <v-btn outlined class='ml-3' @click='doSearch'>
          {{$t('SEARCH')}}
        </v-btn>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <search-character-list />
    </v-row>

    <v-dialog v-model='speechDialog' persistent width='300'>
      <v-card
        flat
        color='primary darken-1'
      >
        <v-card-text>
          <v-container fluid>
            <v-row no-gutters align='center' justify='center' class='mt-3'>
              <v-icon large>
                mdi-microphone
              </v-icon>
              <span class='title'>
                {{$t('LISTENING')}}
              </span>
            </v-row>

            <v-row justify='center' @click='abortSpeech'>
              <v-btn small outlined>
                {{$t('CANCEL')}}
              </v-btn>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import { mapActions, mapMutations } from 'vuex';
  import { debounce } from 'lodash';
  import Swal from 'sweetalert2';

  export default {
    name: 'SearchCharacter',
    components: {
      SearchCharacterList: () => import('./SearchCharacterList.vue'),
    },
    data: function () {
      return {
        search: undefined,
        speechDialog: false,
        recognition: undefined,
      };
    },
    computed: {
      isMobile: function () {
        return this.$vuetify.breakpoint.mobile;
      },
    },
    watch: {
      search: debounce(function () {
        this.setSearch({ search: this.search });
      }, 200),
    },
    mounted: function () {
      window.addEventListener('keyup', (event) => {
        if (event.code === 'Slash' || event.key === '/') {
          if (this.$refs.search) {
            this.$refs.search.focus();
          }
        }
      });
    },
    methods: {
      ...mapActions('Character', [
        'getCharacterList',
        'setSearch',
      ]),
      ...mapMutations('Character', [
        'setCurrentPage',
      ]),
      doSearch: async function () {
        this.setCurrentPage(1);

        await this.getCharacterList();
      },
      speech: function () {
        if (!window.webkitSpeechRecognition) {
          Swal.fire({
            title: this.$t('SORRY'),
            text: this.$t('SPEECH_RECOGNITION_UNSUPPORTED'),
          });

          return;
        }

        const SpeechRecognition = webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        this.recognition.lang = 'en-US';

        this.recognition.onstart = () => {
          this.speechDialog = true;
        };

        this.recognition.onspeechend = () => {
          this.speechDialog = false;
          this.recognition.stop();
        };

        this.recognition.onresult = (event) => {
          const { transcript } = event.results[0][0];

          if (transcript) {
            this.search = transcript;
            this.setSearch({ search: this.search });

            this.doSearch();
          }
        };

        setTimeout(() => {
          this.speechDialog = false;
          this.recognition.stop();
        }, 3000);

        this.recognition.start();
      },
      abortSpeech: function () {
        this.speechDialog = false;
        if (this.recognition) {
          this.recognition.stop();
        }
      },
    },
  };
</script>

<style lang='scss' scoped>
  ::v-deep .v-dialog {
    box-shadow: none !important;
  }
</style>
