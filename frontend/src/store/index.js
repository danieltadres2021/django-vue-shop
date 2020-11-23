import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      categories: [
        {
          categoryId : 'c1',
          title: 'Pop'
        },
        {
          categoryId : 'c2',
          title: 'Rock'
        }
      ]
    }
  },
  getters: {
    categories: state => {
      return state.categories;
    }
  }
})

export default store;
