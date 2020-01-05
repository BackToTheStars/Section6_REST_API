
<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Increase</button>
        <p>Counter = {{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                counter: 0,
            };
        },
        destroyed() {
            console.log('Destroyed!');  // this shows that this New vue instance is destroyed each time when we press a button in App.
        },
        deactivated() {
            console.log('Deactivated!');
        },
        activated() {
            console.log('Activated!');
        },
    }
</script>

<style scoped>

</style>
