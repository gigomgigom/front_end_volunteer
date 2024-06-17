export default {
    namespaced: true,

    //상태 정의
    state: {
        categoryList: [
            {
                highClsCode: '0100',
                highClsName: '생활편의지원',
                lowClsList: [
                    {
                        lowClsCode: '0101',
                        lowClsName: '활동보조'
                    },
                    {
                        lowClsCode: '0102',
                        lowClsName: '이동지원'
                    },
                    {
                        lowClsCode: '0103',
                        lowClsName: '청결지도'
                    },
                    {
                        lowClsCode: '0104',
                        lowClsName: '급식지원'
                    },
                    {
                        lowClsCode: '0105',
                        lowClsName: '식사.반찬지원'
                    },
                    {
                        lowClsCode: '0199',
                        lowClsName: '기타'
                    },
                ]
            },
            {
                highClsCode: '0200',
                highClsName: '주거환경',
                lowClsList: [
                    {
                        lowClsCode: '0201',
                        lowClsName: '주거개선'
                    },
                    {
                        lowClsCode: '0202',
                        lowClsName: '마을공동체활동'
                    },
                    {
                        lowClsCode: '0299',
                        lowClsName: '기타'
                    },
                ]
            },
            {
                highClsCode: '0300',
                highClsName: '상담',
                lowClsList: [
                    {
                        lowClsCode: '0301',
                        lowClsName: '말벗.상담'
                    },
                    {
                        lowClsCode: '0302',
                        lowClsName: '전문상담'
                    },
                    {
                        lowClsCode: '0399',
                        lowClsName: '기타'
                    },
                ]
            },
            {
                highClsCode: '0400',
                highClsName: '교육',
                lowClsList: [
                    {
                        lowClsCode: '0401',
                        lowClsName: '방과후 교육'
                    },
                    {
                        lowClsCode: '0402',
                        lowClsName: '학습지도 교육'
                    },
                    {
                        lowClsCode: '0403',
                        lowClsName: '특수교육'
                    },
                    {
                        lowClsCode: '0404',
                        lowClsName: '평생교육'
                    },
                    {
                        lowClsCode: '0405',
                        lowClsName: '전문교육'
                    },
                    {
                        lowClsCode: '0406',
                        lowClsName: '진로체험지도'
                    },
                    {
                        lowClsCode: '0499',
                        lowClsName: '기타'
                    }
                ]
            },
            {
                highClsCode: '0500',
                highClsName: '보건의료',
                lowClsList: [
                    {
                        lowClsCode: '0501',
                        lowClsName: '간호.간병'
                    },
                    {
                        lowClsCode: '0502',
                        lowClsName: '의료지원'
                    },
                    {
                        lowClsCode: '0503',
                        lowClsName: '헌혈'
                    },
                    {
                        lowClsCode: '0599',
                        lowClsName: '기타'
                    }
                ]
            },
            {
                highClsCode: '0600',
                highClsName: '농어촌 봉사',
                lowClsList: [
                    {
                        lowClsCode: '0601',
                        lowClsName: '일손지원'
                    },
                    {
                        lowClsCode: '0699',
                        lowClsName: '기타'
                    }
                ]
            },
            {
                highClsCode: '0700',
                highClsName: '문화행사',
                lowClsList: [
                    {
                        lowClsCode: '0701',
                        lowClsName: '행사보조'
                    },
                    {
                        lowClsCode: '0702',
                        lowClsName: '공연활동'
                    },
                    {
                        lowClsCode: '0703',
                        lowClsName: '캠페인'
                    },
                    {
                        lowClsCode: '0704',
                        lowClsName: '관광안내'
                    },
                    {
                        lowClsCode: '0705',
                        lowClsName: '사진촬영'
                    },
                    {
                        lowClsCode: '0799',
                        lowClsName: '기타'
                    }
                ]
            },
            {
                highClsCode: '0800',
                highClsName: '환경보호',
                lowClsList: [
                    {
                        lowClsCode: '0801',
                        lowClsName: '환경정화'
                    },
                    {
                        lowClsCode: '0802',
                        lowClsName: '환경감시'
                    },
                    {
                        lowClsCode: '0899',
                        lowClsName: '기타'
                    }
                ]
            },
            {
                highClsCode: '0900',
                highClsName: '행정보조',
                lowClsList: [
                    {
                        lowClsCode: '0901',
                        lowClsName: '사무지원'
                    },
                    {
                        lowClsCode: '0902',
                        lowClsName: '업무지원'
                    },
                    {
                        lowClsCode: '0999',
                        lowClsName: '기타'
                    }
                ]
            },
            {
                highClsCode: '1000',
                highClsName: '안전.예방',
                lowClsList: [
                    {
                        lowClsCode: '1001',
                        lowClsName: '지역안전'
                    },
                    {
                        lowClsCode: '1002',
                        lowClsName: '교통안전'
                    },
                    {
                        lowClsCode: '1003',
                        lowClsName: '어린이 안전'
                    },
                    {
                        lowClsCode: '1004',
                        lowClsName: '청소년 안전'
                    },
                    {
                        lowClsCode: '1005',
                        lowClsName: '취약계층 안전'
                    },
                    {
                        lowClsCode: '1006',
                        lowClsName: '안전신고ㆍ활동'
                    },
                    {
                        lowClsCode: '1099',
                        lowClsName: '기타'
                    },
                ]
            },
            {
                highClsCode: '1100',
                highClsName: '공익.인권',
                lowClsList: [
                    {
                        lowClsCode: '1101',
                        lowClsName: '인권개선'
                    },
                    {
                        lowClsCode: '1102',
                        lowClsName: '공익보호'
                    },
                    {
                        lowClsCode: '1199',
                        lowClsName: '기타'
                    }
                ]
            },
            {
                highClsCode: '1200',
                highClsName: '재해ㆍ재난',
                lowClsList: [
                    {
                        lowClsCode: '1201',
                        lowClsName: '피해복구'
                    },
                    {
                        lowClsCode: '1202',
                        lowClsName: '긴급구조'
                    },
                    {
                        lowClsCode: '1203',
                        lowClsName: '예방접종지원'
                    },
                    {
                        lowClsCode: '1299',
                        lowClsName: '기타'
                    },
                ]
            },
            {
                highClsCode: '1300',
                highClsName: '국제협력.해외봉사',
                lowClsList: [
                    {
                        lowClsCode: '1301',
                        lowClsName: '해외봉사'
                    },
                    {
                        lowClsCode: '1302',
                        lowClsName: '국제행사단체지원'
                    },
                    {
                        lowClsCode: '1303',
                        lowClsName: '통.번역'
                    },
                    {
                        lowClsCode: '1399',
                        lowClsName: '기타'
                    },
                ]
            },
            {
                highClsCode: '1400',
                highClsName: '멘토링',
                lowClsList: [
                    {
                        lowClsCode: '1401',
                        lowClsName: '멘토링'
                    },
                    {
                        lowClsCode: '1402',
                        lowClsName: '학습'
                    },
                    {
                        lowClsCode: '1403',
                        lowClsName: '진로적성'
                    },
                    {
                        lowClsCode: '1404',
                        lowClsName: '취업'
                    },
                    {
                        lowClsCode: '1405',
                        lowClsName: '창업'
                    },
                    {
                        lowClsCode: '1406',
                        lowClsName: '기타'
                    }
                ]
            },
            {
                highClsCode: '1500',
                highClsName: '기타',
                lowClsList: [
                    {
                        lowClsCode: '1501',
                        lowClsName: '기타'
                    }
                ]
            },
            {
                highClsCode: '1700',
                highClsName: '자원봉사교육',
                lowClsList: [
                    {
                        lowClsCode: '1701',
                        lowClsName: '자원봉사기본교육'
                    },
                    {
                        lowClsCode: '1702',
                        lowClsName: '자원봉사보수교육'
                    },
                    {
                        lowClsCode: '1703',
                        lowClsName: '자원봉사전문교육'
                    },
                    {
                        lowClsCode: '1704',
                        lowClsName: '자원봉사기타교육.관리자교육'
                    },
                    {
                        lowClsCode: '1705',
                        lowClsName: '자원봉사기타교육.지도자교육'
                    },
                    {
                        lowClsCode: '1706',
                        lowClsName: '자원봉사기타교육.상담사교육'
                    },
                    {
                        lowClsCode: '1707',
                        lowClsName: '자원봉사기타교육.수요처교육'
                    },
                ]
            },
        ]
    },
    //Getter정의(상태 가져오기)
    getters: {
        getCategoryList: (state, getters, rootState, rootGetters) => {
            return state.categoryList;
        }
    },
    //Setter정의(상태 변경하기, 동기)
    mutations: {
        
    },
    //상태 변경하기, 비동기
    actions: {

    },
    //모듈 하위 상태모듈 정의
    modules: {

    }
}