<template>
    <div>
        <p>{{ blueText }}</p>
    </div>
</template>

<script>
    import { eventBus } from '../main.js';

    export default {
        data: function() {
            return {
                blueText: '',
            };
        },
        created() {
            eventBus.$on('blueTextChanged', data => {
                this.blueText = data;
            });
        },
    };

</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: left;
    }
</style>