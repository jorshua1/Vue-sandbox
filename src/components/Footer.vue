<template>
    <footer>
        <!-- obtenemos la data pasada por el componente padre y al ser un dato de tipo primitivo podemos modificarla sin que esta afecte al prop referenciado en otros componentes
        se puede comprobar tocando el titulo del archivo app ya renderizado -->
        <small> {{title}} </small>
    </footer>
</template>

<script>
    export default {
        props: {
            title: {
                type: String
            }
        },
        data() {
            return {
                copy: 'Esta pagina se encuentra protegida por derechos de autor'
            }
        },
    }
</script>
<style scoped>
    footer {
        background-color: black;
        padding: 16px;
        text-align: center;
    }

    small {
        color: lightgreen;
        font-family: Arial, Helvetica, sans-serif
    }
</style>