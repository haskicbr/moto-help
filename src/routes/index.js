import Vue       from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

import Mileage from "./../components/Mileage"
import Test    from "./../components/Test"
import Mobile  from "./../components/Mobile"

const routes = [
    {path: '/mileage', component: Mileage},
    {path: '/mobile', component: Mobile},
    {path: '/test', component: Test},
];

const router = new VueRouter({
    routes
});

export default router;
