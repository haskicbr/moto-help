import Vue from 'vue'
import App from './App.vue'
import RouterTemplate from './components/RouteTemplate.vue';


import Vuex from 'vuex'
import VueRouter from 'vue-router'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'
s
Vue.use(Vuex);
Vue.use(VueRouter);

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {

    count: 0,

    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },

  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
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




// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>qwe11111111111111 <h1>router</h1></div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: RouterTemplate },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  store,
  router,

  render: h => h(App),
}).$mount('#app')
