<template>
<div id="App">
  <show-blogs></show-blogs>
</div>
</template>
<script>
import addBlog from './components/addBlog'
import showBlogs from './components/showBlogs'


export default ({
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs
  },
  data() {
    return {

    }
  },
  methods: {

  }
})
</script>

<style >
body{
  margin: 0;
  background-color: #32373B;
  font-family: Arial, Helvetica, sans-serif;
}

#App{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>