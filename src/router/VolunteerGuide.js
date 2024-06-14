const routes = [
    {
        path: "/Details/VolunteerGuide/Outline",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    },
    {
        path: "/Details/VolunteerGuide/HowToUse",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/Outline.vue'),
    },
    {
        path: "/Details/VolunteerGuide/EduSrc",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/EducatingSource.vue'),
    },
    {
        path: "/Details/VolunteerGuide/Insurance",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/Insurance.vue'),
    },
    {
        path: "/Details/VolunteerGuide/Introduce",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/Introduce.vue'),
    },
    {
        path: "/Details/VolunteerGuide/Direction",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/Direction.vue'),
    },
    {
        path: "/Details/VolunteerGuide/Brand",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/Brand.vue'),
    },
    {
        path: "/Details/VolunteerGuide/RegionalCenters",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/VolunteerGuide/RegionalCenters'),
    }
];

export default routes;