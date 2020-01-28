import Vue from 'vue'
import App from './App.vue'
import RouterTemplate from './components/RouteTemplate.vue';
import RouterAnimations from './components/RouterAnimations.vue';

import Vuex from 'vuex'
import VueRouter from 'vue-router'

import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'
import { MileageActions } from "./store/actions"


console.log(MileageActions)



import Mileage from "./components/Mileage"


Vue.use(Vuex);
Vue.use(VueRouter);

Vue.config.productionTip = false;

let mutations =  {
    increment(state) {
        state.count++
    }
}

mutations[MileageActions.ADD_MILEAGE] = (state, payload) => {
    state.mileages.push(payload.mileage);
};



const store = new Vuex.Store({
    state: {

        count: 0,


        // Пробег { name : value }
        mileages: [

        ],

        todos: [
            {id: 1, text: '...', done: true},
            {id: 2, text: '...', done: false}
        ],
        testComputed : {
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

const routes = [
    {path: '/foo', component: RouterTemplate},
    {path: '/animations', component: RouterAnimations},
    {path: '/mileage', component: Mileage},
];

const router = new VueRouter({
    routes
});

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
