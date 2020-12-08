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
      <div class="mx-auto shadow pt-3 pb-3 mb-5 bg-white rounded mt-5" style="max-width: 500px;"
          v-if="showData">
        <section class="d-flex justify-content-center mt-3 mb-3">
          <img v-bind:src="this.selectedProduct.imageUrl" class="rounded-sm" style="max-width: 200px;">
        </section>
        <section class="d-flex flex-column justify-content-center mt-3 mb-3">
          <h1>{{ vinylTitle }}</h1>
          <h1>{{ vinylPrice }}</h1>
          <h1>{{ vinylDescription }}</h1>
          <h1>{{ vinylCategory }}</h1>
          <h1>{{ vinylBand }}</h1>
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
      if(this.selectedProduct != 'undefined') {
        this.showData = true;
      } else {
        this.showData = false;
      }
    }
  },
  computed: {
    vinylImage() {
      return this.selectedProduct.imageUrl;
    },
    vinylTitle() {
      return this.selectedProduct.title;
    },
    vinylPrice() {
      return this.selectedProduct.price;
    },
    vinylDescription() {
      return this.selectedProduct.description;
    },
    vinylCategory() {
      return this.selectedProduct.category;
    },
    vinylBand() {
      return this.selectedProduct.band;
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
