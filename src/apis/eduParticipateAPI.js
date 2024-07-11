import axios from "axios";

//교육 신청하기
function applyEduProgram(programNo) {
    return axios.get(
        `/EduParticipate/apply_edu_program?programNo=${programNo}`
    )
}
//교육 취소하기
function cancelEduProgram(programNo) {
    return axios.patch(
        `/EduParticipate/cancel_edu_program_appl?programNo=${programNo}`
    )
}
//교육 신청내역 조회하기
function getEduApplList(pageNo) {
    return axios.get(
        `/EduParticipate/get_edu_appl_list?pageNo=${pageNo}`
    )
}
export default {
    applyEduProgram,
    cancelEduProgram,
    getEduApplList
}