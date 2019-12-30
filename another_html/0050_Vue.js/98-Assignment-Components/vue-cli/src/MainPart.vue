<!-- //// Component code from here was relocated to ServerStatus.vue
          to be used as a local component 5 times in Home global component -->
<template>
    <div>
        <app-server-status v-for="server in 5"></app-server-status>
    </div>
</template>
<script>
    import ServerStatus from './ServerStatus.vue'; // import local component
    export default {
        components: {
            'app-server-status': ServerStatus,
        }
    }
</script>