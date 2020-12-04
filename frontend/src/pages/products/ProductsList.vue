<template>

  <base-card>
    <h1>ProductList.vue</h1>
    {{ fetchAllProducts }}
  </base-card>

</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('loadProducts');
  },
  data() {
    return {
      products: this.$store.getters.getProducts
    }
  },
  computed: {
    fetchAllProducts() {
      return this.products;
    }
  }
}
</script>
