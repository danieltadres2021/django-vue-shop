import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      products: [],
      categories: []
    }
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    },
    getCategories: (state) => {
      return state.categories;
    }
  },
  mutations: {
    registerProduct(state, payload) {
      state.products.push(payload);
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    registerCategory(state, payload) {
      state.categories.push(payload);
    },
    setCategories(state, payload) {
      state.categories = payload;
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
      const products = [];
      fetchProducts.then((responseData) => {
        for(const key in responseData) {
          const prod = {
            productId: responseData[key].productId,
            title: responseData[key].title,
            price: responseData[key].price,
            description: responseData[key].description,
            imageUrl: responseData[key].imageUrl,
            category: responseData[key].category,
            band: responseData[key].band,
          }
          products.push(prod);
        }
        context.commit('setProducts', products);
      })
    },

    loadCategories(context) {
      let fetchCategories = new Promise((resolve) => {
        fetch('http://127.0.0.1:8000/categories/')
        .then(response => response.json())
        .then(data => {
          resolve(data);
        })
      });
      const categories = [];
      fetchCategories.then((responseData) => {
        for(const key in responseData) {
          const category = {
            categoryId: responseData[key].categoryId,
            title: responseData[key].title
          }
          categories.push(category);
        }
        context.commit('setCategories', categories);
      })
    }

  }
})

export default store;
