<template>
    <div class="container">
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote2"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a quote to delete it.</div>

            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue'
    import NewQuote from './components/NewQuote.vue'

    export default {
        data: function() {
            return {
                quotes: [
                    'Just a quote to see something',
                ],
                maxQuotes: 10,
            };
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
        },
        methods: {
            newQuote(quote) {
                this.quotes.push(quote);
            },
            deleteQuote2(index) {
                this.quotes.splice(index, 1);  // removes 1 element from array
            },
        },
    }
</script>

<style>
</style>
