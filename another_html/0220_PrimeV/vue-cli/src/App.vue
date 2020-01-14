<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-sm-6">

        <h4>Origin</h4>
        <Editor v-model="value" editorStyle="height: 520px;"/>      
      </div>


      <div class="col-sm-6">
        <h4>Analysis</h4>
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Highlighted text</th>
              <th scope="col">Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ quote1 }}</td>
              <td>Comment one</td>
            </tr>
            <tr>
              <td>{{ quote2 }}</td>
              <td>Comment two</td>
            </tr>
            <tr>
              <td>{{ quote3 }}</td>
              <td>Comment three</td>
            </tr>
          </tbody>
        </table>

        <p>{{ findYellow(value) }}</p>
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
      var i = 0;
      var searchStr = '';
      var searchStr2 = '';
      var foundPos = [];
      var quotes = [];
      
      for (i = 0; i <= text.length; i++) {
        searchStr = text.substring(i, i+16);
        if (searchStr == 'rgb(255, 255, 0)') {
          foundPos.push(i);
        };
        searchStr2 = text.substring(i, i+7);  
        if (searchStr2 == '</span>') {
          foundPos.push(i);
        };
      };

      for (i=0; i<= foundPos.length; i = i + 2) {
        if (foundPos[i] && foundPos[i+1]) {
          quotes.push(text.substring(foundPos[i]+19, foundPos[i+1]));
        };
      };
      
      return quotes;
    },
  },
};

</script>

<style>
</style>
