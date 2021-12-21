<template>
    <header>
        <h1> {{title}} </h1>
    </header>
</template>

<script>
export default({
    data() {
        return{
            title: 'prueba web'
        }
    }
})
</script>

<style scoped>
header{
    background-color:lightgreen;
    padding: 10px;
    text-align: center;
}
h1{
    color: #222;
    font-family: Arial, Helvetica, sans-serif;
}
</style>
