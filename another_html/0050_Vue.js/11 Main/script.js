
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
        
        resultOfFunc2: {
            nickExercise1: false,
            nickExercise2: true,
        },
        // direct link to CSS classes for Exercise 2

        exercise3Class: 'nickExercise1',
        shouldWeFireTheClass: '',
        styleFor5: {
            width: 1,
        },

        lecture36Show: true,

        lecture40Object1: [
            'meat',
            'fruit',
            'cookies',
            'something else',
        ],
        lecture40Object2: [
            {name: 'Nick', age: 41, color: 'blue'},
            {name: 'Natalia', age: 18, color: 'blue'},
        ],
      
        exercise1Lecture46: true,
        exercise2Lecture46: [
            'Шиллер',
            'Паустовский',
            'Андерсен',
            'Набоков',
            'Беляев',
            'Пушкин',
        ],
        exercise3Lecture46: [
            {
                id: 1,
                type: 'ship',
                class: 'military',
                weapons: 239,
            },
            {
                id: 2,
                type: "base",
                class: "civil",
                weapons: 4,
            },
            {
                id: 3,
                type: 'ship',
                class: 'transport',
                weapons: 0,
            },
            {
                id: 4,
                type: "building",
                class: 'library',
                weapons: 0,
            },
        ],

        // MONSTER GAME
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],


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
            vx.resultOfFunc2.nickExercise1 = !vx.resultOfFunc2.nickExercise1;
            vx.resultOfFunc2.nickExercise2 = !vx.resultOfFunc2.nickExercise2;
            return vx.resultOfFunc2
        },

        progressBar: function() {
            var vx = this;
            setInterval(function() {
                vx.styleFor5.width = vx.styleFor5.width + 1;
            }, 200);
        },

        // MONSTER GAME LECTURE 51

        startGame: function() {             // у нас в игре всего 4 переменных
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {
            var damage = this.calculateDamage(3, 10)
            this.monsterHealth -= damage;
            this.turns.unshift({                     // вставить впереди массива
                isPlayer: true,
                text: 'Player hits monster for ' + damage,
            });
            if (this.checkWin()) {
                return;
            };
            this.monsterAttack();
        },
        specialAttack: function() {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster hard for ' + damage,
            });
            if (this.checkWin()) {
                return;
            };
            this.monsterAttack();
        },
        monsterAttack: function() {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage,
            });
        },
        heal: function() {
            this.playerHealth += 10;
            if (this.playerHealth >=100) {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10',
            });
            this.monsterAttack();
            this.checkWin();
        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        calculateDamage: function(min, max) {
            return Math.floor(Math.random()*(max-min) + min);
        },
        checkWin: function() {
            if (this.monsterHealth <=0) {
                if (confirm('You won! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <=0) {
                if (confirm('You lost! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                };
                return true;
            };
            return false;
        },
    },
});


// Lecture 73 Vue Components

Vue.component('hello', {
    template: '<p>Hello!</p>',
});


new Vue({
    el: '#lecture77',
    data: {
        title: 'Лекция 73, Vue.js Instance Lifecycle',
    },
    beforeCreate: function() {
        console.log('beforeCreate()');
    },
    created: function(){
        console.log('created()');
    },
    beforeMount: function(){
        console.log('beforeMount()');
    },
    mounted: function(){
        console.log('mounted()');
    },
    beforeUpdate: function(){
        console.log('beforeUpdate()');
    },
    updated: function(){
        console.log('updated()');
    },
    beforeDestroy: function(){
        console.log('beforeDestroy()');
    },
    destroyed: function(){
        console.log('destroyed()');
    },

    methods: {
        destroy: function() {
            this.$destroy();
        },
    },

});

new Vue({
    el: '#lecture93',
    components: {
        'component_93': cmp,   // local component registration
    },
    methods: {
        button93: function() {
            console.log(cmp);
        },
    },
});

var cmp = {
    data: function() {
        return {
            status: 'Critical',
        };
    },
    template: '<p>Server Status: {{ status }}</p>',
};

