<template>
  <div>
    <!-- con esto indicamos que usaremos un componente sin declararlo explicitamente-->
    <!-- esto de arriba es lo mismo que hacer esto -->
    <keep-alive><component v-bind:is="component"></component></keep-alive>
    <button v-on:click="changeForm">Cambiar Componente</button>
    <!-- <form-one></form-one> -->
    <!-- parece que la principal idea de el uso de esta etiqueta es que podamos hacer uso de multiples componentes
       dependiendo del resutado de condicionales o algo asi es que se me ocurre -->
    <!-- podemos usar data binding en dichas etiquetas, gracias a esto podemos crear alguna propiedad que nos pueda
         indicar en que momentos podriamos usar dichos componentes importados -->

    <!-- al movernos entre componentes dinamicos lo que hacemos es destruir el componente previo, por ende perdiendo los datos
    asociados o ingresados en dicho componente, para evitar esto podemos hacer uso de la etiqueta keep-alive la cual nos permite
    salvar o guardar los datos que tenia almacenado dicho componente antes de cambiarse -->

  </div>
</template>
<script>
  import formHelper from "./components/FormHelper.vue";
  import formOne from "./components/FormOne.vue"
  import formTwo from "./components/FormTwo.vue"

  export default {
    components: {
      'form-helper': formHelper,
      'form-one': formOne,
      'form-two': formTwo
    },
    data() {
      return {
        titulo: 'Texto insertado en el componente formHelper',
        lorem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam similique consectetur hic laborum tempore sapiente cum et delectus iure magnam est doloremque doloribus numquam blanditiis ducimus, debitis odit soluta.',
        component: 'form-one'
      }
    },
    methods: {
      changeForm: function () {
        if (this.component == "form-one") {
          this.component = 'form-two'
        } else {
          this.component = 'form-one'
        }
      }
    }
  }
</script>
<style>
</style>