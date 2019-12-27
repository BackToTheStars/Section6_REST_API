<template>
    <p>Server Status: {{ status }}</p>
    <hr>
</template>
    export default: {
        data: function() {
            return {
                status: 'Good to go'
            }
        },
        methods: {
            changeStatus() {
                this.status = 'Critical' 
            }
        }
    } 

<script>

</script>