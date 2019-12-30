import Vue from 'vue'
import App from './App.vue'
// import Home from './Home.vue'
import UpperHeader from './UpperHeader'
import MainPart from './MainPart'
import LowerFooter from './LowerFooter'

/////// global component "app-servers" registration from *.vue (was Home.vue), used in App.vue

Vue.component('upperHeader', UpperHeader);   // 3 global components, also 1 local
Vue.component('mainPart', MainPart); 
Vue.component('lowerFooter', LowerFooter); 

new Vue({
  el: '#app',
  render: h => h(App),    // ES6 syntax
});
