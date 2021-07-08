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

<style lang='scss' scoped>
  #app {
    background: url('./assets/home-background.png') no-repeat center center fixed;
    background-size: cover;
  }
</style>
