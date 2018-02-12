import Vuex from 'vuex'

import mutations from '@/store/mutations'
import actions from '@/store/actions'

actions.nuxtServerInit = async ({ dispatch }, { app }) => {
  await dispatch('UPDATE_CURRENT_USER', app.$axios)
  await dispatch('UPDATE_PUBLISHED_COLLECTIONS', app.$axios)
}

export default () => {
  return new Vuex.Store({
    state: {
      darkMode: false,
      currentUser: {},
      publishedCollections: [],
      currentCollection: {},
      collectionNavItems: [],
      currentProject: {},
      currentTemplate: {}
    },

    mutations,

    actions
  })
}
