
new Vue({
    el: '#app',
    data: {
        title: 'Hello Петя!',
        link: 'http://google.com', // используем directive "v-bind" чтобы привязать href к link
        finishedLink: '<a href="http://google.com">Google</a>',
        myName: 'Иосиф Виссарионович',
        myAge: 56,
        image: 'http://sovietart.net/gal15/88-7.jpg',
        counter: 0,
        x: 0,
        y: 0,
        keyPressed: '',
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
        increase: function(step, event) {
            this.counter += step;
        },
        updateCoordinates: function(event) {  // почему работает только в пределах одной строки???
            this.x = event.clientX;
            this.y = event.clientY;
        },
        dummy: function(event) {      // пустая функция, чтобы не менялись координаты при наведении на <span>
            event.stopPropagation();  // останавливает распространение event на другие функции программы
            return 0;
        },
        alertMe: function() {   // выводит Alert когда нажаты Enter или Space
            alert('Он нажал клавишу Enter или Space!');
        },
        alertButton: function(event) {   // выводит Alert когда нажата кнопка.
            alert('Кнопка нажата!');
        },
    }
});





