
<template>
    <div class="container">
      <div class="row">
        <div class ="col-xs-12">
            <app-quote>
              <h2>The quote</h2>
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
}
</script>

<style>
</style>
