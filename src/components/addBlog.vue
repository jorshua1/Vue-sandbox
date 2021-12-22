<template>
  <div id="add-blog">
    <h2>Add a new blog post</h2>
    <form>
      <label>Blog Title: </label>
      <input type="text" v-model="blog.title" required>
      <label for="">Blog content: </label>
      <textarea v-model="blog.content"></textarea>
    <div id="checkboxes">
      <label >Uno</label>
      <input type="checkbox" value="Uno" v-model="blog.categories">
      <label >Dos</label>
      <input type="checkbox" value="Dos" v-model="blog.categories">
      <label >Tres</label>
      <input type="checkbox" value="Tres" v-model="blog.categories">
      <label >Cuatro</label>
      <input type="checkbox" value="Cuatro" v-model="blog.categories">
    </div>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title:  {{blog.title}} </p>
      <p>Blog Content:  {{blog.content}} </p>
      <p>Blog Categories</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  // import { defineComponent } from '@vue/composition-api'

  export default ({
    data() {
      return {
        blog: {
          title:'',
          content:'',
          categories:[]
        }
      }
    },
    methods: {

    }
  })
</script>
<style scoped>
form{
  width: 40vw;
  display: flex;
  flex-direction: column;
}
label{
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
}

input{
  margin-top: 10px;
  height: 30px;
  border:1px solid lightgray;
}

input:hover{
  border:1px solid lightgreen;
}

textarea{
  /* background-color: whitesmoke; */
  border:1px solid lightgray;

}

#preview{
  margin-top: 20px;
  border: 1.5px dotted lightgray;
  padding: 20px;
}

#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label{
  display: inline-block;
  /* margin: 10px; */
}
</style>