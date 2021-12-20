<template>
  <header>
      <h1> {{title}} </h1>
  </header>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default ({
  data() {
    return{
        title: 'Prueba de contenido'
    }
  },
})
</script>

<style scoped>
header{
    background-color: lightgreen;
    padding: 10px;
}
h1{
    color:#222;
    text-align: center;
}
</style>