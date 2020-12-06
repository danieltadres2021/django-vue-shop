<template>
  <base-card card-mode="container mt-5 mb-5">
    <div class="row">
      <product-item
        v-for="(prod) in fetchAllProducts"
        v-bind:key="prod.productId"
        v-bind:product-id="prod.productId"
        v-bind:product-title="prod.title"
        v-bind:product-price="prod.price"
        v-bind:product-description="prod.description"
        v-bind:product-image="prod.imageUrl"
        >
      </product-item>
    </div>
  </base-card>
</template>

<script>
import ProductItem from '../../components/products/ProductItem.vue';
export default {
  components: {
    ProductItem
  },
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
