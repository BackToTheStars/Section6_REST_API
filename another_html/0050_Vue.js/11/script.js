
new Vue({
    el: '#app',
    data: {
        title: 'Hello Петя!',
        link: 'http://google.com', // используем directive "v-bind" чтобы привязать href к link
        finishedLink: '<a href="http://google.com">Google</a>',
        myName: 'Иосиф Виссарионович',
        myAge: 56,
    },
    methods: {
        sayHello: function() {
            this.title = "А теперь здесь стоит другая строка"
            return this.title;    // только title нельзя, но с this получаем доступ ко всему объекту Vue
            //return "Hello!";    // только возврат строки, иначе DOM не преобразует в html
        },
        randomNumber: function() {
            return Math.random();
        },
    }
});





