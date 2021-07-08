<template>
  <v-container v-if='list' fluid class='pa-0'>
    <v-row no-gutters>
      <v-col
        v-for='item in list'
        :key='item.id'
        xs='12'
        sm='6'
        md='4'
        lg='3'
      >
        <v-card flat min-height='250' class='ma-1'>
          <v-card-text class='pa-0'>
            <v-img :src='item.image' />
          </v-card-text>
          <v-card-actions>
            <v-container fluid>
              <v-row no-gutters>
                <span class='d-inline-block text-truncate'>
                  {{item.name}}
                </span>
              </v-row>
              <v-row no-gutters>
                <span class='caption font-weight-light d-inline-block text-truncate'>
                  {{item.type}}
                </span>
              </v-row>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'SearchCharacterList',
    computed: {
      ...mapGetters('Character', [
        'list',
      ]),
    },
  };
</script>
