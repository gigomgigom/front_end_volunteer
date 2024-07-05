import axios from "axios";

//프로젝트 내 모든 Axios사용에 공통적으로 적용되는 설정 정의

//기본 요청 경로 설정
axios.defaults.baseURL = "http://localhost";

//AccessToken 설정
//로그인 성공 시 호출됨
function addAuthHeader(accessToken) {
    //common 객체에 동적 속성으로 Authorization을 추가
    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
    //headers의 common 내부에 Authorization 속성이 추가된것을 콘솔에 확인
    //console.log(axios.defaults.headers.common);
}

//공통 요청 헤더에서 Authorization 헤더 삭제
//로그아웃시 호출
function removeAuthHeader() {
    //common 객체의 Authorization 속성을 삭제한다.
    delete axios.defaults.headers.common["Authorization"];
}

/*
//로그인 상태 유지하기 기능 도입시 사용가능
//사용안하는중
//로컬 스토리지에 AccessToken을 저장하는 코드
function saveAccessToken(accessToken) {
    //확인방법: 브라우저-개발자도구-application-localstorage
    localStorage.setItem("accessToken", accessToken);
}
//사용안하는중
//로컬 스토리지에 있는 AccessToken을 읽기
function readAccessToken() {
    const accessToken = localStorage.getItem("accessToken") || "";
    return accessToken;
}
//사용안하는 중
//로컬 스토리지에 있는 AccessToken을 읽고 공통 헤더에 추가
function loadAccessToken() {
    //로컬 스토리지에 저장되어있는 AccessToken을 가져온다.(스토리지에 존재하지않을수도 있음)
    const accessToken = localStorage.getItem("accessToken") || ""; //앞의 값이 초기값을 갖는 구조가 된다면 뒤의 값으로 대체해서 들어가게된다.
    //로컬스토리지에 accessToken이 존재한다면
    if(accessToken != "") {
        //헤더에 Authorization(accessToken)을 추가
        addAuthHeader(accessToken);
    } else {
        console.log("AccessToken doesn't exist at File System");
    }
}
*/

export default {
    addAuthHeader,
    removeAuthHeader
}