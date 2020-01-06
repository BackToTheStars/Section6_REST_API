import Vue from 'vue'
import App from './App.vue'

/*
export const eventBus = new Vue({
  methods: {
    changeRedText(redText) {
      this.$emit('redTextChanged', redText);     
    },
    changeBlueText(blueText) {
      this.$emit('blueTextChanged', blueText);     
    },
    changeGreenText(greenText) {
      this.$emit('greenTextChanged', greenText);     
    },
  },
});
*/
new Vue({
  el: '#app',
  render: h => h(App)
})
