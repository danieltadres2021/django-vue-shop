<template>
  <form class="mx-auto" style="max-width: 300px;">
    <div class="form-group">
      <label for="productId">Product Id</label>
      <input type="number" name="productId" id="productId" class="d-flex w-100"/>
    </div>
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" name="title" id="title" class="d-block"/>
    </div>
    <div class="form-group">
      <label for="title">Price</label>
      <input type="text" class="form-control"/>
    </div>
    <div class="form-group">
      <label for="title">Description</label>
      <input type="text" class="form-control"/>
    </div>
    <div class="form-group">
      <label for="title">Url de la imagen</label>
      <input type="text" class="form-control"/>
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
</template>

<script>
export default {}
</script>
