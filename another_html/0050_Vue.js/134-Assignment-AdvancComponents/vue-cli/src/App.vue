<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="changeBlueText">Load Blue Template</button>
                <button class="btn btn-success" @click="changeGreenText">Load Green Template</button>
                <button class="btn btn-danger" @click="changeRedText">Load Red Template</button>

                <hr>

                <keep-alive>
                    <component :is="selectedComponent"></component>
                </keep-alive>
<!--                                                                  Variant using slots         
                <app-blue>
                    <p slot="blueText">{{ blueText }}</p>
                </app-blue>
                <app-green>
                    <p slot="greenText">{{ greenText }}</p>
                </app-green>
                <app-red>
                    <p slot="redText">{{ redText }}</p>
                </app-red>
-->
            </div>
        </div>
    </div>
</template>

<script>
    import { eventBus } from './main.js';
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data: function() {
            return {
                selectedComponent: 'appRed',
                redText: '',
                blueText: '',
                greenText: '',
            };
        },

        methods: {
            changeRedText() {
                this.redText = 'Шухов никогда не просыпал подъема, всегда вставал по нему - до развода было часа  полтора времени своего, не казенного, и кто знает лагерную жизнь, всегда может  подработать:  шить  кому-нибудь из старой подкладки чехол  на рукавички; богатому бригаднику подать сухие валенки прямо на койку, чтоб ему босиком  не топтаться вкруг  кучи, не  выбирать; или пробежать по каптеркам, где  кому  надо  услужить, подмести  или  поднести  что-нибудь; или  идти  в столовую собирать миски со столов и сносить их горками в посудомойку - тоже накормят, но там охотников много, отбою нет,  а главное -  если в миске что осталось, не удержишься, начнешь миски лизать.';
                eventBus.changeRedText(this.redText);
                this.selectedComponent = 'appRed';
            },
            changeBlueText() {
                this.blueText = 'Не  обнадежен  я,  что  вы  захотите  благожелательно  вникнуть  в соображения, не запрошенные  вами по службе,  хотя и довольно  редкого соотечественника, который  не стоит  на подчиненной  вам лестнице,  не может  быть  вами  ни  уволен с  поста,  ни  понижен,  ни повышен,  ни награжден и, таким  образом, весьма вероятно  услышать от него  мнение искреннее, безо  всяких служебных  расчетов, -  как не бывает даже  у лучших экспертов в  вашем аппарате.';
                eventBus.changeBlueText(this.blueText);
                this.selectedComponent = 'appBlue';
            },
            changeGreenText() {
                this.greenText = 'Мы уже говорили о гипотезе, которая приписывает звездным цивилизациям время жизни, сравнимое с временем жизни  материнских  звезд,  о  гипотезе, практически означающей, что единожды возникшая цивилизация  существует  на протяжении миллиардов лет. Эта гипотеза  неизбежно  приводит  к  выводу  о такой плотности цивилизаций в Космосе, когда два обитаемых  мира  отделены друг от друга расстоянием едва лишь в несколько световых лет. Такой  вывод противоречит всей совокупности  наблюдений:  и  отрицательному  результату "подслушивания" Вселенной, и отсутствию сигналов другого  вида  (например, отсутствию  "чужих"  ракетных  зондов),  и,  наконец,  полному  отсутствию "чудес", то есть явлений, вызванных астроинженерной  деятельностью.';
                eventBus.changeGreenText(this.greenText);
                this.selectedComponent = 'appGreen';
            },
        },
    }
</script>

<style>
</style>
