<template>
  <v-app>
    <loading-full-screen />
    <v-main>
      <router-view />
      <scroll-to-top />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {
      LoadingFullScreen: () => import('@/components/Core/LoadingFullScreen/LoadingFullScreen.vue'),
      ScrollToTop: () => import('@/components/Core/ScrollToTop/ScrollToTop.vue'),
    },
  };
</script>
