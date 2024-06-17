import { createRouter, createWebHistory } from 'vue-router';
import VolunteerGuide from './VolunteerGuide';
import Participation from './Participation';
import Information from './Information';
import ServiceCenter from './ServiceCenter';
import MyPage from './MyPage';
import Admin from './Admin';
import Member from './Member';

const routes = [
  //만약 단순히 'http://localhost:8090'으로만 요청했을 경우 메인페이지로 리다이렉트
  {
    path: '',
    redirect: '/Main'
  },
  //MainPage 라우트
  {
    path: '/Main',
    name: 'Main',
    component: () =>  import(/* webpackChunkName: "MainPage" */ '@/views/MainPage')
  },
  //DetailBody 라우트
  {
    path: '/Details',
    name: 'Details',
    component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/DetailBody.vue'),
    redirect: '/Details/VolunteerGuide',
    //1차 Router-View
    children: [
      //1. 봉사안내 탭 내부에 구성되어있는 뷰 컴포넌트들의 라우트
      {
        path: "/Details/VolunteerGuide",
        name: "VolunteerGuide",
        redirect: "/Details/VolunteerGuide/EduSrc",
        //2차 Router-View
        children: [
          ...VolunteerGuide,
        ],
      },
      //2. 봉사참여 탭 내부에 구성되어있는 뷰 컴포넌트들의 라우트
      {
        path: "/Details/Participation",
        name: "Participation",
        redirect: "/Details/Participation/VolProgram",
        //2차 Router-View
        children: [
          ...Participation,
        ],
      },
      //3. 봉사정보 탭 내부에 구성되어있는 뷰 컴포넌트들의 라우트
      {
        path: "/Details/Information",
        name: "Information",
        redirect: "/Details/Information/Story",
        //2차 Router-View
        children: [
          ...Information,
        ],
      },
      //4. 고객센터 탭 내부에 구성되어있는 뷰 컴포넌트들의 라우트
      {
        path: "/Details/ServiceCenter",
        name: "ServiceCenter",
        redirect: "/Details/ServiceCenter/Announcement",
        //2차 Router-View
        children: [
          ...ServiceCenter,
        ],
      },
      //5. 마이페이지 탭 내부에 구성되어있는 뷰 컴포넌트들의 라우트
      {
        path: "/Details/MyPage",
        name: "MyPage",
        redirect: "/Details/MyPage/Perform",
        //2차 Router-View
        children: [
          ...MyPage,
        ],
      },
      //6. 관리자 탭 내부에 구성되어있는 뷰 컴포넌트들의 라우트
      {
        path: "/Details/Admin",
        name: "Admin",
        redirect: "/Details/Admin/MngPrgm",
        //2차 Router-View
        children: [
          ...Admin,
        ],
      },
      //7. 회원 탭 내부에 구성되어있는 뷰 컴포넌트들의 라우트
      {
        path: "/Details/Member",
        name: "Member",
        redirect: "/Details/Member/SignIn",
        //2차 Router-View
        children: [
          ...Member,
        ],
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  //만약 페이지이동을 했을 때 스크롤 위치를 최상단으로 위치시키는 코드
  scrollBehavior(){
    return { top: 0 };
  }
})

export default router
