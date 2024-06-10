const routes = [
    {
        path: "/Details/Admin/MngPrgm",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    },
];

export default routes;