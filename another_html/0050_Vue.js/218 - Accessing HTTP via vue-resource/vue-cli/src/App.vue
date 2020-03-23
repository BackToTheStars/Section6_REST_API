
<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

          <button class="btn btn-primary" @click="fetchData">Get Data</button>
          <br><br>


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

        link: 'https://discourse-backend-api.herokuapp.com/turns',

      };
    },

    methods: {

      fetchData() {
        this.$http.get(this.link)
          .then(response => {
            console.log(response);
          });
      },

    },
  }
</script>

<style>
</style>
