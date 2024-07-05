import axios from "axios";
import qs from "qs";

//회원가입
function join(member) {
    return axios.post(
        "/Auth/join",
        member
    );
}
//로그인
function login(member) {
    return axios.post(
        "/Auth/login",
        qs.stringify(member)
    );
}


export default {
    join,
    login
}