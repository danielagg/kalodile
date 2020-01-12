import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        listings: [],
        featuredListing: {},
        user: {},
        loginUserInput: {
            email: '',
            password: ''
        }
    },
    // getters: {
    //     mappings: state => state.mappings,
    //     filters: state => state.filters
    // },
    actions: {
        async login({ commit, state }) {
            const url = "http://localhost:5000/api/users/login";
            const result = await axios.post(url, { 
                email: state.loginUserInput.email,
                password: state.loginUserInput.password
             });
            commit("fetchUser", result.data.user);
        },
        async fetchListings({ commit }) {
            let url =
                "http://localhost:5000/api/listings?";

            // if (getters.filters.compCode) {
            //     url += `&companyCode=${getters.filters.compCode}`;
            // }
            // if (getters.filters.sapZone) {
            //     url += `&sapZone=${getters.filters.sapZone}`;
            // }
            const result = await axios.get(url);
            commit("fetchListings", result);
        }
    },

    mutations: {
        fetchUser(state, user) {
            state.user = user
        },
        fetchListings(state, listings) {
            state.listings = listings
        }
        // setFilterCompanyCode(state, companyCode) {
        //     state.filters.companyCode = companyCode;
        // },
        // setFilterSapZone(state, sapZone) {
        //     state.filters.sapZone = sapZone;
        // }
    }
})