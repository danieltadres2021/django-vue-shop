<template>
  <base-card card-mode="container mt-5 mb-5">
    <h4 class="text-center">Delete a Vinyl?</h4>
    <ul class="list-group mx-auto mt-5"
        style="max-width: 500px;">
        <li class="list-group-item d-flex justify-content-between"
            v-for="(prod) in fetchAllProducts"
            v-bind:key="prod.productId">

            <div>
              {{ prod.productId }}
              {{ prod.title }}
            </div>

            <div>
              <span v-on:click="deleteById(prod.productId)" class="badge badge-danger p-2 pointer-cursor">
                <i class="fas fa-trash-alt"></i>
                DELETE
              </span>
            </div>
        </li>
    </ul>
  </base-card>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('loadProducts');
  },
  computed: {
    fetchAllProducts() {
      return this.$store.getters.getProducts
    }
  },
  methods: {
    deleteById(value) {
      this.$store.dispatch('deleteProductById', value);
      this.$router.push('/products')
    }
  }
}
</script>

<style scoped>
.pointer-cursor {
  cursor: pointer
}
</style>
