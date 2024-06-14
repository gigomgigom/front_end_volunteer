const routes = [
    {
        path: "/Details/Admin/AddVolProgram",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Admin/AddVolProgram'),
    },
    {
        path: "/Details/Admin/AddEduProgram",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Admin/AddEduProgram'),
    },
    {
        path: "/Details/Admin/MngVolProgram",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Admin/MngVolProgram'),
    },
    {
        path: "/Details/Admin/MngEduProgram",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Admin/MngEduProgram'),
    },
    {
        path: "/Details/Admin/MngMember",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Admin/MngMember'),
    }
];

export default routes;