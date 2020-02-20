
import {SystemMutationTypes} from "./store/mutations/types";

import Vue from 'vue'
import App from './App.vue'

import store from "./store";
import router from "./routes";

Vue.config.productionTip = false;

import vuetify from './plugins/vuetify' // path to vuetify export


new Vue({
    vuetify,
    store,
    router,
    beforeCreate() {
        this.$store.commit(SystemMutationTypes.INITIAL_STORE);
    },

    render: h => h(App),
}).$mount('#app');
