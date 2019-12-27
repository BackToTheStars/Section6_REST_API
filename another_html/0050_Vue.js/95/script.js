Vue.component('my-cmp', {

    data: function() {
        return {
            status: 'Critical',
        }
    },
    template: '<p>Server Status: {{ status }}</p>',

});


new Vue({

    el: '#app',
    
});