import {
    SystemMutations,
    ServiceMutations,
    TransportMutations
} from "./mutations";

import {
    ServiceActions,
    RegistrationActions,
    AuthActions,
    SystemActions,
    TransportActions
} from "./actions";

import state from "./state";

import Vuex from "vuex";
import Vue from "vue";


Vue.use(Vuex);

let mutations = {
    ...SystemMutations,
    ...ServiceMutations,
    ...TransportMutations
};

let actions = {
    ...ServiceActions,
    ...RegistrationActions,
    ...AuthActions,
    ...SystemActions,
    ...TransportActions
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

store.subscribe((mutation, state, dispatch) => {
    localStorage.setItem('store', JSON.stringify(state));
});

window.store2 = store;

export default store;
