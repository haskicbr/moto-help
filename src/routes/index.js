import Vue       from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Service      from "../components/pages/Service";
import Index        from "../components/pages/Index";
import Login        from "../components/pages/Login";
import ServiceTypes from "../components/pages/ServiceTypes";
import TimeLine     from "../components/TimeLine";
import Settings     from "../components/pages/Settings";
import Transport    from "../components/pages/Transport";

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
    /*{path: '/time-line', component: TimeLine},*/
    {path: '/settings', component: Settings},
    {path: '/transport', component: Transport},
];

const router = new VueRouter({
    routes
});

export default router;
