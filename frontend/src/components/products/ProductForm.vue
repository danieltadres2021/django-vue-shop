<template>
  <base-card card-mode="container mt-5 mb-5">
    <form v-on:submit.prevent="submitForm" class="mx-auto" style="max-width: 300px;">
      <div class="form-group" v-bind:class="{invalid: !productId.isValid}">
        <label for="productId">Product Id</label>
        <input type="number" name="productId" id="productId" class="d-flex w-100" v-model.trim="productId.val" @blur="clearValidaty('productId')"/>
        <p class="mt-2" v-if="!productId.isValid">Vinyl Id must not be empty. </p>
      </div>
      <div class="form-group" v-bind:class="{invalid: !productTitle.isValid}">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" class="d-block w-100" v-model.trim="productTitle.val" @blur="clearValidaty('productTitle')"/>
        <p class="mt-2" v-if="!productTitle.isValid">Vinyl Title must not be empty. </p>
      </div>

      <div class="form-group" v-bind:class="{invalid: !productPrice.isValid}">
        <label for="price">Price</label>
        <input type="number" name="price" id="price" class="d-flex w-100" v-model.number="productPrice.val" @blur="clearValidaty('productPrice')"/>
        <p class="mt-2" v-if="!productPrice.isValid">Vinyl Price must be greater than 0</p>
      </div>

      <div class="form-group" v-bind:class="{invalid: !productDescription.isValid}">
        <label for="description">Description</label>
        <textarea name="description" id="description" rows="5" cols="35" v-model.trim="productDescription.val" @blur="clearValidaty('productDescription')">
        </textarea>
        <p class="mt-2" v-if="!productDescription.isValid">Vinyl Description must not be empty. </p>
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
    clearValidaty(input) {
      this[input].isValid = true;
    },
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

<style scoped>
.invalid {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
