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
      ],
      categories: []
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
    },
    setCategory(state, payload) {
      state.categories = payload;
    }
  },
  actions: {
    async loadCategories(context) {
      const response = await fetch(
        'http://localhost:8000/categories/'
      );
      const responseData = await response.json();

      const categories = [];

      for(const key in responseData) {
        const category = {
          categoryId: responseData[key].categoryId,
          title: responseData[key].title
        };
        categories.push(category);
      }
      context.commit('setCategory', categories);
    }

  }
})

export default store;
