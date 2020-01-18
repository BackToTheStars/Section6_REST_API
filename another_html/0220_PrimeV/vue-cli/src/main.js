
import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeQuotes(array) {
      this.$emit('highlightedQuotesChanged', array);     
    },
  },
});

new Vue({
  el: '#app',
  render: h => h(App)
})
