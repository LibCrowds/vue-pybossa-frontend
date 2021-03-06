import isEmpty from 'lodash/isEmpty'
import { setCollectionDefaults } from '@/utils/setCollectionDefaults'
import { fetchAll } from '@/utils/fetchAll'

export default {
  UPDATE_CURRENT_USER: ({ dispatch, commit }, axios, ga) => {
    return axios.$get(`/account/profile`).then(data => {
      if (data.hasOwnProperty('user')) {
        commit('SET_ITEM', {
          key: 'currentUser', value: data.user
        })

        // Set GA tracking ID
        if (ga) {
          ga.set({ userId: data.user.id })
        }

        return data.user
      } else {
        commit('SET_ITEM', {
          key: 'currentUser', value: {}
        })
      }
    })
  },

  LOGOUT: ({ commit }, axios, flarum) => {
    return axios.$get('/account/signout').then(data => {
      // Sign out from Flarum, if enabled
      if (flarum) {
        flarum.signout()
      }

      commit('SET_ITEM', {
        key: 'currentUser', value: {}
      })

      return data
    })
  },

  UPDATE_PUBLISHED_COLLECTIONS: ({ commit, state }, axios) => {
    return fetchAll(axios, 'category', {
      info: 'published::true',
      orderby: 'created',
      desc: true
    }).then(data => {
      if (data && data.length) {
        for (let item of data) {
          setCollectionDefaults(item)
        }
      }
      commit('SET_ITEM', {
        key: 'publishedCollections', value: data
      })
    })
  },

  UPDATE_CURRENT_COLLECTION: ({ commit }, collection) => {
    if (collection && !isEmpty(collection)) {
      setCollectionDefaults(collection)
    }
    commit('SET_ITEM', {
      key: 'currentCollection', value: collection
    })
  },

  UPDATE_CURRENT_PROJECT: ({ commit }, project) => {
    commit('SET_ITEM', {
      key: 'currentProject', value: project
    })
  },

  UPDATE_CURRENT_TEMPLATE: ({ commit }, template) => {
    commit('SET_ITEM', {
      key: 'currentTemplate', value: template
    })
  },

  UPDATE_LAST_READ: ({ state, dispatch }, axios) => {
    const infoClone = JSON.parse(JSON.stringify(state.currentUser.info))
    const userAnnouncements = infoClone.announcements || {}
    userAnnouncements['last_read'] = new Date().toISOString()
    infoClone.announcements = userAnnouncements
    return axios.$put(`/api/user/${state.currentUser.id}`, {
      info: infoClone
    }).then(data => {
      dispatch('UPDATE_CURRENT_USER', axios)
    })
  },

  UPDATE_ALL_READ: ({ state, dispatch }, axios) => {
    const infoClone = JSON.parse(JSON.stringify(state.currentUser.info))
    const userAnnouncements = infoClone.announcements || {}
    userAnnouncements['all_read'] = new Date().toISOString()
    infoClone.announcements = userAnnouncements
    return axios.$put(`/api/user/${state.currentUser.id}`, {
      info: infoClone
    }).then(data => {
      dispatch('UPDATE_CURRENT_USER', axios)
    })
  },

  UPDATE_COLLECTION_NAV_ITEMS: ({ commit }, nodes) => {
    const navItems = []
    for (let node of nodes) {
      navItems.push({
        id: node.id,
        text: node.getAttribute('data-title') || node.innerHTML
      })
    }
    commit('SET_ITEM', {
      key: 'collectionNavItems', value: navItems
    })
  },

  TOGGLE_DARK_MODE: ({ commit, state }) => {
    commit('SET_ITEM', {
      key: 'darkMode', value: !state.darkMode
    })
  }
}
