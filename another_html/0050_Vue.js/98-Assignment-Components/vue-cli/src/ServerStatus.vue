<!-- This is the local component now, global is in the MainPart.vue file -->  

<template>
    <!-- here we can insert only one root element, like div -->
    <div>   
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                            class="list-group-item">
                        Server #{{ index }}
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
            </div>
        </div>
        <!--        <button @click="changeStatus">Change Status</button>   -->
    </div>
</template>
<script>
    export default {
        data: function() { // data can be only a function here in the component
            return {
                index: 0
            };
        },
        methods: {
        },
    }
</script>

