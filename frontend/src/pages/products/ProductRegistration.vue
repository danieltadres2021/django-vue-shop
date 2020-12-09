<template>
  <base-card card-mode="container mt-5 mb-5">
    <product-form @submit="saveData" @update="updateData"></product-form>
  </base-card>
</template>

<script>
import ProductForm from '../../components/products/ProductForm.vue';

export default {
  components: {
    ProductForm
  },
  methods: {
    saveData(data) {
      console.log(data);
      this.$store.dispatch('registerProduct', data);
    },
    updateData(data) {
      console.log(data);
      this.$store.dispatch('updateProduct', data);
    }
  }
}
</script>
