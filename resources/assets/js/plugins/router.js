import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/routes';

Vue.use(VueRouter);

const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes, // short for `routes: routes`
});

export default router;
