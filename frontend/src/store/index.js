import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      products: [],
      categories: [],
      bands: [],
      product: null
    }
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    },
    getCategories: (state) => {
      return state.categories;
    },
    getBands: (state) => {
      return state.bands;
    }
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    setCategories(state, payload) {
      state.categories = payload;
    },
    setBands(state, payload) {
      state.bands = payload
    },
    setProduct(state, payload) {
      state.product = payload
    }
  },
  actions: {
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
    },
    loadBands(context) {
      let fetchBands = new Promise((resolve) => {
        fetch('http://127.0.0.1:8000/bands/')
        .then(response => response.json())
        .then(data => {
          resolve(data);
        })
      });
      const bands = [];
      fetchBands.then((responseData) => {
        for(const key in responseData) {
          const band = {
            bandId: responseData[key].bandId,
            title: responseData[key].title
          }
          bands.push(band);
        }
        context.commit('setBands', bands)
      })
    },
    registerProduct(context, data) {
      const productData = {
        productId: parseInt(data.productId.val),
        title: data.productTitle.val,
        price: data.productPrice.val,
        description: data.productDescription.val,
        imageUrl: data.productImage.val,
        category: data.productBand,
        band: data.productCategory
      };
      console.log(productData);

      const response = new Promise((resolve) => {
        fetch('http://127.0.0.1:8000/products/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(productData)
        })
        .then((responseData) => {
          resolve(responseData);
        })
      })
      response.then((data) => {
        console.log(data);
      })
    },
    loadProductById(context, data) {
      context.commit('setProduct', data)
    }
  }
})

export default store;
