const routes = [
    {
        path: "/Details/Participation/VolProgram",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    },
    {
        path: "/Details/Participation/VolTraining",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    },
    {
        path: "/Details/Participation/VolProposal",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    },
];

export default routes;