<template>
  <div class="container">
    <Card v-if="searchMode" style="padding: 2rem; height: 30rem; width: 45rem; overflow: hidden; text-align: center">
      <template #title>Enter Book ID: </template>
      <template #content>

        <InputText style="margin-top: 30% " type="text" v-model="id" />
        <br>
        <Message style="margin: 1rem; " v-if="showError" severity="error" variant="simple">Book with given ID doesnt
          exist</Message>
      </template>
      <template #footer>
        <Button @click="handleSearch" style="margin-top: 10% " label="Search" outlined />

      </template>
    </Card>
    <Card v-if="detailsMode" style="padding: 2rem; height: 30rem; width: 45rem; overflow: hidden">
      <template #header>
        <Button @click="toggleMode" style="margin: 2rem; float:left" label="Back" />
    </template>
      <template #title>Book Title --- {{ this.resultBooks[0].title }}</template>
      <template #content>
        <p class="m-0">
          Book Description --- {{ this.resultBooks[0].body }}
          <br>
          Published Year --- {{ this.resultBooks[0].publishYear }}
        </p>
      </template>
    </Card>
  </div>
  <router-view />
</template>

<script>
import BookDetails from "./src/components/BookDetails.vue";
export default {
  name: "App",
  components: { BookDetails },
  data() {
    return {
      books: [],
      resultBooks: [],
      id: '',
      showError: false,
      searchMode: true,
      detailsMode: false
    };
  },
  methods: {
    handleSearch() {
      this.resultBooks = this.books.filter(book => {
        return book.id === this.id
      })
      console.log(this.books)
      if (this.resultBooks.length === 0) {
        this.showError = true

      }
      else {
        this.showError = false
        this.searchMode = false
        this.detailsMode = true
      }
    },
    toggleMode() {
      this.searchMode = ! this.searchMode
      this.detailsMode = ! this.detailsMode
    }
  },
  mounted() {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((data) => {
        this.books = data
        console.log(this.books)
      })
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
