<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body quote">
                <slot></slot>
            </div>
        </div>

    
    </div>    
</template>

<script>
</script>


<style scoped>
    .panel-body {
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: darkgrey;
    }
    .quote {
        cursor: pointer;

    }
    .quote:hover {
        background-color: red;
    }
</style>