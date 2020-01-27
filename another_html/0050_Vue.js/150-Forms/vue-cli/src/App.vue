<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                :value="userData.email"
                                @input="userData.email = $event.target.value">
        <!--                    same as v-model                                     -->       
        <!--                    v-model="userData.email"   !--   2-way binding with email variable -->
        

                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="userData.password"><!-- lazy = update only on change -->
                        <p>{{ userData.password }}</p>
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="userData.age">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message"></textarea> 
                            <!-- можно использовать для ввода комментариев к тексту в системе -->
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="sendMail"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority">  
                                           <!-- binds the choice, will overwrite "selected" -->
                        <option v-for="priority in priorities"
                                :key="priority.id"
                                :selected="priority=='Medium'"> {{ priority }}</option>
                                               <!-- :selected is setting the default choice -->
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-switch v-model="dataSwitch"></app-switch>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>E-mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Age: {{ userData.age }}</p>
                        <p style="white-space: pre">Message: {{ message }}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in sendMail" :key="item.id">{{ item }}</li>
                        </ul>
                        <p>Gender: {{ gender }}</p>
                        <p>Priority: {{ selectedPriority }}</p>
                        <p>Switched: {{ dataSwitch }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Switch from './Switch.vue';

    export default {
        data() {
            return {

                userData: {
                    email: "",
                    password: "",
                    age: 0,
                },
                
                message: 'Если  человек не  ездил на лошадях по  глухим  проселочным дорогам,  то рассказывать  мне ему  об этом  нечего: все равно он не  поймет. А тому, кто ездил, и напоминать не хочу.\nСкажу  коротко:  сорок  верст,  отделяющих уездный  город  Грачевку от Мурьевской  больницы,  ехали  мы с  возницей  моим ровно  сутки. И  даже  до курьезного ровно: в два часа дня 16 сентября 1917 года мы были у последнего лабаза, помещающегося на границе этого замечательного города Грачевки, а в два  часа пять минут 17 сентября того же 17-го незабываемого года я стоял на битой,  умирающей  и  смякшей  от  сентябрьского   дождика траве во дворе Мурьевской больницы. Стоял я в таком виде: ноги окостенели, и настолько, что я смутно тут же  во  дворе мысленно перелистывал  страницы учебников, тупо стараясь припомнить, существует ли действительно, или  мне это померещилось во  вчерашнем сне в деревне  Грабиловке,  болезнь,  при  которой  у человека окостеневают мышцы? Как ее, проклятую, зовут по-латыни?  Каждая из мышц этих болела  нестерпимой  болью,  напоминающей зубную  боль.  О  пальцах  на ног говорить не приходится  -  они уже не шевелились  в  сапогах, лежали смирно, были  похожи на деревянные культяпки. Сознаюсь,  что  в  порыве  малодушия я проклинал  шепотом медицину и свое заявление, поданное  пять лет  тому назад ректору университета.  Сверху в это время сеяло, как сквозь сито. Пальто мое набухло,  как губка.  Пальцами  правой руки  я тщетно пытался  ухватиться за ручку  чемодана и наконец плюнул на мокрую траву. Пальцы мои ничего не могли хватать, и опять мне, начиненному всякими знаниями из интересных медицинских книжек,  вспомнилась болезнь -  паралич "Парализис", - отчаянно  мысленно  и черт знает зачем сказал я себе.',
                
                sendMail: [],
                gender: 'Male',
                priorities: ['High', 'Medium', 'Low'],
                selectedPriority: 'High',
                dataSwitch: true,
            };
        },

        components: {
            appSwitch: Switch,
        },
    };
</script>

<style>

</style>
