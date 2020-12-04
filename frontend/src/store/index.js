import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      products: []
    }
  },
  getters: {
    getProducts: state => {
      return state.products;
    },
    getCategories: state => {
      return state.categories;
    }
  },
  mutations: {
    registerProduct(state, payload) {
      state.products.push(payload);
    }
  },
  actions: {

    // Method that sends request to the api to retrieve product data

    loadProducts(context) {
      let fetchProducts = new Promise((resolve) => {
        fetch('http://127.0.0.1:8000/products/')
        .then(response => response.json())
        .then(data => {
          resolve(data);
        })
      });

      fetchProducts.then((value) => {
        context.commit('registerProduct', value)
      })

    }
  }
})

export default store;
