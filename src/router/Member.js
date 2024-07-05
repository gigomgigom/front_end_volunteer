const routes = [
    {
        path: "/Details/Member/SignIn",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Authentication/SignIn.vue'),
        meta: { title: '회원 > 로그인' }
    },
    {
        path: "/Details/Member/FindID",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Authentication/FindID.vue'),
        meta: { title: '회원 > 아이디 찾기' }
    },
    {
        path: "/Details/Member/FindPW",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Authentication/FindPW.vue'),
        meta: { title: '회원 > 비밀번호 찾기' }
    },
    {
        path: "/Details/Member/SignUp",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Authentication/SignUp.vue'),
        meta: { title: '회원 > 회원가입' }
    }
];

export default routes;