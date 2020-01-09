<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote2"></app-quote-grid>
<!--                                    it listens to $emit, set in QuoteGrid               -->
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a quote to delete it.</div>

            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue'    // IMPORT COMPONENTS
    import NewQuote from './components/NewQuote.vue'
    import Header from './components/Header.vue'

    export default {
        data: function() {
            return {
                quotes: [
                    'Just a quote to see something',
                ],
                maxQuotes: 8,
            };
        },
        components: {
            appQuoteGrid: QuoteGrid,                    // ASSIGN HTML TAGS TO COMPONENTS
            appNewQuote: NewQuote,
            appHeader: Header,
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete quotes first!')
                };
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
