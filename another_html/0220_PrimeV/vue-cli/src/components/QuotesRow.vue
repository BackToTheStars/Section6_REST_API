<template>
        <tr>
            <td style="width: 40%" scope="col">
                <span style="background-color: yellow">{{ highlightedQuotes[0] }}</span>
            </td>
            <td style="width: 60%" scope="col">
                <span>{{ commentsForQuotes[0] }}</span>
            </td>
        </tr>
</template>

<script>
import { eventBus } from '../main.js';
export default {
    created() {
        eventBus.$on('highlightedQuotesChanged', data => {
            this.highlightedQuotes = data;      // слушаем по глобальной шине массив цитат
        });
        eventBus.$on('commentsChanged', data => {
            this.commentsForQuotes = data;      // слушаем по глобальной шине массив комментариев
        });
    },

    data() {
        return {
            highlightedQuotes: [],
            commentsForQuotes: ['1: Paraphrasing the author, the book tries to "examine the thorns of roses that have not flowered yet" - in other words, to deal with problems of the remote (and in some cases, not so remote) future. The primary question Lem treats in the book is that of civilization in the absence of limitations', '2: Despite its age and a number of inaccuracies in specific domains (e.g., mathematics, biology, sociology), the book has lost no momentum in the past years. Among the themes that Lem discusses in the book and that were completely in the realm', '3: In the preface to the first edition Lem mentions the crucial role of Iosif Shklovsky popular science monograph Вселенная, жизнь, разум (English: Universe, Life, Intelligence, Moscow, USSR Academy of Sciences Publisher, 1962)'],
        };
    },
};

</script>

<style>
</style>