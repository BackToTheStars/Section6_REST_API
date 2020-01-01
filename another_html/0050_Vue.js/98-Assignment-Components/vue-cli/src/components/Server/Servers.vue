
<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
            class="list-group-item"
            v-for="index in 5">
                Server #{{ index }}
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        data: function() {
            return {
                servers: [
                    {id: 1, status: 'Normal'}
                    {id: 2, status: 'Critical'}
                    {id: 3, status: 'Unknown'}
                    {id: 4, status: 'Normal'}
                ],
            };
        },
    }
</script>

<style scoped>
    div {
        border: 1px solid blue
    }
</style>