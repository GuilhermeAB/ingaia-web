import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import i18n from './i18n';
import apolloProvider from './api/apollo';
import '@/assets/css/global.scss';

Vue.config.productionTip = false;

new Vue({
  router: router,
  store: store,
  vuetify: vuetify,
  i18n: i18n,
  apolloProvider: apolloProvider,
  render: (h: any): any => h(App)
}).$mount('#app');
