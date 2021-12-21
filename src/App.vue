<template>
  <div id="app">
    <!-- para el ejemplo de creacion de props por tipos primitivos primero lo pasamos usando v-bind seguido el nombre de la propieda y el dato que pasaremos
    
    v2
    dado a que ahora el componente padre puede escuchar eventos de sus hijos, mediante v-on este ejecutara un metodo con el cual cambiara su data y por ende sus hijos reaccionaran a dicho cambio 
     -->
    <app-header v-bind:title="title" v-on:cambiarNombre="actualizarNombre($event)"></app-header>
    <!-- para poder hacer uso del prop usamos el componente en el cual esta anidado, le damos un prop al componente anidado haciendo referencia a los datos que requerimos 
    Es necesario hacer el paso de los datos usando v-bind con esto le decimos al componente que use los datos almacenados en el componente padre
    -->
    <medio v-bind:ninjas="ninjas"></medio>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>
<script>
  import Header from './components/Header.vue'
  import Medio from './components/Medio.vue'
  import Footer from './components/Footer.vue'


  export default ({
    data() {
      return {
        ninjas: [{
            name: 'Ryu',
            speciality: 'Vue Components',
            show: false
          },
          {
            name: 'Crystal',
            speciality: 'HTML Wizardry',
            show: true
          },
          {
            name: 'Hitoshi',
            speciality: 'Click Events',
            show: false
          },
          {
            name: 'Tango',
            speciality: 'Conditionals',
            show: false
          },
          {
            name: 'Kami',
            speciality: 'Webpack',
            show: false
          },
          {
            name: 'Yoshi',
            speciality: 'Data Recollection',
            show: false
          }

        ],
        title: 'Titulo no modificable'
      }
    },
    components: {
      'app-header': Header,
      'medio': Medio,
      'app-footer': Footer
    },
    methods:{
      //al escuchar el evento causado por el componente hijo el componente padre ejecuta otro metodo recibiendo los datos del componente padre y con esto actualizando su propio dato, con esto se actualizaran sus dos hijos ya que el componente padre se actualizo, algo asi
      actualizarNombre(actualizacionTitulo){
        this.title=actualizacionTitulo;
      }
    }
  })
</script>

<style>

</style>