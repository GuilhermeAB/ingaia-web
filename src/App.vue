<template>
  <v-app>
    <loading-full-screen />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {
      LoadingFullScreen: () => import('@/components/Core/LoadingFullScreen/LoadingFullScreen.vue'),
    },
  };
</script>
