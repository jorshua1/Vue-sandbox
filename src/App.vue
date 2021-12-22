<template>
<div id="App">
  <add-blog></add-blog>
</div>
</template>
<script>
import addBlog from './components/addBlog'

export default ({
  components: {
    'add-blog': addBlog
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
  font-family: Arial, Helvetica, sans-serif;
}

#App{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>