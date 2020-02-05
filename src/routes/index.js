import Vue       from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

import CurrentMileage from "./../components/CurrentMileage"
import Mileage from "./../components/Mileage"
import Index from "./../components/Index"
import Test from "./../components/Test"
import Mobile from "./../components/Mobile"
import MileageTypes from "./../components/MileageTypes"

const routes = [
    {path: '/mileage', component: Mileage},
    {
        path: '/mileage/add', component: Mileage,
        props: {
            visibleMileageForm: true
        }
    },
    {path: '/mobile', component: Mobile},
    {path: '/test', component: Test},
    {path: '/', component: Index},
    {path: '/mileage-types', component: MileageTypes},
];

const router = new VueRouter({
    routes
});

export default router;
