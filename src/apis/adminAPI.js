import axios from "axios";

//봉사프로그램 수정하기
function modifyVolProgram(formData) {
    return axios.put(
        '/Admin/update_vol_program',
        formData
    )
}

//봉사프로그램 신청인 목록 가져오기
function getVolParticipantList(programNo) {
    return axios.get(
        `/Admin/get_vol_participant_list?programNo=${programNo}`
    );
}

export default {
    modifyVolProgram,
    getVolParticipantList
}