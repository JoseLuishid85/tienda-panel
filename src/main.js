import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Notifications from 'vue-notification';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { ModalPlugin } from 'bootstrap-vue';


Vue.config.productionTip = false;
Vue.prototype.$url = 'http://localhost:4000/api';
Vue.prototype.$token = localStorage.getItem('token');
Vue.prototype.$categorias = ['Ropa','Tecnologia','Juguetes','Hogar'];

import 'bootstrap-vue/dist/bootstrap-vue.css'
import "vue-search-select/dist/VueSearchSelect.css"

Vue.use(Notifications);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(ModalPlugin)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

