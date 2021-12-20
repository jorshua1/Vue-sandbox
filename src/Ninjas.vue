<template>

    <!-- Los component templates solo pueden tener un elemento raiz, es decir si el componente debe tener dos o mas elementos 
        es recomendable encerrarlos en un div para evitar errores en la renderizacion -->
    <div>
        <h2>Listado de ninjas</h2>
        <ul>
            <li v-for="ninja in ninjas"> {{ninja}} </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return{
            ninjas:['Yoshi', 'Mario', 'Wario','Waluigi']
        }
    },
}
</script>
// cada vez que hacemos uso del scoped esto genera un atributo unico que identifica y aplica los estilos en dicho componente
<style scoped>
h2{
    font-size: 16px;
    color: tomato;
}
</style>