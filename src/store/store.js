import Vuex from 'vuex'

import defaultState from './state/state'
import actions from './actions/actions'
import getters from './getters/getters'
import mutations from './mutations/mutations'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state: defaultState,
    actions,
    getters,
    mutations
  })

  if (module.hot) {
    module.hot.accept([
      './state/state',
      './actions/actions',
      './getters/getters',
      './mutations/mutations'
    ], () => {
      const newState = require('./state/state').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default
      const newMutations = require('./mutations/mutations').default

      store.hotUpdate({
        state: newState,
        getters: newGetters,
        actions: newActions,
        mutations: newMutations
      })
    })
  }

  return store
}
