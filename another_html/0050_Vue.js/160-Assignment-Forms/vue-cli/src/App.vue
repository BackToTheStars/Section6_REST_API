<template>
    <div class="container">
        <form v-show="formIsShown">
            <h2 class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">Signup Form</h2>
            <hr class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                     <div class="form-group">
                        <label for="firsttname">First Name:</label>
                        <input
                                type="text"
                                id="firstname"
                                class="form-control"
                                :value="userData.name"
                                @input="userData.name = $event.target.value">
        <!-- same as v-model  -->       
        <!-- v-model="userData.email"   2-way binding with email variable -->
                    
                    </div>
                        <div class="form-group">
                        <label for="lasttname">Last Name:</label>
                        <input
                                type="text"
                                id="lasttname"
                                class="form-control"
                                v-model="userData.lastName">
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail:</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input
                                type="text"
                                id="password"
                                class="form-control"
                                v-model="userData.password">
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-md-6 form-group">
                        <label for="password">Store in database?</label>
                            <label for="Yes">
                                <input
                                    type="radio"
                                    id="yes"
                                    value="Yes"
                                    v-model="userData.storeInDatabase"> Yes
                            </label>
                            <label for="No">
                                <input
                                    type="radio"
                                    id="no"
                                    value="No"
                                    v-model="userData.storeInDatabase"> No
                            </label>
                        </div>
                    </div>


                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <button @click="submitForm"
                class = "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                Submit Form</button>
        <hr>
        <div class="row" v-show="!formIsShown">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.name }} {{ userData.lastName }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ userData.storeInDatabase }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userData: {
                    email: '',
                    name: '',
                    lastName: '',
                    password: '',
                    storeInDatabase: '',
                },
              formIsShown: true,
            };
        },
        methods: {
          submitForm() {
            this.formIsShown = false;
            return this.formIsShown;
          },
        },
    };
</script>

<style>
</style>
