import VueMaterial from 'vue-material'
import {SystemMutationTypes} from "./store/mutations/types";

import Vue from 'vue'
import App from './App.vue'

import store from "./store";
import router from "./routes";

Vue.config.productionTip = false;



Vue.use(
    VueMaterial
);

new Vue({
    store,
    router,

    beforeCreate() {
        this.$store.commit(SystemMutationTypes.INITIAL_STORE);
    },

    render: h => h(App),
}).$mount('#app');
