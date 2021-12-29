<template>
    <div  v-theme="'bgCol'" id="show-blogs">
        <h1>All blogs</h1>
        <!-- por medio del v-for recorremos el arreglo creado para guardar los post que vienen por medio de la api -->
        <div class="single-blog" v-for="(blog, index) in blogs" :key=index>
            <h2 v-rainbow> {{blog.title}} </h2>
            <article>{{blog.body}}</article>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                //Creamos un arreglo el cual guardara los 10 primeros objetos que traiga por medio
                // del json
                blogs: []
            }
        },
        methods: {

        },
        //al igual que lo hacemos con el metodo post procedemos a crear una peticion get para obtener los blogs
        // que nos provee el api, esto lo hacemos en la funcion created que es la recomendada para hacer las peticiones
        // a la base de datos 
        created() {
            // le digo en esta funcion, use el vue-resource $http variable junto a la apo que consultara y apenas cumpla la
            // promesa de hacer la consulta me enseñe la data obtenida de la api
            this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function (data) {
                //imprimo en consola la data que llega por medio de la api
                console.log(data);
                //le digo al arreglo blogs creado en la data que contendra la data del metodo get cortada en los primeros
                // 10 resultados
                this.blogs = data.body.slice(0, 20);
            })
        }
    }
</script>
<style scoped>
    #show-blogs {
        width: 80vw;
        text-align: center;
        justify-content: center;
        box-shadow: 5px 5px 10px #26292C;
    }

    .single-blog {
        display: inline-block;
        height: auto;
        width: 25vw;
        margin: 10px;
        padding: 30px;
        background-color: #F4B860;
        text-align: justify;
        border-radius: 10px;
    }

    .single-blog h2 {
        text-align: center;
        margin-bottom: 40px;
    }

    .single-blog>h2:hover {
        text-decoration-line: underline;

    }
</style>