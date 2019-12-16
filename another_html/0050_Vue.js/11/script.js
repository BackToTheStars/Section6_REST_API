
new Vue({         // this is called "Vue instance"
    
    el: '#app',   // connect to DOM, Document Object Model (медленно)
    
    data: {       // store properties in data object, to be used
        title: 'Hello Владислав!',
        link: 'http://google.com', // используем directive "v-bind" чтобы привязать href к link
        finishedLink: '<a href="http://google.com">Google</a>', // anchor tag
        myName: 'Иннокентий Яковлевич',
        myAge: 56,
        image: 'http://sovietart.net/gal15/88-7.jpg', // image link
        counter: 0,
        x: 0,
        y: 0,
        keyPressed: '',
        name: '',
        name2: 'Nick',
        counter2: 0,
        counter3: 0,
    },

    computed: {    // dependent properties, вызываются так же, как и переменные data object выше.
        output: function() {
            console.log("Computed.");
            return this.counter3 > 5 ? 'Greater than 5' : 'Smaller or equal 5';
        }
    },

    methods: {     // это называется methods object, это методы Vue Instance
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
            alert('Он нажал клавишу Enter или Space!');  // выводит alert с этим текстом в браузер
        },
        alertButton: function(event) {   // выводит Alert когда нажата кнопка.
            alert('Кнопка нажата!');
        },
        checkIsCounter2Larger: function() {
            console.log('Method is called.');
            return this.counter2 > 5 ? 'Greater than 5' : 'Smaller or equal 5';
        }
    }
});





