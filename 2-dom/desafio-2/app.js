new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alerta(){
            alert("Button clicado!")
        },
        setValor(e){
            this.valor = e.target.value
        }
    }
})