<template>
  <base-card card-mode="container mt-5 mb-5">
    <form v-on:submit.prevent="submitForm" class="mx-auto" style="max-width: 300px;">
      <div class="form-group">
        <label for="productId">Product Id</label>
        <input type="number" name="productId" id="productId" class="d-flex w-100" v-model.trim="productId"/>
      </div>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" class="d-block w-100" v-model.trim="productTitle"/>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" name="price" id="price" class="d-flex w-100" v-model.number="productPrice"/>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea name="description" id="description" rows="5" cols="35" v-model.trim="productDescription">
        </textarea>
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input type="text" name="image" id="image" class="d-flex w-100" v-model.trim="productImage"/>
      </div>
      <div class="form-group">
        <select class="w-100" v-model="selectedCategory">
          <option disabled value="">Please select a Category</option>
          <option
            v-for="category in fetchAllCategories"
            v-bind:key="category.categoryId"
            v-bind:value="category.categoryId"
            >
            {{ category.title }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <select class="w-100" v-model="selectedBand">
          <option disabled value="">Please select a Band</option>
          <option
            v-for="band in fetchAllBands"
            v-bind:key="band.bandId"
            v-bind:value="band.bandId"
            >
            {{ band.title }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Register Vinyl</button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      productId: '',
      productTitle: '',
      productPrice: '',
      productDescription: '',
      productImage: '',
      selectedCategory: '',
      selectedBand: ''
    }
  },
  mounted() {
    this.$store.dispatch('loadCategories');
    this.$store.dispatch('loadBands');
  },
  computed: {
    fetchAllCategories() {
      return this.$store.getters.getCategories;
    },
    fetchAllBands() {
      return this.$store.getters.getBands;
    }
  },
  methods: {
    submitForm() {
      const formData = {
        productId: this.productId,
        productTitle: this.productTitle,
        productPrice: this.productPrice,
        productDescription: this.productDescription,
        productImage: this.productImage,
        productCategory: this.selectedCategory,
        productBand: this.selectedBand
      }
      console.log(formData);
    }
  }
}
</script>
