<template>
  <div class="container">
    <Card style="padding: 2rem; height: 30rem; width: 45rem; overflow: hidden; text-align: center">
      <template #title>Enter Book ID: </template>
      <template  #content>
       <InputText style="margin-top: 30% " type="text" v-model="value" />
      </template>
      <template #footer>
          <Button style="margin-top: 10% "  label="Search" outlined />
      </template>
    </Card>
  </div>
</template>

<script>
import Post from "./src/components/Post.vue";
export default {
  name: "App",
  components: { Post },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => (this.posts = data))
      .catch((error) => console.log(error.message));
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #F5F5F5;
}
</style>
