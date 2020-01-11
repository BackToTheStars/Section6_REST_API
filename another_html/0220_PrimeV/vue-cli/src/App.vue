<template>
  
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <p></p>
        <h4>Editor</h4>
        <Editor v-model="value" editorStyle="height: 500px;"/>      
      </div>
      <div class="col">
        <p></p>
        <h4>Output</h4>
        <p>{{ value }}</p>
      </div>
    </div>  
  </div>

</template>

<script>
import Editor from '../node_modules/primevue/editor';

export default {
  data: function() {
    return {
      value: 'Summa Technologiae (the title is in Latin, meaning "Summa (Compendium) of Technology" in English) is a 1964 book by Polish author Stanisław Lem. Summa is one of the first collections of philosophical essays by Lem. The book exhibits depth of insight and irony usual for Lems creations. The name is an allusion to Summa Theologiae by Thomas Aquinas.',
    };
  },
  components: {
    Editor,
  },
};
</script>

<style>

</style>
