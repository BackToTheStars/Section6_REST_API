<template>
    <div>
        <p>{{ redText }}</p>
    </div>
</template>

<script>
    import { eventBus } from '../main.js';
    export default {
        data: function() {
            return {
                redText: '',
            };
        }
    }
    eventBus.$on('redTextChanged', data => {
        this.redText = data;
    });

</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: left;
    }
</style>