import {SystemMutations, MileageMutations} from "./mutations";
import state from "./state";

import Vuex from "vuex";
import Vue from "vue";


Vue.use(Vuex);

let mutations = {
    ...SystemMutations,
    ...MileageMutations
};




const store = new Vuex.Store({
    state,
    mutations,

    actions: {
        increment(context) {
            context.commit('increment')
        }
    },

    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },

        countAsText: state => {
            return state.count + ' this is count from getters';
        }
    }
});


store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
});

window.store2 = store;

export default store;
