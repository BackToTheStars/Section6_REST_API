<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
    </div>
</template>

<script>
    export default {
        props: {                     // can be    props: ['myName'],     without validation
            myName: [String, Array]  // this is the props validation, that incoming data is a string
                                     // can be    myName: String,
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
