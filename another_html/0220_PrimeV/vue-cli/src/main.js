
import Vue from 'vue'
import App from './App.vue'



export const eventBus = new Vue({
  
  // Ещё мы публикуем сюда 'commentSelected' event c переменной commentIndex
  
  methods: {
    changeQuotes(array) {
      this.$emit('highlightedQuotesChanged', array);     
    },
    changeComments(array) {
      this.$emit('commentsChanged', array);     
    },
  },
});



new Vue({
  el: '#app',
  render: h => h(App)
})
