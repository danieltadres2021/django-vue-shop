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
    }
  },
  mutations: {
    registerProduct(state, payload) {
      state.products.push(payload);
    },
    setProducts(state, payload) {
      state.products = payload;
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

      const products = []

      fetchProducts.then((responseData) => {
        for(const key in responseData) {
          const prod = {
            productId : responseData[key].productId
          }
          products.push(prod)
        }
        context.commit('setProducts', products)
      })

    }
  }
})

export default store;
