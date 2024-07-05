//Store 생성 및 내보내기
export default {
    namespaced: true,

    //상태 정의
    state: {
        isAdmin: 0,
        isAuthenticated: 0,

        //현재 페이지 인덱스 정보
        menuIndex: {
            firstFloor: 0,
            secondFloor: 0,
            thirdFloor: 0,
        },

        //페이지 정보를 담은 객체
        //배열 객체
        menuList: [
            {
                //봉사 안내
                firstMenuNo: 0,
                firstName: '봉사 안내',
                secondFloor: [
                    {
                        secondMenuNo: 0,
                        secondName: '자원봉사 안내',
                        url: '',
                        thirdFloor: [
                            {
                                thirdMenuNo: 0,
                                thirdName: '자원봉사 개요',
                                url: '/Details/VolunteerGuide/Outline',
                            },
                            {
                                thirdMenuNo: 1,
                                thirdName: '이용방법',
                                url: '/Details/VolunteerGuide/HowToUse',
                            },
                            {
                                thirdMenuNo: 2,
                                thirdName: '교육자료',
                                url: '/Details/VolunteerGuide/EduSrc',
                            },
                            {
                                thirdMenuNo: 3,
                                thirdName: '종합보험',
                                url: '/Details/VolunteerGuide/Insurance',
                            }
                        ]
                    },
                    {
                        secondMenuNo: 1,
                        secondName: 'Social Pulse',
                        url: '',
                        thirdFloor: [
                            {
                                thirdMenuNo: 0,
                                thirdName: '소개',
                                url: '/Details/VolunteerGuide/Introduce',
                            },
                            {
                                thirdMenuNo: 1,
                                thirdName: '찾아오는 길',
                                url: '/Details/VolunteerGuide/Direction',
                            },
                            {
                                thirdMenuNo: 2,
                                thirdName: '브랜드 소개',
                                url: '/Details/VolunteerGuide/Brand',
                            }
                        ]
                    },
                    {
                        secondMenuNo: 2,
                        secondName: '지역별봉사센터',
                        url: '/Details/VolunteerGuide/RegionalCenters',
                        thirdFloor: []
                    },
                ]
            },
            {
                //봉사 참여
                firstMenuNo: 1,
                firstName: '봉사 참여',
                secondFloor: [
                    {
                        secondMenuNo: 0,
                        secondName: '개인봉사',
                        url: '/Details/Participation/VolProgram',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 1,
                        secondName: '자원봉사 교육',
                        url: '/Details/Participation/VolTraining',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 2,
                        secondName: '희망봉사 제안',
                        url: '/Details/Participation/VolProposal',
                        thirdFloor: []
                    }
                ]
            },
            {
                //봉사 정보
                firstMenuNo: 2,
                firstName: '봉사 정보',
                secondFloor: [
                    {
                        secondMenuNo: 0,
                        secondName: '자원봉사 이야기',
                        url: '/Details/Information/Interview',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 1,
                        secondName: '자원봉사 후기',
                        url: '/Details/Information/Review',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 2,
                        secondName: '자원봉사 통계',
                        url: '/Details/Information/Statistics',
                        thirdFloor: []
                    }
                ]
            },
            {
                //고객 센터
                firstMenuNo: 3,
                firstName: '고객센터',
                secondFloor: [
                    {
                        secondMenuNo: 0,
                        secondName: '공지사항',
                        url: '/Details/ServiceCenter/Notice',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 1,
                        secondName: '질문과 답변',
                        url: '/Details/ServiceCenter/QNA',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 2,
                        secondName: '자주하는 질문',
                        url: '/Details/ServiceCenter/FAQ',
                        thirdFloor: []
                    }
                ]
            },
            {
                //나의 자원봉사
                firstMenuNo: 4,
                firstName: '나의 자원봉사',
                secondFloor: [
                    {
                        secondMenuNo: 0,
                        secondName: '내 봉사정보',
                        url: '',
                        thirdFloor: [
                            {
                                thirdMenuNo: 0,
                                thirdName: '봉사 실적',
                                url: '/Details/MyPage/Perform',
                            },
                            {
                                thirdMenuNo: 1,
                                thirdName: '봉사 신청내역',
                                url: '/Details/MyPage/VolApplDetails',
                            }
                        ]
                    },
                    {
                        secondMenuNo: 1,
                        secondName: '관심봉사',
                        url: '/Details/MyPage/Interest',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 2,
                        secondName: '교육신청내역',
                        url: '/Details/MyPage/EduApplDetails',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 3,
                        secondName: '작성한 후기',
                        url: '/Details/MyPage/ReviewDetails',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 4,
                        secondName: '회원정보',
                        url: '',
                        thirdFloor: [
                            {
                                thirdMenuNo: 0,
                                thirdName: '기본정보',
                                url: '/Details/MyPage/AccInfo',
                            },
                            {
                                thirdMenuNo: 1,
                                thirdName: '비밀번호 변경',
                                url: '/Details/MyPage/ChgPassword',
                            },
                            {
                                thirdMenuNo: 2,
                                thirdName: '회원탈퇴',
                                url: '/Details/MyPage/Withdraw',
                            },
                        ]
                    },
                ]
            },
            {
                //회원 메뉴(로그인, 회원가입)
                firstMenuNo: 5,
                firstName: '관리자',
                secondFloor: [
                    {
                        secondMenuNo: 0,
                        secondName: '봉사 프로그램 관리',
                        url: '/Details/Admin/MngVolProgram',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 1,
                        secondName: '봉사 프로그램 추가',
                        url: '/Details/Admin/AddVolProgram',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 2,
                        secondName: '교육 프로그램 관리',
                        url: '/Details/Admin/MngEduProgram',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 3,
                        secondName: '교육 프로그램 추가',
                        url: '/Details/Admin/AddEduProgram',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 4,
                        secondName: '회원 관리',
                        url: '/Details/Admin/MngMember',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 5,
                        secondName: '승인 관리',
                        url: '/Details/Admin/Approve',
                        thirdFloor: []
                    }
                ]
            },
            {
                //회원 메뉴(로그인, 회원가입)
                firstMenuNo: 6,
                firstName: '회원',
                secondFloor: [
                    {
                        secondMenuNo: 0,
                        secondName: '로그인',
                        url: '/Details/Member/SignIn',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 1,
                        secondName: '아이디 찾기',
                        url: '/Details/Member/FindID',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 2,
                        secondName: '비밀번호 찾기',
                        url: '/Details/Member/FindPW',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 3,
                        secondName: '회원가입',
                        url: '/Details/Member/SignUp',
                        thirdFloor: []
                    },
                ]
            }
        ]
    },
    //Getter정의(상태 가져오기)
    getters: {

        getMenuIndex: (state, getters, rootState, rootGetters) => {
            return state.menuIndex;
        },

        getMenuList: (state, getters, rootState, rootGetters) => {
            return state.menuList;
        }

    },
    //Setter정의(상태 변경하기, 동기)
    mutations: {
        setMenuIndex: (state, payload) => {
            state.menuIndex.firstFloor = payload.firstFloor;
            state.menuIndex.secondFloor = payload.secondFloor;
            state.menuIndex.thirdFloor = payload.thirdFloor;
        }
    },
    //상태 변경하기, 비동기
    actions: {

    },
    //모듈 하위 상태모듈 정의
    modules: {

    }
}