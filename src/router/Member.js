const routes = [
    {
        path: "/Details/Member/SignIn",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Authentication/SignIn.vue'),
    },
    {
        path: "/Details/Member/FindID",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Authentication/FindID.vue'),
    },
    {
        path: "/Details/Member/FindPW",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Authentication/FindPW.vue'),
    },
    {
        path: "/Details/Member/SignUp",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Authentication/SignUp.vue'),
    }
];

export default routes;