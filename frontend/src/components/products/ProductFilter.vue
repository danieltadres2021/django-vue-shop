<template>
  <div class="shadow p-3 mb-5 bg-white rounded mx-auto" style="max-width: 500px;">
    <div class="form-group mb-0">
      <input type="radio" id="categories" value="categories" v-model="picked" class="mr-2"/>
      <label for="categories">Categories</label>
    </div>
    <div class="form-group mb-0">
      <input type="radio" id="bands" value="bands" v-model="picked" class="mr-2"/>
      <label for="bands">Bands</label>
    </div>
    <div v-if="isSelected === 'categories'" class="form-group">
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
    <div v-if="isSelected === 'bands'" class="form-group">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: null,
      isSelected: null
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
  watch: {
    picked(val) {
      if(val == 'categories') {
        this.isSelected = this.picked;
      } else if (val == 'bands') {
        this.isSelected = this.picked;
      }
    }
  }
}
</script>
