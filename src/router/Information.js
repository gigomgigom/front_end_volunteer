const routes = [
    {
        path: "/Details/Information/Interview",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Information/Interview'),
        redirect: "/Details/Information/Interview/ViewInterviewList",
        children: [
            {
                path: "/Details/Information/Interview/ViewInterviewList",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Information/Interview/ViewInterviewList.vue'),
                meta: { title: '봉사정보 > 자원봉사 이야기' }
            },
            {
                path: "/Details/Information/Interview/ViewInterviewDetail",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Information/Interview/ViewInterviewDetail.vue'),
                meta: { title: '봉사정보 > 자원봉사 이야기' }
            },
            {
                path: "/Details/Information/Interview/WriteInterview",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Information/Interview/WriteInterview.vue'),
                meta: { title: '봉사정보 > 자원봉사 이야기' }
            }
        ]
    },
    {
        path: "/Details/Information/Review",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Information/Review'),
        redirect: "/Details/Information/Review/ViewReviewList",
        children: [
            {
                path: "/Details/Information/Review/ViewReviewList",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Information/Review/ViewReviewList.vue'),
                meta: { title: '봉사정보 > 자원봉사 후기' }
            },
            {
                path: "/Details/Information/Review/ViewReviewDetail",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Information/Review/ViewReviewDetail.vue'),
                meta: { title: '봉사정보 > 자원봉사 후기' }
            },
            {
                path: "/Details/Information/Review/WriteReview",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Information/Review/WriteReview.vue'),
                meta: { title: '봉사정보 > 자원봉사 후기' }
            }
        ]
    },
    {
        path: "/Details/Information/Statistics",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Information/Statistics'),
        meta: { title: '봉사정보 > 자원봉사 통계' }
    }
];

export default routes;