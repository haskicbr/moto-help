import {SystemMutations, ServiceMutations} from "./mutations";
import {ServiceActions} from "./actions";
import state from "./state";

import Vuex from "vuex";
import Vue from "vue";


Vue.use(Vuex);

let mutations = {
    ...SystemMutations,
    ...ServiceMutations
};

let actions = {
    ...ServiceActions
};


const store = new Vuex.Store({
    state,
    mutations,

    actions,

    getters: {
        defaultServiceType(state) {

            let defaultServiceType = state.defaultServiceType;

            if (typeof (state.serviceTypes[defaultServiceType]) !== 'undefined') {
                return defaultServiceType;
            }

            if (Object.keys(state.serviceTypes).length > 0) {
                return Object.keys(state.serviceTypes)[0];
            }

            return null;
        }
    }
});

store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
});

window.store2 = store;

export default store;
