import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      guess1: '',
      guess2: '',
      guess3: '',
      guess4: '',
      guess5: '',
      guess6: ''
    }
  }
})

export default store
