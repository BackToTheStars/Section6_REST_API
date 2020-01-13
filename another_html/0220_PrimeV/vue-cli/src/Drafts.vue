<template>
</template>

<script>
export default {
  methods: {  
    
    findYellow(text) {
      let m = -1;
      let n = -1;
      
      m = text.indexOf("rgb(255, 255, 0)");
      n = text.indexOf("</span>");
      if (m!=-1 && n!=-1) {
        this.quotes.push(text.substring(m+19, n))
      };

      text = text.substr(n+6);

      console.log(this.quotes);
      return this.quotes;
    },
}

</script>


<style>
</style>