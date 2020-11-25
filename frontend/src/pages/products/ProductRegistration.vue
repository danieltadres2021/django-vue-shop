<template>
  <base-card>
    <product-form></product-form>
  </base-card>
  {{ fetchCategories }}
</template>

<script>
import ProductForm from '../../components/products/ProductForm.vue';
export default {
  components: {
    ProductForm
  },
  created() {
    this.$store.dispatch('loadCategories');
  },
  computed: {
    fetchCategories() {
      return this.$store.getters.getCategories;
    }
  }
}
</script>
