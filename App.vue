<template>
  <header class="header">
    <p>Books</p>
  </header>
  <div class="container">
   <Card v-if="searchMode" class="card-search">
      <template #title>Enter Book Title: </template>
      <template #content>
        <InputText
          style="margin-top: 30%"
          type="text"
          v-model="title"
          @click="resetError"
        />
        <br />
        <p style="margin: 1rem; color: red" v-if="showError">
          Book with given Title doesnt exist
        </p>
      </template>
      <template #footer>
        <Button
          @click="handleSearch"
          style="margin-top: 10%"
          icon="pi pi-search"
          label="Search"
          outlined
          severity="help"
        />
      </template>
    </Card>
     <Card v-if="detailsMode"
      style="padding: 2rem; height: auto; width: 45rem; overflow: hidden"
    >
      <template #header>
        <Button
          @click="toggleMode"
          style="margin-top: 2rem; margin-left: 1rem; float: left"
          label="Back" severity="help"
        />
      </template>
      <template #title>Book Title --- {{ resultBooks[0].title }}</template>
      <template #content>
        <Panel style="margin-top: 1rem" header="Book Details" toggleable>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Panel>
        <Panel style="margin-top: 1rem" header="Book Status" toggleable>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Panel>
        <Panel style="margin-top: 1rem" header="New Versions" toggleable>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Panel>
      </template>
    </Card>
  </div>
</template>

<script>
import SeachCard from './src/components/SearchCard.vue'
import ResultCard from './src/components/ResultCard.vue'

export default {
  name: "App",
  components: { SeachCard, ResultCard },
  data() {
    return {
      books: [],
      resultBooks: [],
      title: '',
      showError: false,
      searchMode: true,
      detailsMode: false,
    };
  },
  methods: {
    handleSearch() {
      this.resultBooks = this.books.filter((book) => {
        return book.title.toUpperCase().includes(this.title.toUpperCase())
      });
      if (this.resultBooks.length === 0) {
        this.showError = true;
      } else {
        this.showError = false;
        this.searchMode = false;
        this.detailsMode = true;
      }
    },
    toggleMode() {
      this.searchMode = !this.searchMode;
      this.detailsMode = !this.detailsMode;
    },
    resetError() {
      this.title = "";
      this.showError = false;
    },
  },
  mounted() {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((data) => {
        this.books = data;
        console.log(this.books)
        console.log(this.searchMode)
      })
      .catch((error) => console.log(error.message));
  },
};
</script>

<style>
body {
  margin: 0;
}
.container {
  margin: 0px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.header {
  display: flex;
  justify-content: center;
  background-color: blueviolet;
  color: rgb(228, 219, 219);
  font-size: 24px;
}
.card-search {
  padding: 2rem;
  height: 30rem;
  width: 40rem;
  overflow: hidden;
  text-align: center;
  border-bottom: 1px solid rgb(61, 114, 226);
}

</style>
