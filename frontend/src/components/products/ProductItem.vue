<template>
  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt-4">
    <div class="card">
      <img class="card-img-top" v-bind:src="productImage" alt="Card image" style="width:100%; max-height: 200px;">
      <div class="card-body">
        <h4 class="card-title">{{ productTitle }}</h4>
        <p class="card-text">{{ productDescription }}</p>
        <a href="#" class="badge badge-success d-block">${{productPrice}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productId: {
      type: Number,
      required: true
    },
    productTitle: {
      type: String,
      required: true
    },
    productPrice: {
      type: Number,
      required: true
    },
    productDescription: {
      type: String,
      required: true
    },
    productImage: {
      type: String,
      required: true
    }
  }
}
</script>
