<template>
  <v-btn
    v-show='isVisible'
    v-scroll='onScroll'
    fab
    fixed
    bottom
    right
    color='primary darken-2'
    :aria-label='$t("SCROLL_TO_THE_TOP")'
    @click='toTop'
  >
    <v-icon>mdi-chevron-up</v-icon>
  </v-btn>
</template>

<script>
  export default {
    name: 'ScrollToTop',
    data: function () {
      return {
        isVisible: false,
      };
    },
    methods: {
      onScroll: function (e) {
        if (typeof window === 'undefined') return;

        const top = window.pageYOffset || e.target.scrollTop || 0;
        this.isVisible = top > 20;
      },
      toTop: function () {
        this.$vuetify.goTo(0);
      },
    },
  };
</script>
