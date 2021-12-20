<template>
  <div id="app">
    <h2>{{titulo}}</h2>
    <ninjas></ninjas>
  </div>
</template>

<script>
  //al querer importar componentes para anidarlos lo podemos hacer de dos formas
  //global: significa que lo podemos usar en otros componentes y localmente


  //Forma local: se importa el componente y se le asigna el nombrea usar por el import
  import Ninjas from "./Ninjas.vue"

  export default ({
    //declaramos el objeto components y dentro de el insertamos los componentes que usaremos localmente en esta vista
    components: {
      // asignamos el alias con el que se llamara al componente y el nombre de donde viene dicho componente en el import
      'ninjas': Ninjas
    },
    data() {
      return {
        titulo: 'Prueba App'
      }
    }
  })
</script>

/* Si se agrega un estilo personalizado a una etiqueta en el archivo base de la aplicacion 
esta puede ser sobreescrita por los estilos personalizados del componente que se esta importando
para evitar esto hacemos uso de la palabra scoped en la etiqueta style -> <style scoped> </style>
de esta forma le indicamos al DOM que solo aplique los estilos indicados a este elemento y no a los demas */

<style>


  #app {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h2{
    font-size: 28px;
    color:violet;
  }
  
</style>

components: { Ninjas },