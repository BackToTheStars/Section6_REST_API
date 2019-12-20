
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
        counter4: 0,
        resultOfExersize: "",
        attachRed: false,
        attachBlue: false,
        attachGreen: false,
        attachYellow: false,
        color: 'red',
        width: 100,
        effectClasses: {
            highlight: false,
            shrink: true, 
        },
        nickCSSClasses: {
            nickExercise1: true,
            nickExercise2: false,
        },
        exercise3Class: 'nickExercise1',
        shouldWeFireTheClass: '',
        width5: 100,
    },









    computed: {    // dependent properties, вызываются так же, как и переменные data object выше.
        output: function() {
            console.log("Computed.");
            return this.counter3 > 5 ? 'Greater than 5' : 'Smaller or equal 5';
        },
        reached37: function() {
            this.counter4 >=37 ? this.resultOfExersize = "reached 37" : this.resultOfExersize = "not there yet";
            return this.resultOfExersize;
        },
        divClasses: function() {
            return {
                red: this.attachRed,
                blue: !this.attachRed,
            };
        },
        myStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + 'px',
            };
        },
    },







    watch: {  // execute code upon data changes (better to use "computed", more optimal)
        counter2: function(value) {  // launches asynchronous task
            var vm = this;
            setTimeout(function() { 
                vm.counter2 = 0;
                console.log('reset counter2 to 0');
            }, 2000);
        },
        resultOfExersize: function(value) {
            var vx = this;
            setTimeout(function() {
                vx.counter4 = 0;
                console.log('reset counter4 to 0');                
            }, 5000);
        },
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
        },

        startEffect: function() {
            var vx = this;
            setInterval(function() {
                vx.effectClasses.highlight = !vx.effectClasses.highlight;
                vx.effectClasses.shrink = !vx.effectClasses.shrink;  
            }, 1000);         
        },

        funcExercise2: function() {
            var vx = this;
            vx.nickCSSClasses.nickExercise1 = !vx.nickCSSClasses.nickExercise1;
            vx.nickCSSClasses.nickExercise2 = !vx.nickCSSClasses.nickExercise2;
        },

        progressBar: function() {
            var vx = this;
            setInterval(function() {
                vx.width5 = vx.width5 + 1;
            }, 200);
        },
    },
});





