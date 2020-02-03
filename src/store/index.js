import {MileageMutationTypes} from "./mutations/MutationTypes";

import Vuex from "vuex";
import Vue from "vue";


Vue.use(Vuex);

let mutations = {
    increment(state) {
        state.count++
    }
};


mutations[MileageMutationTypes.ADD_MILEAGE] = (state, payload) => {
    state.mileages.unshift(
        payload
    );
};


const store = new Vuex.Store({
    state: {

        count: 0,


        // Пробег { name : value }
        mileages: [],

        todos: [
            {id: 1, text: '...', done: true},
            {id: 2, text: '...', done: false}
        ],
        testComputed: {
            computedValue: 'this is computed value'
        }
    },


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

export default store;
