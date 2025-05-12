<template>
   <div class="post">
    <h3>{{ book.title }}</h3>
    <p>{{ book.body }}</p>
    <span v-for="tag in book.tags" :key="tag">
      #{{ tag }}
    </span>
  </div>
</template>

<script>
export default {
 props: ['book'],
}
</script>

<style>
.post{
    max-width: 600px;
    border: none;
    background: rgb(245, 243, 243);
    border-radius: 10px;
    padding: 10px;
    margin: 20px;
    text-align: center;
}
.post:hover{
    background: grey;
}
</style>