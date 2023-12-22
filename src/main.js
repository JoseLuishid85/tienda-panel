import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Notifications from 'vue-notification';
//import Pagination from 'vue-pagination-2';

Vue.config.productionTip = false;
Vue.prototype.$url = 'http://localhost:4000/api';
Vue.prototype.$token = localStorage.getItem('token');

Vue.use(Notifications);
//Vue.component('pagination', Pagination);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

