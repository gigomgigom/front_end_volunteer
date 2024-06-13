const routes = [
    {
        path: "/Details/Participation/VolProgram",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Participation/VolProgram'),
        redirect: "/Details/Participation/VolProgram/VolProgram1",
        children: [
            {
                path: "/Details/Participation/VolProgram/VolProgram1",
                component: () => import(/* webpackChunkName: "DetailBody" */ '@/views/Participation/VolProgram/ViewVolProgramList.vue')
            },
            {
                path: "/Details/Participation/VolProgram/VolProgram2",
                component: () => import(/* webpackChunkName: "DetailBody" */ '@/views/Participation/VolProgram/ViewVolProgramDetail.vue')
            }
        ]
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