<template>
  <div class="container-fluid">
    <div class="row">


      <div class="col-sm-5">
        <p></p>
        <h4>Origin</h4>
        <Editor v-model="value" editorStyle="height: 600px;"/>      
      </div>


      <div class="col-sm-3">
        <p></p>
        <h4>Highlighted</h4>
        <p>{{ findYellow(value) }}</p>
      </div>


      <div class="col-sm-4">
        <p></p>
        <h4>Comments</h4>
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
      value: '<p>Summa Technologiae (the title is in Latin, meaning "Summa (Compendium) of Technology" in English) is a 1964 book by Polish author Stanisław Lem. Summa is one of the first collections of philosophical essays by Lem. The book exhibits depth of insight and irony usual for Lems creations. The name is an allusion to Summa Theologiae by Thomas Aquinas. </p><p><br></p><p>Paraphrasing the author, the book tries to "examine the thorns of roses that have not flowered yet" - in other words, to deal with problems of the remote (and in some cases, not so remote) future. The primary question Lem treats in the book is that of civilization in the absence of limitations, both technological and material. He also looks at moral-ethical and philosophical consequences of future technologies. </p><p><br></p><p>Despite its age and a number of inaccuracies in specific domains (e.g., mathematics, biology, sociology), the book has lost no momentum in the past years. Among the themes that Lem discusses in the book and that were completely in the realm of science fiction then, but are gaining importance today, are virtual reality (Lem calls it "phantomatics"), theory of search engines ("ariadnology", after Ariadne thread), technological singularity, molecular nanotechnology ("molectronics"), cognitive enhancement ("cerebromatics"), artificial intelligence ("intellectronics"). </p><p><br></p><p>In the preface to the first edition Lem mentions the crucial role of Iosif Shklovsky popular science monograph Вселенная, жизнь, разум (English: Universe, Life, Intelligence, Moscow, USSR Academy of Sciences Publisher, 1962) in shaping Lem Summae. </p><p><br></p><p>In 1996 the book received the award of the Czech Academy of Science Fiction, Fantasy and Horror (Akademie science fiction, fantasy a hororu) in the category "Nonfiction titles" ("Titul mimo beletrii").</p>',
    };
  },
  components: {
    Editor,
  },
  
  methods: {

    findYellow(text) {
      let quotes = [];
      let m = 0;
      let n = 0;
      let i = 0;
      let text2 = text;
      while (m != -1 && n != -1) {
        m = text2.indexOf("rgb(255, 255, 0)");  console.log('m = ' + m);
        n = text2.indexOf("</span>"); console.log('n = ' + n);
        quotes[i] = text.substring(m+19, n);
        text2 = text2.substring(n+6);
        i++;
      };
      return quotes;
    },

  },
};
</script>

<style>

</style>
