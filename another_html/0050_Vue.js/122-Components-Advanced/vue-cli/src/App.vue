
<template>
    <div class="container">
      <div class="row">
        <div class ="col-xs-12">
            <app-quote>
              <h2 slot="title">{{ quoteTitle }}</h2>
              <!-- this line will go to the slot "title" in the child component -->
              <p>My wonderful quote!</p>   <!-- this line will go to the unnamed slot as default--> 
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
    }
  }
}
</script>

<style>
    h2{
        color: red;
/*             this styling for slot can render from both child component Quote, or in parent App  */
    }

</style>
