<template>
  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Jane Doe</h4>
        <p class="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
      <img class="card-img-bottom" src="img_avatar6.png" alt="Card image" style="width:100%">
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
    }
  }
}
</script>
