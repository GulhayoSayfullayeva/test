<template>
  <div class="container">
    <Card v-if="searchMode" style="padding: 2rem; height: 30rem; width: 45rem; overflow: hidden; text-align: center;">
      <template #title>Enter Book ID: </template>
      <template #content>

        <InputText style="margin-top: 30% " type="text" v-model="id" @click="resetError" />
        <br>
        <p style="margin: 1rem; color: red" v-if="showError">Book with given ID doesnt exist</p>
      </template>
      <template #footer>
        <Button @click="handleSearch" style="margin-top: 10% " icon="pi pi-search" label="Search" outlined />

      </template>
    </Card>
    <Card v-if="detailsMode" style="padding: 2rem; height: auto; width: 45rem; overflow: hidden">
      <template #header>
        <Button @click="toggleMode" style="margin-top: 2rem; margin-left: 1rem; float:left" label="Back" />
      </template>
      <template #title>Book Title --- {{ this.resultBooks[0].title }}</template>
      <template #content>
        <Panel style="margin-top: 1rem;" header="Book Details" toggleable>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </Panel>
        <Panel style="margin-top: 1rem;" header="Book Status" toggleable>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </Panel>
        <Panel style="margin-top: 1rem;" header="New Versions" toggleable>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </Panel>
      </template>
    </Card>
  </div>

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
      this.searchMode = !this.searchMode
      this.detailsMode = !this.detailsMode
    },
    resetError() {
      this.id = ''
      this.showError = false
    }
  },
  mounted() {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((data) => {
        this.books = data
      })
      .catch((error) => console.log(error.message));
  },
};
</script>

<style>
.container {
  margin: 0px;
  background: #F5F5F5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

}
</style>
