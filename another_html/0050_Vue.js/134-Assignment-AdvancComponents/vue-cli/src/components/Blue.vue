<template>
    <div>
        <slot name="blueText"></slot>
    </div>
</template>

<script>
    import { eventBus } from '../main.js';
</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: left;
    }
</style>