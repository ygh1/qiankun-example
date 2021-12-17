import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index'
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
const isProd = process.env.NODE_ENV === 'production'
function getBase () {
  if (isProd) {
    if (window.__POWERED_BY_QIANKUN__) {
      return '/child/app-vue2/'
    } else {
      return '/app-vue2/'
    }
  } else {
    return '/'
  }
}

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: getBase(),
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app-vue2') : '#app-vue2');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}