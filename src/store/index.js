
import { createStore } from 'vuex'
import getters from './getters'
import state from './states'
import actions from './actions'
import mutations from './mutations'

const store = createStore({
  state,
  getters,
  actions,
  mutations
})

export default store
