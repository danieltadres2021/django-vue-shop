<template>
  <div class="container mt-5">
    <h1> ProductList Shop </h1>
    {{ hasCoaches }}
  </div>
</template>

<script>
export default {
  computed: {
    hasCoaches() {
      return this.$store.getters.categories;
    }
  }
}
</script>
