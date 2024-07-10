import axios from "axios";

//봉사프로그램 신청인 목록 가져오기
function getVolParticipantList(programNo) {
    return axios.get(
        `/Admin/get_vol_participant_list?programNo=${programNo}`
    );
}

export default {
    getVolParticipantList
}