import Vue       from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Service      from "../components/Service";
import Index        from "../components/Index";
import Login        from "../components/Login";
import ServiceTypes from "../components/ServiceTypes";
import TimeLine     from "../components/TimeLine";

const routes = [
    {path: '/service', component: Service},
    {
        path: '/service/add', component: Service,
        props: {
            visibleServiceForm: true
        }
    },

    {path: '/', component: Index},
    {path: '/login', component: Login},
    {path: '/service-types', component: ServiceTypes},
    {path: '/time-line', component: TimeLine},
];

const router = new VueRouter({
    routes
});

export default router;