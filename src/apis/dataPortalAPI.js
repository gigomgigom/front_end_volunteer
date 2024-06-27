import axios from "axios";
import qs from "qs";

//공공데이터포털에 접근하는 Promise객체를 리턴하는 함수들의 목록이다.
const APIKey = process.env.VUE_APP_PORTAL_API_KEY;

//봉사프로그램 목록을 검색 조건에 맞춰 가져온다.
function getVolProgramList(searchIndex) {
    console.log(searchIndex);
    return axios.get(
        `https://cors-anywhere.herokuapp.com/http://openapi.1365.go.kr/openapi/service/rest/VolunteerPartcptnService/getVltrSearchWordList?pageNo=${searchIndex.pageNo}`,
        APIKey
    );
}
//봉사 프로그램 상세 내용을 조회한다.
function getVolProgramDetail(progrmRegistNo) {
    let data = {
        serviceKey: APIKey
    };
    const requestData = JSON.parse(JSON.stringify(data));

    return axios.get(
        `https://cors-anywhere.herokuapp.com/http://openapi.1365.go.kr/openapi/service/rest/VolunteerPartcptnService/getVltrPartcptnItem?progrmRegistNo=${progrmRegistNo}`,
        requestData
    );
}

export default ({
    getVolProgramList,
    getVolProgramDetail
});