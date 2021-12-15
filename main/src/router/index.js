import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Some from '@/page/some.vue'

export default new VueRouter({
  routes: [{
    path: '/',
    component: HelloWorld
  }
  ,{
    path: '/some',
    component: Some
  },
],
  mode: 'history'
})