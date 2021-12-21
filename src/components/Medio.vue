<template>
    <div id="ninjas">
        <ul>
            <!-- Al ser este componente un elemento hijo del componente App el recibe los datos enviados por medio del prop en la etiqueta referenciada de este componente, dado a que esta recibiendo los datos el ya puede hacer uso de estos y mostrarlos como sea necesario
            Solo puede mostrar y no modificar ya que el dueño de dichos datos es el componente padre -->
            <li v-for="ninja in ninjas" :key="ninja" v-on:click="ninja.show=!ninja.show">
                <h2>Name: {{ninja.name}}</h2>
                <h3 v-show="ninja.show">speciality: {{ninja.speciality}} </h3>
            </li>

        </ul>
        <button v-on:click="deleteNinja">Delete Ninja</button>
        <hr>
        <!-- Al agregar dos elementos referenciando al mismo prop al oprimir el boton eliminar ninja este eliminara dicha posicion del arreglo pero al haber dos elementos referenciando al mismo prop entonces estos elemetos se veran afectados al mimsmo tiempo -->
        <ul>
            <li v-for="ninja in ninjas" :key="ninja" v-on:click="ninja.show=!ninja.show">
                <h2>Name: {{ninja.name}}</h2>
                <h3 v-show="ninja.show">speciality: {{ninja.speciality}} </h3>
            </li>
        </ul>
        <!-- con esta funcion demostramos la forma en como se afectan los props cuando son basados unicamente en referecia, con solo esta funcion podemos eliminar todos los elementos del prop o algo asi -->
        <button v-on:click="deleteNinja">Delete Ninja</button>
    </div>
</template>
<script>
    export default {
        //Recibimos los datos del componente padre y podremos usarlos como si los datos estuvieran
        // declarados directamente en este componente
        // props: ['ninjas'], con esto podemos hacer uso del prop con cualquier tipo de dato 
        props: { //al generar el prop como un objeto podemos validar el tipo de dato que queremos recibir
            ninjas: {
                //con esto indicamos que los datos que provienen del prop padre deben ser de tipo array dado a que si no es asi entonces la consola enseñara que hay un error indicando el tipo de dato que recibio junto al tipo de dato que esperaba
                type: Array,
                //con esto obligamos a que el  tipo de dato sea si o si el ingresado en el tipo 
                required: true
            }
        },
        data() {
            return {
                // El componente padre le pasa los datos que el posee y con esto hace de cuenta como si dichos datos hubieran sido declarados directamente aca
            }
        },
        methods: {
            //estamos eleminando datos desde su componente padre o original
            deleteNinja: function () {
                this.ninjas.pop();
            }
        }
    }
</script>

<style scoped>
    li:hover {
        background-color: #222;
        color: lightgreen;
    }

    #ninjas {
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0px 20px;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }

    li {
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 30px;
        border: 1px solid #222;
        margin: 10px;
    }
</style>