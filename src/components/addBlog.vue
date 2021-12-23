<template>
  <div id="add-blog">
    <h2>Add a new blog post</h2>
    <form v-if="!submitted">
      <label>Blog Title: </label>
      <input type="text" v-model="blog.title" required>
      <label for="">Blog content: </label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label>Uno</label>
        <input type="checkbox" value="Uno" v-model="blog.categories">
        <label>Dos</label>
        <input type="checkbox" value="Dos" v-model="blog.categories">
        <label>Tres</label>
        <input type="checkbox" value="Tres" v-model="blog.categories">
        <label>Cuatro</label>
        <input type="checkbox" value="Cuatro" v-model="blog.categories">
      </div>
      <label>Author: </label>
      <!-- select es el que va a poseer el valor seleccionado de las opciones por ende usara el v-model para pasar el dato
         al componente -->
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author"> {{author}} </option>
      </select>
      <!-- Estamos agregando  -->
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding a blog post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{blog.title}} </p>
      <p> {{blog.content}} </p>
      <p>Blog Content:</p>
      <p>Blog Categories</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">{{category}}</li>
      </ul>
      <p>Author: {{blog.author}} </p>
    </div>
  </div>
</template>
<script>
  // import { defineComponent } from '@vue/composition-api'

  export default ({
    data() {
      return {
        blog: {
          title: '',
          content: '',
          categories: [],
          author: ''
        },
        authors: ['Author one', 'Author two', 'Author three'],
        submitted: false,

      }
    },
    methods: {
      post: function () {
        // dado a que ya instalamos vue-resource podremos hacer uso de la variable $http del pluggin 
        // luego de acceder a la variable le indicamos el metodo que usara, en este caso sera post
        this.$http.post('http://jsonplaceholder.typicode.com/posts', {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
          // dado a que este metodo funciona como promesa se usa el then para que apenas sea completada
          // entonces pase los datos 
        }).then(function (data) {
          console.log(data);
          this.submitted=true;
        });
        // luego de realizar esto se puede decir que ya logramos hacer una post request 
      }
    }
  })
</script>
<style scoped>
  form {
    width: 40vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  label {
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  input {
    margin-top: 10px;
    height: 30px;
    border: 1px solid lightgray;
  }

  input:hover {
    border: 1px solid lightgreen;
  }

  textarea {
    /* background-color: whitesmoke; */
    border: 1px solid lightgray;
    max-width: 40vw;
  }

  #preview {
    margin-top: 20px;
    border: 1.5px dotted lightgray;
    padding: 20px;
  }

  #checkboxes input {
    display: inline-block;
    margin-right: 10px;
  }

  #checkboxes label {
    display: inline-block;
    /* margin: 10px; */
  }
</style>