
<template>
    <li
        class="list-group-item"
        style="cursor: pointer"
        @click="serverSelected">
        Server #{{ id }}
    </li>
</template>


<script>
    import { serverBus } from '../../main.js';
    
    export default {
        props: ['id'],
        methods: {
            serverSelected() {
                serverBus.$emit('serverSelected', this.id);  // id we get as a prop
            },
        },
    }
</script>

<style scoped>
</style>