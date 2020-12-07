<template>
  <base-card>
    <product-form @submit="saveData" @read="readData"></product-form>
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
    readData(data) {
      console.log(data);
    }
  }
}
</script>
