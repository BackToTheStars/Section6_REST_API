<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <p>User age: {{ userAge }}</p>
        <button @click="resetName">Name Reset</button>
        <button @click="resetFn()">Function Name Reset</button>
<!-- Executing a reset function in the parent, which was passed as a prop to a child -->

    </div>
</template>

<script>
    import { eventBus } from '../main.js';

    export default {
        props: {                     // can be    props: ['myName'],     without validation
            myName:  {               // this is the props validation, that incoming data is a string
                type: String,        // can be    myName: [String, Array],
                default: 'John',     // can be    required: true,
            },    
            resetFn: Function,
            userAge: Number,
        },
// props, properties are used to pass data from parent to a child

        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = 'Muir';
                this.$emit('nameWasReset', this.myName); 
//                                        emitting a custom event, passing its name and the variable
            },
        },

        created() {
            eventBus.$on('ageWasEdited', (data) => {
                this.userAge = data;
            });
        },
    };
</script>

<style scoped>
    div {
        background-color: lightskyblue;
    }
</style>
