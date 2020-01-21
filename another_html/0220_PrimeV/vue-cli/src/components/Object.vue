<template>
    <div>
    </div>
</template>

<script>
export default {
    data() {
        return {


            turn: {                             // объект данного хода
                actions: [                      // массив действий
                    {   
                        post: {
                            id: 0,              // commentIndex: null,
                            quote: '',          // highlightedQuotes: [],
                            comment: '',        // commentsForQuotes: [],
                            isVisible: true,    // commentInEditorMode: [],
                        },
                    },
                ],
                mainText: 'Paraphrasing the author, the book tries to...', // текст с Editor
            },
 



        };
    },
};
</script>

<style>
</style>