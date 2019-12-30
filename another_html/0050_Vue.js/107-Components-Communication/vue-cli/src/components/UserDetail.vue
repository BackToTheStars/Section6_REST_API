<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <button @click="resetName">Name Reset</button>
    </div>
</template>

<script>
    export default {
        props: {                     // can be    props: ['myName'],     without validation
            myName:  {               // this is the props validation, that incoming data is a string
                type: String,        // can be    myName: [String, Array],
                default: 'John',     // can be    required: true,
            },    
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = 'Muir';
            },
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
