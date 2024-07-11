import axios from "axios";

//봉사프로그램 추가하기
function addVolProgram(formData) {
    return axios.post(
        '/Admin/create_vol_program',
        formData
    )
}
//봉사프로그램 수정하기
function modifyVolProgram(formData) {
    return axios.put(
        '/Admin/update_vol_program',
        formData
    )
}
//봉사프로그램 삭제하기
function deleteVolProgram(programNo) {
    return axios.patch(
        `/Admin/delete_vol_program/${programNo}`
    )
}
//봉사프로그램 신청인 목록 가져오기
function getVolParticipantList(programNo) {
    return axios.get(
        `/Admin/get_vol_participant_list?programNo=${programNo}`
    );
}
//교육 프로그램 추가하기
function addEduProgram(formData) {
    return axios.post(
        '/Admin/create_edu_program',
        formData
    )
}
//교육 프로그램 수정하기
function modifyEduProgram(formData) {
    return axios.put(
        '/Admin/update_edu_program',
        formData
    );
}
//교육 프로그램 삭제하기
function deleteEduProgram(programNo) {
    return axios.patch(
        `/Admin/delete_edu_program/${programNo}`
    )
}
//교육 프로그램 신청인 목록 가져오기
function getEduParticipantList(programNo) {
    return axios.get(
        `/Admin/get_edu_participant_list?programNo=${programNo}`
    )
}
export default {
    addVolProgram,
    modifyVolProgram,
    deleteVolProgram,
    getVolParticipantList,
    addEduProgram,
    modifyEduProgram,
    deleteEduProgram,
    getEduParticipantList
}