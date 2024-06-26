import axios from "axios";

//공공데이터포털에 접근하는 Promise객체를 리턴하는 함수들의 목록이다.
const APIKey = process.env.VUE_APP_PORTAL_API_KEY;

//봉사프로그램 목록을 검색 조건에 맞춰 가져온다.
function getVolProgramList(searchIndex) {
    searchIndex.serviceKey = APIKey;
    const data = JSON.parse(JSON.stringify(searchIndex));
    return axios.get(
        "https://cors-anywhere.herokuapp.com/http://openapi.1365.go.kr/openapi/service/rest/VolunteerPartcptnService/getVltrSearchWordList",
        data
    );
}

export default ({
    getVolProgramList
});