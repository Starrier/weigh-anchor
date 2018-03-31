/** 全局注册
 *  import wir
 * */
import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(Router)
Vue.use(mavonEditor)
new Vue({
  'el':'main',
  data(){
    return {value:''}
  }
})
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
