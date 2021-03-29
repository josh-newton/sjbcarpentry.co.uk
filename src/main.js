import Vue from 'vue';
import Bootstrap from 'bootstrap'; // eslint-disable-line
import PopperJS from 'popper.js'; // eslint-disable-line
import $ from 'jquery'; // eslint-disable-line
import VueSilentbox from 'vue-silentbox';
import App from './App.vue';
import router from './router';

Vue.use(VueSilentbox);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
