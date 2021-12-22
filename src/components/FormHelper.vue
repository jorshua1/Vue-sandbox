<template>
    <div>
        <slot name="titulo"></slot>
        <h3>i am the form helper</h3>
        <!-- la etiqueta slot nos permite ingresar contenido en el componente sin necesidad de generarlo directamente aca
        es decir, en cualquier otro componente que llame a este el podra insertar contenido y este se renderizara como si fuera parte de este componente -->
        <slot name="texto"></slot>
        <!-- al insertar n slots esto lo que hace es repetir el contenido ingresado en el otro componente ya que vuejs no sabe en cual slot ubicar dicho contenido -->
        <!-- para evitar esto podemos asignarle a los slot un nombre con el cual se podra identificar su ubicacion -->
    </div>
</template>
<script>
export default {
    data() {
        return{

        }
    },
    components:{

    }, 
    methods:{
        
    }
}
</script>

<style scoped>
/* se pueden agregar estilos a los slot  */
</style>