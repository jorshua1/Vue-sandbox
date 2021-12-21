<template>
    <header>
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
                this.title = 'que no se podia cambiar, y eso quien lo decidio?';
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