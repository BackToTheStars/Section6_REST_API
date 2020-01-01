<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button> 
        <!--               запуск метода изменения переменной с одновременным $emit её состояния -->
    </div>
</template>

<script>

    import { eventBus } from '../main.js';   //  импорт шины данных, с публикуемыми переменными

    export default {
        props: ['userAge'],   // name used in the parent component
        methods: {
            editAge() {
                this.userAge = 30;
//              this.$emit('ageWasEdited', this.userAge);
//              eventBus.$emit('ageWasEdited', this.userAge);     - relocated to main.js
                eventBus.changeAge(this.userAge);
            },
        },
    };
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
