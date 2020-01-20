<template>
    <div>   
        <div class="col-xs-12 col-sm-6">
            <p v-if="!server">Please select a server</p>
            <p v-else>Server #{{ server.id }} selected, status {{ server.status }}</p>
            <hr>
            <button @click="resetStatus">Change to Normal</button>

        </div>
    </div>
</template>

<script>

    import { serverBus } from '../../main.js';

    export default {
        data: function() {
            return {
                server: null,
            };  
        },
        created() {
            serverBus.$on('serverSelected', (server) => {  // слушаем событие шины данных
                this.server = server;
            });
        },
        methods: {
            resetStatus() {
                this.server.status = 'Normal';
            },
        },
    };

</script>

<style scoped>
</style>

