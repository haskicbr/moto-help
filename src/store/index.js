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
/*        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },

        countAsText: state => {
            return state.count + ' this is count from getters';
        }*/
    }
});

store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
});

window.store2 = store;

export default store;
