<template>
  <base-card card-mode="container mt-5 mb-5">
    <form class="mx-auto" style="max-width: 300px;">
      <div class="form-group">
        <label for="productId">Product Id</label>
        <input type="number" name="productId" id="productId" class="d-flex w-100"/>
      </div>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" class="d-block w-100"/>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" name="price" id="price" class="d-flex w-100"/>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea type="text" name="description" id="description" rows="5" cols="35"></textarea>
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input type="text" name="image" id="image" class="d-flex w-100"/>
      </div>
      <!--
      <div class="form-group">
        <label for="title">Category</label>
        <select v-model="selectedCategory">
          <option v-for="category in fetchCategories" v-bind:key="category.categoryId">{{category.title}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="title">Band</label>
      </div>
      <div class="form-group">
        <a class="btn btn-outline-success">SAVE</a>
      </div>
      -->
    </form>
  </base-card>
</template>

<script>
export default {}
</script>
