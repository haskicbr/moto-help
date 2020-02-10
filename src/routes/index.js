import Vue       from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);


import Service from "./../components/Service"
import Index from "./../components/Index"
import Test from "./../components/Test"
import Mobile from "./../components/Mobile"
import ServiceTypes from "./../components/ServiceTypes"

const routes = [
    {path: '/service', component: Service},
    {
        path: '/service/add', component: Service,
        props: {
            visibleServiceForm: true
        }
    },
    {path: '/mobile', component: Mobile},
    {path: '/test', component: Test},
    {path: '/', component: Index},
    {path: '/service-types', component: ServiceTypes},
];

const router = new VueRouter({
    routes
});

export default router;
