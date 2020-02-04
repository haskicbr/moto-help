import Vue       from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

import CurrentMileage from "./../components/CurrentMileage"
import Mileage from "./../components/Mileage"
import Test    from "./../components/Test"
import Mobile  from "./../components/Mobile"

const routes = [
    {path: '/mileage', component: Mileage},
    {path: '/mobile', component: Mobile},
    {path: '/test', component: Test},
    {path: '/', component: CurrentMileage},
];

const router = new VueRouter({
    routes
});

export default router;
