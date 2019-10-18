import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import "bootstrap";
import "../node_modules/bootswatch/dist/lux/bootstrap.min.css";
import { routes } from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
	routes
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
