
<template>
    <div class="container">
      <div class="row">
        <div class ="col-xs-12">
            <app-quote>
              <h2>{{ quoteTitle }}</h2>
              <p>My wonderful quote!</p>
              <!-- This part of HTML code is passed to slot of the child component, to Quote.vue-->
            </app-quote>
        </div>
      </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue';
export default {
  components: {
    appQuote: Quote,
  },
  data: function() {
    return {
      quoteTitle: 'Here is the Title'
//                           not like a styling, which can render only in child Quote component,
//                           this data will work here as usual for any Vue code (v-for, v-bind etc.)
    }
  }
}
</script>

<style>
</style>
