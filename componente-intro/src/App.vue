<template>
   <app-component/>
   <app-component/>
   <app-component/>
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