<template>
    <footer>
        <small> {{copy}} </small>
    </footer>
</template>

<script>
export default {
    data() {
        return{
            copy: 'Esta pagina se encuentra protegida por derechos de autor'
        }
    },
}
</script>
<style scoped>
footer{
    background-color: black;
    padding: 16px;
    text-align: center;
}

small{
    color:lightgreen;
    font-family: Arial, Helvetica, sans-serif
}
</style>