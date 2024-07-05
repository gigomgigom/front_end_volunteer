const routes = [
    {
        path: "/Details/Admin/AddVolProgram",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Admin/AddVolProgram'),
        meta: { title: '관리자 > 봉사프로그램 추가' }
    },
    {
        path: "/Details/Admin/AddEduProgram",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Admin/AddEduProgram'),
        meta: { title: '관리자 > 교육프로그램 추가' }
    },
    {
        path: "/Details/Admin/MngVolProgram",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Admin/MngVolProgram'),
        meta: { title: '관리자 > 봉사프로그램 관리' }
    },
    {
        path: "/Details/Admin/MngEduProgram",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Admin/MngEduProgram'),
        meta: { title: '관리자 > 교육프로그램 관리' }
    },
    {
        path: "/Details/Admin/MngMember",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Admin/MngMember'),
        meta: { title: '관리자 > 회원관리' }
    },
    {
        path: "/Details/Admin/Approve",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Admin/Approve'),
        meta: { title: '관리자 > 실적승인' }
    }
];
export default routes;