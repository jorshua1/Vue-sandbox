<template>
  <div id="app">
    <app-header></app-header>
    <!-- para poder hacer uso del prop usamos el componente en el cual esta anidado, le damos un prop al componente anidado haciendo referencia a los datos que requerimos 
    Es necesario hacer el paso de los datos usando v-bind con esto le decimos al componente que use los datos almacenados en el componente padre
    -->
    <medio v-bind:ninjas="ninjas"></medio>
    <app-footer></app-footer>
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

        ]
      }
    },
    components: {
      'app-header': Header,
      'medio': Medio,
      'app-footer': Footer
    }
  })
</script>

<style>

</style>