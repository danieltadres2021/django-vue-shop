<template>
  <base-card card-mode="container mt-5 mb-5">
    <form v-on:submit.prevent="submitForm" class="mx-auto" style="max-width: 300px;">
      <div class="form-group">
        <label for="productId">Product Id</label>
        <input type="number" name="productId" id="productId" class="d-flex w-100" v-model.trim="productId.val"/>
      </div>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" class="d-block w-100" v-model.trim="productTitle.val"/>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" name="price" id="price" class="d-flex w-100" v-model.number="productPrice.val"/>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea name="description" id="description" rows="5" cols="35" v-model.trim="productDescription.val">
        </textarea>
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input type="text" name="image" id="image" class="d-flex w-100" v-model.trim="productImage.val"/>
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
      <div v-if="!formIsValid" class="form-group">
        <p>Please fix the above errors and submit again.</p>
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
      productId: {
        val: '',
        isValid: true
      },
      productTitle: {
        val: '',
        isValid: true
      },
      productPrice: {
        val: '',
        isValid: true
      },
      productDescription: {
        val: '',
        isValid: true
      },
      productImage: {
        val: '',
        isValid: true
      },
      selectedCategory: '',
      selectedBand: '',
      formIsValid: true
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
    validateForm() {
      this.formIsValid = true;
      if(!this.productId.val || this.productId.val < 0) {
        this.productId.isValid = false;
        this.formIsValid = false;
      }
      if(this.productTitle.val === '') {
        this.productTitle.isValid = false;
        this.formIsValid = false;
      }
      if(!this.productPrice.val || this.productPrice.val < 0) {
        this.productPrice.isValid = false;
        this.formIsValid = false;
      }
      if(this.productDescription === '') {
        this.productDescription.isValid = false;
        this.formIsValid = false;
      }
      if(this.productImage === '') {
        this.productImage.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      // If the form is invalid, i do not want continue with the next code.
      if(!this.formIsValid) {
        return;
      }

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
