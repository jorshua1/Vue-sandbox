<template>
  <div id="app">
  <form-helper>
    <!-- al agregarle el parametro slot a la etiqueta de texto que estamos insertando en el componente le indicamos al slot del componente que recibe en donde debe posicionar el texto -->
    <h2 slot="titulo"> {{titulo}} </h2>
    <p slot="texto"> {{lorem}} </p>
  </form-helper>
  </div>
</template>
<script>
import formHelper from "./components/FormHelper.vue";
import formOne from "./components/FormOne.vue"
import formTwo from "./components/FormTwo.vue"

export default{
  components: {
    'form-helper': formHelper,
    'form-one': formOne,
    'form-two': formTwo
  },
  data(){
    return{
      titulo: 'Texto insertado en el componente formHelper',
      lorem:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam similique consectetur hic laborum tempore sapiente cum et delectus iure magnam est doloremque doloribus numquam blanditiis ducimus, debitis odit soluta.'
    }
  },
  methods:{
    
  }
}

</script>
<style>
</style>