
<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <span style="color: blue"><slot name="subtitle">This is the subtitle</slot></span>
            <!-- if we don't pass the data, "This is the subtitle" will be displayed. -->
        </div>
        <hr>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    div {
        border: 1px solid gray;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    .title {
        font-style: italic;
    }
</style>