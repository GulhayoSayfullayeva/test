<template>
   <Card>
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
          @click="$emit('handleSearch')"
          style="margin-top: 10%"
          icon="pi pi-search"
          label="Search"
          outlined
          severity="help"
        />
      </template>
    </Card>

</template>

<script>
export default {
    props: ['searchMode', 'detailsMode'],
 data() {
    return {
        title: '',
        showError: false,
    }
 },
 methods: {
    resetError() {
      this.title = "";
      this.showError = false;
    },
    
 }
}
</script>

<style>

</style>