<template>
    <footer>
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