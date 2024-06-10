const routes = [
    {
        path: "/Details/Information/Story",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    },
    {
        path: "/Details/Information/Review",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    },
    {
        path: "/Details/Information/Statistics",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    }
];

export default routes;