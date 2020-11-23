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
  }
})

export default store;
