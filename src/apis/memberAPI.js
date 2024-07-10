import axios from "axios";

//회원정보 찾기
function getMemberInfo() {
    return axios.get(
        '/Member/get_member_info'
    );
}

//아이디 찾기
function findId(data) {
    /* 매개변수 데이터
        {
            memberName: '이름',
            email: '이메일'
        }
    */
    return axios.get(
        '/Member/find_Id',
        {params: data}
    );
}

export default {
    getMemberInfo,
    findId
    //내보내기할 함수(리턴값은 promise)
}