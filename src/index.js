import Vue from 'vue'

const loading = {
    namespaced: true,
    state: {
    },
    mutations: {
        createLoading (state, name) {
            this._vm.$set(state, [`${name}`], false)
        },
        startLoading (state, name) {
            this._vm.$set(state, [`${name}`], true)
        },
        endLoading (state, name) {
            this._vm.$set(state, [`${name}`], false)
        }
    }
}

const plugins = (store) => {
    store.registerModule('loading', loading)
    for (let key in store._actions) {
        store._actions[key] = store._actions[key].map((action) => {
            store.commit('loading/createLoading', key)
            return async (payload, cb) => {
                store.commit('loading/startLoading', key)
                try {
                    return await action(payload, cb)
                } finally {
                    store.commit('loading/endLoading', key)
                }
            }
        })
    }
}

export default plugins
