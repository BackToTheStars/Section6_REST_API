import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue();  // loading the data bus before loading all the components 

new Vue({
  el: '#app',
  render: h => h(App)
})

