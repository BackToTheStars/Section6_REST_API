import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.component('app-servers', Home);  
/////// global component "app-servers" registration from Home.vue, used in App.vue

new Vue({
  el: '#app',
  render: h => h(App),    // ES6 syntax
});
