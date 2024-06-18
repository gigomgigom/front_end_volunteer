const routes = [
    {
        path: "/Details/ServiceCenter/Notice",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/ServiceCenter/Notice'),
        redirect: "/Details/ServiceCenter/Notice/ViewNoticeList",
        children: [
            {
                path: "/Details/ServiceCenter/Notice/ViewNoticeList",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/ServiceCenter/Notice/ViewNoticeList.vue'),
            },
            {
                path: "/Details/ServiceCenter/Notice/ViewNoticeDetail",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/ServiceCenter/Notice/ViewNoticeDetail.vue'),
            },
            {
                path: "/Details/ServiceCenter/Notice/WriteNotice",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/ServiceCenter/Notice/WriteNotice.vue'),
            },
        ]
    },
    {
        path: "/Details/ServiceCenter/QNA",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/ServiceCenter/QnA'),
        redirect: "/Details/ServiceCenter/QNA/ViewQnaList",
        children: [
            {
                path: "/Details/ServiceCenter/QNA/ViewQnaList",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/ServiceCenter/QnA/ViewQnaList.vue'),
            },
            {
                path: "/Details/ServiceCenter/QNA/ViewQnaDetail",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/ServiceCenter/QnA/ViewQnaDetail.vue'),
            },
            {
                path: "/Details/ServiceCenter/QNA/WriteQna",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/ServiceCenter/QnA/WriteQna.vue'),
            },
        ]
    },
    {
        path: "/Details/ServiceCenter/FAQ",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/ServiceCenter/FAQ.vue'),
    }

];

export default routes;