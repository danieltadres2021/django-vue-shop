<template>
  <base-card card-mode="container mt-5 mb-5">
    <h4 class="text-center">Looking for a Vinyl?</h4>
    <div class="form-group d-flex justify-content-center">
      <input
        type="text"
        class="form-control mt-3 custom-width"
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

    <transition name="slide-fade">
      <div class="mx-auto shadow pt-3 pb-3 mb-5 bg-white rounded mt-5 row" style="max-width: 500px;"
        v-if="showData">
        <section class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
          <img v-bind:src="this.selectedProduct.imageUrl" class="rounded-sm" style="max-width: 200px;">
        </section>
        <section class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        </section>
      </div>
    </transition>

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
    }
  },
  watch: {
    selectedProduct() {
      this.showData = true;
    }
  }
}
</script>

<style scoped>
  .custom-width {
    width: 500px;
  }

  .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
