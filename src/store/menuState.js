export default {
    namespaced: true,

    //루트 상태 정의
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
        menuList: [
            {
                //봉사 안내
                firstMenuNo: 0,
                firstName: '봉사 안내',
                secondFloor: [
                    {
                        secondMenuNo: 0,
                        secondName: '자원봉사 안내',
                        thirdFloor: [
                            {
                                thirdMenuNo: 0,
                                thirdName: '자원봉사 개요'
                            },
                            {
                                thirdMenuNo: 1,
                                thirdName: '이용방법'
                            },
                            {
                                thirdMenuNo: 2,
                                thirdName: '교육자료'
                            },
                            {
                                thirdMenuNo: 3,
                                thirdName: '종합보험'
                            }
                        ]
                    },
                    {
                        secondMenuNo: 1,
                        secondName: 'Social Pulse',
                        thirdFloor: [
                            {
                                thirdMenuNo: 0,
                                thirdName: '소개'
                            },
                            {
                                thirdMenuNo: 1,
                                thirdName: '찾아오는 길'
                            },
                            {
                                thirdMenuNo: 2,
                                thirdName: '브랜드 소개'
                            }
                        ]
                    },
                    {
                        secondMenuNo: 2,
                        secondName: '지역별봉사센터',
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
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 1,
                        secondName: '자원봉사 교육',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 2,
                        secondName: '희망봉사 제안',
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
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 1,
                        secondName: '자원봉사 후기',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 2,
                        secondName: '자원봉사 통계',
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
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 1,
                        secondName: '질문과 답변',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 2,
                        secondName: '자주하는 질문',
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
                        thirdFloor: [
                            {
                                thirdMenuNo: 0,
                                thirdName: '봉사 실적'
                            },
                            {
                                thirdMenuNo: 1,
                                thirdName: '봉사 신청내역'
                            }
                        ]
                    },
                    {
                        secondMenuNo: 1,
                        secondName: '관심봉사',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 2,
                        secondName: '교육신청내역',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 3,
                        secondName: '작성한 후기',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 4,
                        secondName: '회원정보',
                        thirdFloor: [
                            {
                                thirdMenuNo: 0,
                                thirdName: '기본정보'
                            },
                            {
                                thirdMenuNo: 1,
                                thirdName: '비밀번호 변경'
                            },
                            {
                                thirdMenuNo: 2,
                                thirdName: '회원탈퇴'
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
                        secondName: '프로그램 관리',
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
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 1,
                        secondName: '아이디 찾기',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 2,
                        secondName: '비밀번호 찾기',
                        thirdFloor: []
                    },
                    {
                        secondMenuNo: 3,
                        secondName: '회원가입',
                        thirdFloor: []
                    },
                ]
            }
        ]
    },
    //Getter정의(루트 상태 가져오기)
    getters: {

        getMenuIndex: (state, getters, rootState, rootGetters) => {
            return state.firstFloor;
        },

        getMenuList: (state, getters, rootState, rootGetters) => {
            return state.menuList;
        }

    },
    //Setter정의(루트 상태 변경하기, 동기)
    mutations: {
        setMenuIndex: (state, payload) => {
            console.log('변경시작');
            state.menuIndex.firstFloor = payload.firstFloor;
            state.menuIndex.secondFloor = payload.secondFloor;
            state.menuIndex.thirdFloor = payload.thirdFloor;
        }
    },
    //루트 상태 변경하기, 비동기
    actions: {

    },
    //루트 모듈 하위 상태모듈 정의
    modules: {

    }
}