<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <p>Name is {{ name }}</p>
        <p>Age is {{ age }}</p>  
<!--                 this variable does not listen to data bus, so is not updated -->
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :myName="name" 
                    @nameWasReset="name = $event"
                    :resetFn="resetName"
                    :userAge="age">
                </app-user-detail>   
                <!-- ":name" should be the same as in props -->
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :userAge="age"
                    @ageWasEdited="age = $event">   
                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Nick',
                age: 40,
            };
        },
        methods: {
            changeName: function() {
                this.name = 'Natalia';
            },
            resetName() {
                this.name = 'Nick';
            },
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgrey;
    }
</style>
