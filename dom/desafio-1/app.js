new Vue({
    el: '#desafio',
    data: {
        idade: 23,
        nome:"Lucas",
        image: 'https://postgrain.com/wp-content/uploads/2017/04/jordan-mcqueen-10434-unsplash-768x512.jpg'
    },
    methods:{
        numAleatorio : function(){
            return Math.random();
        }
    }
});