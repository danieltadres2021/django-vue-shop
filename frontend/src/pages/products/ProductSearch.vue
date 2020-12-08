<template>
  <base-card card-mode="container mt-5 mb-5">
    <h4 class="text-center">Looking for a Vinyl?</h4>
    <div class="form-group d-flex justify-content-center">
      <input
        type="text"
        class="form-control mt-3 custom-input"
        placeholder="Enter a Vinyl name"
        name="title"
        id="title"
        v-model.trim="productTitle"/>
    </div>
    <div class="form-group d-flex justify-content-center">
      <button
        class="btn btn-primary btn-sm"
        v-on:click="searchByName">
        Search
      </button>
    </div>

    <div v-if="showData">
      <h1>Hi devs!</h1>
    </div>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      showData: false,
      productTitle: null,
      selectedProduct: null
    }
  },
  methods: {
    searchByName() {
      this.selectedProduct = this.$store.getters.getProducts.find(
        product => product.title === this.productTitle
      );
      if(this.selectedProduct != null) {
        this.showData = true;
      } else {
        this.showData = false;
      }
    }
  }
}
</script>

<style scoped>
  .custom-input {
    width: 500px;
  }
</style>
