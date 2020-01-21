
Напротив цитаты сделать подсказку "добавить комментарий" - рамка, плюсик или подобное.
Использовать LET и CONST

***************************  ШИНА ДАННЫХ : ТОЛЬКО ПЕРЕМЕННАЯ  ***********************

// **********  MAIN.JS

import Vue from 'vue'
import App from './App.vue'

export const serverBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),    // ES6 syntax
});

// **********  ОТПРАВИТЕЛЬ.vue

<templat>
    <li
        class="list-group-item"
        style="cursor: pointer"
        @click="serverSelected">
        Server #{{ server.id }}
    </li>
</template>

<scrip>
    import { serverBus } from '../../main.js';
    
    export default {
        props: ['server'],
        methods: {
            serverSelected() {
                serverBus.$emit('serverSelected', this.server);  // id we get as a prop
            },
        },
    }
</script>

// **********  ПОЛУЧАТЕЛЬ.vue

import { serverBus } from '../../main.js';

export default {
  data: function() {
      return {
          server: null,
      };  
  },
  created() {
      serverBus.$on('serverSelected', (server) => {         // слушаем событие шины данных
          this.server = server;
      });
  },
};

*************************************  SCOPED STYLE - LEARN  ************************

<styl scoped>
</style>


*************************************  TEXTAREA  ************************************

    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
            <label for="message">Message</label><br>
            <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                <textarea
                    id="message"
                    rows="5"
                    class="form-control"
                    v-model="message"></textarea> 
                    <!-- можно использовать для ввода комментариев к тексту в системе -->
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-body">
                    <p style="white-space: pre">Message: {{ message }}</p>
                </div>
            </div>
        </div>
    </div>




**********************    V-FOR ERROR   ******************************************


    <li v-for="item in sendMail" :key="item.id">{{ item }}</li> - for eslint error

    <app-server v-for="server in servers" :server="server" :key="server.id"></app-server>
        - this corrects eslint error (:key="[name].id")




******************   DRAFT VUE COMPONENT  *************************************************

<templat>
    <div>
    </div>
</template>

<scrip>
export default {
    data() {
        return {

        };
    },
};
</script>

<styl>
</style>


**************************  BOOTSTRAP TABLE   ******************************************


      <div class="col-sm-7">
        <h4>Analysis</h4>
        <table class="table table-borderless table-sm">
          <thead>
            <tr>
              <th style="width: 40%" scope="col">Highlighted text</th>
              <th style="width: 60%" scope="col">Comments</th>
            </tr>
          </thead>
          
          <tbody>
            <appquotesrow></appquotesrow>  <!-- вывод компонента (муж.) QuotesRow -->
          </tbody>

        </table>




            style="width: 40%" scope="col"
            style="width: 60%" scope="col"
            
            <tr>
              <td>
                <span style="background-color: yellow">{{ quote1 }}</span>
              </td>
              <td>Paraphrasing the author, the book tries to "examine the thorns of roses that have not flowered yet" - in other words, to deal with problems of the remote (and in some cases, not so remote) future. The primary question Lem treats in the book is that of civilization in the absence of limitations</td>
            </tr>
            <tr>
              <td>
                <span style="background-color: yellow">{{ quote2 }}</span>
              </td>
              <td>Despite its age and a number of inaccuracies in specific domains (e.g., mathematics, biology, sociology), the book has lost no momentum in the past years. Among the themes that Lem discusses in the book and that were completely in the realm</td>
            </tr>
            <tr>
              <td>
                <span style="background-color: yellow">{{ quote3 }}</span>
              </td>
              <td>In the preface to the first edition Lem mentions the crucial role of Iosif Shklovsky popular science monograph Вселенная, жизнь, разум (English: Universe, Life, Intelligence, Moscow, USSR Academy of Sciences Publisher, 1962)</td>
            </tr>




              <th scope="row">1</th>
              <th scope="row">2</th>
              <th scope="row">3</th>



              
      <div class="col-sm-3">
        <p></p>
        <h4>Comments</h4>
      </div>


**********  FUNCTION TO FIND YELLOW HIGHLIGHTING  *****************************************

<templat>
</template>

<scrip>
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
}

</script>

******************************************************************