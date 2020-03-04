// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'frontend/src/plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
};

export default new Vuetify(opts)