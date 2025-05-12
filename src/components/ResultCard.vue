<template>
  <Card
      style="padding: 2rem; height: auto; width: 45rem; overflow: hidden"
    >
      <template #header>
        <Button
          @click="$emit('toggleMode')"
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
</template>

<script>
export default {
 props: ['resultBooks']
}
</script>

<style>

</style>