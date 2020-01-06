<template>
    <div>
        <p>{{ this.greenText }}</p>
    </div>
</template>

<script>
    import { eventBus } from '../main.js';

    export default {
        data: function() {
            return {
                greenText: '',
            };
        },
        created() {
            eventBus.$on('greenTextChanged', data => {
                this.greenText = data;
            });
        },
    };

</script>

<style scoped>
    div {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: left;
    }
</style>