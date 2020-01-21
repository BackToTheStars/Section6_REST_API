<template>
        <div>
            <div class="row" v-for="(quote, index) in highlightedQuotes" :key="quote.id">               
                                             <!-- выводим цикл - строки цитат, и комментарии к ним-->
                <div class="col-4">
                    <span style="background-color: yellow">{{ quote }}</span>
                    <p></p>
                </div>
                <div class="col-8" 
                     style="cursor: pointer"
                     @click="commentSelect(index)">
<!--                               !model[i].visible                      -->
                    <pre> {{highlightedQuotes}}</pre>
                    <span v-if="!commentInEditorMode[index]">{{ commentsForQuotes[index] }}</span>
                                                <!-- если кликнули комментарий, то не показываем его-->
                    <span v-if="commentInEditorMode[index]">Here will come the Editor to edit the comment</span>
                    
                    <p></p>
                </div>
            </div>
        </div>
</template>

<script>

import { eventBus } from '../main.js';                    // подключаем глобальную шину данных
// import Editor from '../node_modules/primevue/editor';  // подключаем PrimeVue Editor

export default {
    
    data() {
        return {
            commentInEditorMode: [],      // массив для хранения какой комментарий показывать, а что нет
            commentIndex: null,     // индекс выбранного комментария
            highlightedQuotes: [],  // массив для хранения цитат
            commentsForQuotes: ['1: Paraphrasing the author, the book tries to "examine the thorns of roses that have not flowered yet" - in other words, to deal with problems of the remote (and in some cases, not so remote) future. The primary question Lem treats in the book is that of civilization in the absence of limitations', '2: Despite its age and a number of inaccuracies in specific domains (e.g., mathematics, biology, sociology), the book has lost no momentum in the past years. Among the themes that Lem discusses in the book and that were completely in the realm', '3: In the preface to the first edition Lem mentions the crucial role of Iosif Shklovsky popular science monograph Вселенная, жизнь, разум (English: Universe, Life, Intelligence, Moscow, USSR Academy of Sciences Publisher, 1962)', '4: Paraphrasing the author, the book tries to "examine the thorns of roses that have not flowered yet" - in other words, to deal with problems of the remote (and in some cases, not so remote) future. The primary question Lem treats in the book is that of civilization in the absence of limitations', '5: Paraphrasing the author, the book tries to "examine the thorns of roses that have not flowered yet" - in other words, to deal with problems of the remote (and in some cases, not so remote) future. The primary question Lem treats in the book is that of civilization in the absence of limitations', '6: Paraphrasing the author, the book tries to "examine the thorns of roses that have not flowered yet" - in other words, to deal with problems of the remote (and in some cases, not so remote) future. The primary question Lem treats in the book is that of civilization in the absence of limitations', '7: Paraphrasing the author, the book tries to "examine the thorns of roses that have not flowered yet" - in other words, to deal with problems of the remote (and in some cases, not so remote) future. The primary question Lem treats in the book is that of civilization in the absence of limitations', '8: Paraphrasing the author, the book tries to "examine the thorns of roses that have not flowered yet" - in other words, to deal with problems of the remote (and in some cases, not so remote) future. The primary question Lem treats in the book is that of civilization in the absence of limitations', '9: Paraphrasing the author, the book tries to "examine the thorns of roses that have not flowered yet" - in other words, to deal with problems of the remote (and in some cases, not so remote) future. The primary question Lem treats in the book is that of civilization in the absence of limitations', '10: Paraphrasing the author, the book tries to "examine the thorns of roses that have not flowered yet" - in other words, to deal with problems of the remote (and in some cases, not so remote) future. The primary question Lem treats in the book is that of civilization in the absence of limitations'],  // массив для хранения комментариев
        };
    },

    methods: {

        commentSelect(index) {
            
            this.commentIndex = index; // убрать
            eventBus.$emit('commentSelected', this.commentIndex);  
                                                // публикуем в глобальную шину какой комментарий выбран

            for (let i=0; i<= this.commentInEditorMode.length-1; i = i + 1) {
                this.commentInEditorMode[i] = false;        
                     // пробегаем по всем комментариям к цитатам, и присваеваем им значение "показывать"
            };    

            this.commentInEditorMode[index] = true;  
            console.log('commentSelect: ' + this.commentInEditorMode);
                                            // если кликнули комментарий, то не показываем его как текст
        },
    },
    
    created() {
        eventBus.$on('highlightedQuotesChanged', data => {
            this.highlightedQuotes = data;      // слушаем по глобальной шине изменения массива цитат
        });
        eventBus.$on('commentsChanged', data => {
            this.commentsForQuotes = data;      // слушаем по глобальной шине массив комментариев
        });
    },

};
    
</script>

<style>
#redBorder {
    border: 1px solid red;
}
#blueBorder {
    border: 1px solid blue;
}

</style>