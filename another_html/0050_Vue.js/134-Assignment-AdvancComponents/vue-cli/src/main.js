import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeRedText(text) {
      this.$emit('redTextChanged', text);     
    },
    changeBlueText(text) {
      this.$emit('blueTextChanged', text);   
    },
    changeGreenText(text) {
      this.$emit('greenTextChanged', text);     
    },
  },
});

new Vue({
  el: '#app',
  render: h => h(App),
});
