const routes = [
    {
        path: "/Details/MyPage/Perform",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/Perform'),
        redirect: "/Details/MyPage/Perform/ViewPerformList",
        children: [
            {
                path: "/Details/MyPage/Perform/ViewPerformList",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/Perform/ViewPerformList.vue'),
            },
            {
                path: "/Details/MyPage/Perform/ViewPerformDetail",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/Perform/ViewPerformDetail.vue'),
            }
        ]
    },
    {
        path: "/Details/MyPage/VolApplDetails",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/VolApplDetails'),
        redirect: "/Details/MyPage/VolApplDetails/ViewApplList",
        children: [
            {
                path: "/Details/MyPage/VolApplDetails/ViewApplList",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/VolApplDetails/ViewApplList.vue'),
            },
            {
                path: "/Details/MyPage/VolApplDetails/ViewApplDetail",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/VolApplDetails/ViewApplDetail.vue'),
            }
        ]
    },
    {
        path: "/Details/MyPage/Interest",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/Interest'),
        redirect: "/Details/MyPage/Interest/ViewInterestVolList",
        children: [
            {
                path: "/Details/MyPage/Interest/ViewInterestVolList",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/Interest/ViewInterestVolList.vue'),
            },
            {
                path: "/Details/MyPage/Interest/ViewVolDetail",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/Interest/ViewVolDetail.vue'),
            }
        ]
    },
    {
        path: "/Details/MyPage/EduApplDetails",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/EduApplDetails'),
        redirect: "/Details/MyPage/EduApplDetails/ViewApplList",
        children: [
            {
                path: "/Details/MyPage/EduApplDetails/ViewApplList",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/EduApplDetails/ViewApplList.vue'),
            },
            {
                path: "/Details/MyPage/EduApplDetails/ViewApplDetail",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/EduApplDetails/ViewApplDetail.vue'),
            }
        ]
    },
    {
        path: "/Details/MyPage/ReviewDetails",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/ReviewDetails'),
        redirect: "/Details/MyPage/ReviewDetails/ViewReviewList",
        children: [
            {
                path: "/Details/MyPage/ReviewDetails/ViewReviewList",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/ReviewDetails/ViewReviewList.vue'),
            },
            {
                path: "/Details/MyPage/ReviewDetails/ViewReviewDetail",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/ReviewDetails/ViewReviewDetail.vue'),
            },
            {
                path: "/Details/MyPage/ReviewDetails/WriteReview",
                component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/ReviewDetails/WriteReview.vue'),
            }
        ]
    },
    {
        path: "/Details/MyPage/AccInfo",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/AccInfo.vue'),
    },
    {
        path: "/Details/MyPage/ChgPassword",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/ChgPassword.vue'),
    },
    {
        path: "/Details/MyPage/Withdraw",
        component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/MyPage/Withdraw.vue'),
    },
];

export default routes;