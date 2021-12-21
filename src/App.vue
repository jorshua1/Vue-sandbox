<template>
  <div id="app">
    <app-header></app-header>
    <medio></medio>
    <app-footer></app-footer>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Medio from './components/Medio.vue'
import Footer from './components/Footer.vue'


export default ({
  data() {
    return{

    }
  },
  components:{
    'app-header' : Header,
    'medio' : Medio,
    'app-footer' : Footer
  }
})
</script>

<style>

</style>
