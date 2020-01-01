import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);     
//                   here we can store a central code, instead of placing it in different places 
    },
  },
});  // loading the data bus before loading all the components 

new Vue({
  el: '#app',
  render: h => h(App)
})

