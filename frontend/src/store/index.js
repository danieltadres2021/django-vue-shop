import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      products: [
        {
          "productId": 2,
          "title": "A new vinyl",
          "price": 3000,
          "description": "My first saved vinyl in my django api",
          "imageUrl": "https://www.nacionrock.com/wp-content/uploads/LeadBlackSabbath-e1581776762564.jpg",
          "category": 1,
          "band": 1
        }
      ]
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
    }
  }
})

export default store;
