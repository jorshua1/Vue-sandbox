<template>
    <header>
        <!-- al momento que se toque el titulo el ejecutara el evento el cual el componente padre escuchara y ejecutara un metodo que el posee cambiando su nombre -->
        <h1 v-on:click="cambiarNombre"> {{title}} </h1>
    </header>
</template>

<script>
    export default ({
        props: {
            title: {
                type: String
            }
        },
        data() {
            return {
                // title: 'prueba web'
            }
        },
        methods: {
            cambiarNombre: function () {
                //para emitir un evento desde una funcion hacemos uso del "$emit('queLLamaremosConElEvento', queParametroEnviaremos)"
                this.$emit('cambiarNombre', 'Cambiando el texto porque si');
            }
        }
    })
</script>

<style scoped>
    header {
        background-color: lightgreen;
        padding: 10px;
        text-align: center;
    }

    h1 {
        color: #222;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>