const routes = [
    {
        path: "/Details/Participation/VolProgram",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Participation/VolProgram'),
        redirect: "/Details/Participation/VolProgram/ViewVolProgramList",
        children: [
            {
                path: "/Details/Participation/VolProgram/ViewVolProgramList",
                component: () => import(/* webpackChunkName: "DetailBody" */ '@/views/Participation/VolProgram/ViewVolProgramList.vue')
            },
            {
                path: "/Details/Participation/VolProgram/ViewVolProgramDetail",
                component: () => import(/* webpackChunkName: "DetailBody" */ '@/views/Participation/VolProgram/ViewVolProgramDetail.vue')
            }
        ]
    },
    {
        path: "/Details/Participation/VolTraining",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Participation/VolTraining'),
        redirect : "/Details/Participation/VolTraining/ViewEduProgramList",
        children: [
            {
                path: "/Details/Participation/VolTraining/ViewEduProgramDetail",
                component: () => import(/* webpackChunkName: "DetailBody" */ '@/views/Participation/VolTraining/ViewEduProgramDetail.vue')
            },
            {
                path: "/Details/Participation/VolTraining/ViewEduProgramList",
                component: () => import(/* webpackChunkName: "DetailBody" */ '@/views/Participation/VolTraining/ViewEduProgramList.vue')
            },
        ]
    },
    {
        path: "/Details/Participation/VolProposal",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Participation/VolProposal'),
        redirect : "/Details/Participation/VolProposal/ViewVolProposalList",
        children : [
            {
                path: "/Details/Participation/VolProposal/ViewVolProposalList",
                component: () => import(/* webpackChunkName: "DetailBody" */ '@/views/Participation/VolProposal/ViewVolProposalList.vue')
            },
            {
                path: "/Details/Participation/VolProposal/ViewVolProposalDetail",
                component: () => import(/* webpackChunkName: "DetailBody" */ '@/views/Participation/VolProposal/ViewVolProposalDetail.vue')
            },
            {
                path: "/Details/Participation/VolProposal/WriteProposal",
                component: () => import(/* webpackChunkName: "DetailBody" */ '@/views/Participation/VolProposal/WriteProposal.vue')
            },
        ]
    },
];

export default routes;