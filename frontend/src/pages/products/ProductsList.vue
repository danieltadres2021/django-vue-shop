<template>

  <base-card>
    <h1>ProductList.vue</h1>

    <ul>
      <li v-for="(prod) in fetchAllProducts" v-bind:key="prod.productId">
        {{ prod }}
      </li>
    </ul>

  </base-card>

</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('loadProducts');
  },
  data() {
    return {
      products: []
    }
  },
  computed: {
    fetchAllProducts() {
      return this.$store.getters.getProducts
    }
  }
}
</script>
