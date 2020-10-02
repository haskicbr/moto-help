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
import getters from "./getters";

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

    getters
});

store.subscribe((mutation, state, dispatch) => {
    localStorage.setItem('store', JSON.stringify(state));
});

window.store2 = store;

export default store;
