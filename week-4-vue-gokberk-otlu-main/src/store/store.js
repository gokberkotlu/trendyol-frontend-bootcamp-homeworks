import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        steadyUrl : 'https://swapi.dev/api/starships/',
        filteredUrl : 'https://swapi.dev/api/starships/',
        search : '',
        page : 1
    },
    getters : {
        getFilteredUrl(state) {
            return state.filteredUrl;
        },
        getSearch(state) {
            return state.search;
        },
        getPage(state) {
            return state.page
        }
    },
    mutations : {
        setFilteredUrl(state, payload) {
            state.search = payload;
            state.page = 1;
            state.filteredUrl = state.steadyUrl + '?page=' + state.page + '&search=' + state.search;
        },
        setPage(state, payload) {
            state.page += payload;
            state.filteredUrl = state.steadyUrl + '?page=' + state.page + '&search=' + state.search;
        }
    },
    actions : {
        filterUrl({commit}, payload) {
            commit('setFilteredUrl', payload);
        }
    }
});