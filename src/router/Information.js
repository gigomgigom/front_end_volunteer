const routes = [
    {
        path: "/Details/Information/Interview",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Information/Interview'),
        redirect: "/Details/Information/Interview/ViewInterviewList",
        children: [
            {
                path: "/Details/Information/Interview/ViewInterviewList",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Information/Interview/ViewInterviewList.vue'),
            },
            {
                path: "/Details/Information/Interview/ViewInterviewDetail",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Information/Interview/ViewInterviewDetail.vue'),
            },
            {
                path: "/Details/Information/Interview/WriteInterview",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Information/Interview/WriteInterview.vue'),
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
            },
            {
                path: "/Details/Information/Review/ViewReviewDetail",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Information/Review/ViewReviewDetail.vue'),
            },
            {
                path: "/Details/Information/Review/WriteReview",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Information/Review/WriteReview.vue'),
            }
        ]
    },
    {
        path: "/Details/Information/Statistics",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/Information/Statistics'),
    }
];

export default routes;