<!-- This is the local component now, global is in the main.js file -->  

<template>
    <!-- here wee can insert only one root element, like div -->
    <div>   
        <p>Server Status: {{ status }}</p>
        <hr>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>
<script>
    export default {
        data: function() { // data can be only a function here in the component
            return {
                status: 'Good to go'
            };
        },
        methods: {
            changeStatus() {
                this.status = 'Critical';
            },
        },
    }
</script>
