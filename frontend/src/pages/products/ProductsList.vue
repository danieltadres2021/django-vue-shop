<template>
  <div class="container mt-5">
    <h1> ProductList Shop! </h1>
    {{ hasProducts }}
  </div>
</template>

<script>
export default {
  computed: {
    hasProducts() {
      return this.$store.getters.getProducts;
    }
  }
}
</script>
