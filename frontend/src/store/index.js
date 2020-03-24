import {SystemMutations, ServiceMutations} from "./mutations";
import {ServiceActions, RegistrationActions, AuthActions} from "./actions";
import state from "./state";

import Vuex  from "vuex";
import Vue   from "vue";
import axios from "../services/api/ApiRequest";
import Urls from "../services/api/Urls";


Vue.use(Vuex);

let mutations = {
    ...SystemMutations,
    ...ServiceMutations
};

let actions = {
    ...ServiceActions,
    ...RegistrationActions,
    ...AuthActions,
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

    if (state.isRegisterUser) {

        axios.post(Urls.POST_UPDATE_STORE, {
            store: JSON.stringify(state)
        });

        localStorage.setItem('store', JSON.stringify(state));

    } else {
        localStorage.setItem('store', JSON.stringify(state));
    }
});

window.store2 = store;

export default store;
