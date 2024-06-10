const routes = [
    {
        path: "/Details/Member/SignIn",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    },
    {
        path: "/Details/Member/FindID",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    },
    {
        path: "/Details/Member/FindPW",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    },
    {
        path: "/Details/Member/SignUp",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    }
];

export default routes;