<template>
    <div>   
        <div class="col-xs-12 col-sm-6">
            <p>Server Details are currently not updated</p>
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
            serverBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        };
    };

</script>

<style scoped>
</style>

