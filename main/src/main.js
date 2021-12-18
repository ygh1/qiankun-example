import 'zone.js';
import Vue from 'vue'
import App from './App.vue'

import router from './router/index'

Vue.config.productionTip = false


import { registerMicroApps, start } from 'qiankun';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:8081',
    container: '#micro-container',
    activeRule: '/app-react',
  },
  {
    name: 'vueApp',
    entry: '//localhost:8082',
    container: '#micro-container',
    activeRule: '/app-vue2',
  },
  {
    name: 'angularApp',
    entry: '//localhost:8083',
    container: '#micro-container',
    activeRule: '/app-angular',
  },
  {
    name: 'purehtml',
    entry: '//localhost:8084',
    container: '#micro-container',
    activeRule: '/app-purehtml',
  },
]);
// 启动 qiankun
start({
  prefetch: false
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
