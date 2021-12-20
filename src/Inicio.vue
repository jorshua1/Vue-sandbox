<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>

      <h1> {{titulo}} </h1>
      <p> {{saludo()}} </p>
    </div>
    //este router lo que hace es generar la navegacion dentro del proyecto solo con llamarlo
    al quitar los comentario se habilitaran las rutas que redirigiran lo links de arriba a su destino con su contenido
    <!-- <router-view/> -->
  </div>
</template>

<script>
//esto es basicamente lo mismo que vue componente de la forma en como se hacia en el archivo js
export default {
  data(){
    return {
      titulo: 'Primer archivo Vuejs '
    }
  },
  methods:{
    saludo:function(){
      return 'Hola joven!';
    }
  }
}
</script>
<!--
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
-->