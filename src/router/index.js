import { createRouter, createWebHistory } from 'vue-router';
import VolunteerGuide from './VolunteerGuide';
import Participation from './Participation';
import Information from './Information';
import ServiceCenter from './ServiceCenter';
import MyPage from './MyPage';
import Admin from './Admin';
import Member from './Member';

const routes = [
  {
    path: '/Main',
    name: 'Main',
    component: () =>  import(/* webpackChunkName: "MainPage" */ '@/views/MainPage.vue')
  },
  {
    path: '/Details',
    name: 'Details',
    component: () =>  import(/* webpackChunkName: "DetailBody" */ '@/views/DetailBody.vue'),
    redirect: '/Details/VolunteerGuide',
    children: [
      {
        path: "/Details/VolunteerGuide",
        name: "VolunteerGuide",
        redirect: "/Details/VolunteerGuide/EduSrc",
        children: [
          ...VolunteerGuide,
        ],
      },
      {
        path: "/Details/Participation",
        name: "Participation",
        redirect: "/Details/Participation/VolProgram",
        children: [
          ...Participation,
        ],
      },
      {
        path: "/Details/Information",
        name: "Information",
        redirect: "/Details/Information/Story",
        children: [
          ...Information,
        ],
      },
      {
        path: "/Details/ServiceCenter",
        name: "ServiceCenter",
        redirect: "/Details/ServiceCenter/Announcement",
        children: [
          ...ServiceCenter,
        ],
      },
      {
        path: "/Details/MyPage",
        name: "MyPage",
        redirect: "/Details/MyPage/Perform",
        children: [
          ...MyPage,
        ],
      },
      {
        path: "/Details/Admin",
        name: "Admin",
        redirect: "/Details/Admin/MngPrgm",
        children: [
          ...Admin,
        ],
      },
      {
        path: "/Details/Member",
        name: "Member",
        redirect: "/Details/Member/SignIn",
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
  scrollBehavior(){
    return { top: 0 };
  }
})

export default router
