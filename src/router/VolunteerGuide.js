const routes = [
    {
        path: "/Details/VolunteerGuide/Outline",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    },
    {
        path: "/Details/VolunteerGuide/HowToUse",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/HowToUse.vue'),
    },
    {
        path: "/Details/VolunteerGuide/EduSrc",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    },
    {
        path: "/Details/VolunteerGuide/Insurance",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    },
    {
        path: "/Details/VolunteerGuide/Introduce",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    },
    {
        path: "/Details/VolunteerGuide/Direction",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    },
    {
        path: "/Details/VolunteerGuide/Brand",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    },
    {
        path: "/Details/VolunteerGuide/RegionalCenters",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    }
];

export default routes;