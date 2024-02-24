<template>
        <h1>Contadores</h1>
   <app-contadores v-for="c in 5" :key="c"/>
</template>

<script>
export default{
    data(){
        return{
            contador: 0
        }
    },
    mounted(){
        setInterval(() => {
            this.contador++
        }, 1000)
    }
}
</script>

<style>
</style>