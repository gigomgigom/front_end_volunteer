import axios from "axios";
import qs from "qs";

//봉사신청내역 가져오기
function getVolPtcpList(rqstData) {
    return axios.get(
        "/VolParticipate/get_vol_apply_detail_list",
        {params: rqstData}
    )
}
//봉사실적내역 가져오기
function getVolPerformList(rqstData) {
    return axios.get(
        '/VolParticipate/get_vol_perform_list',
        {params: rqstData}
    )
}
//봉사프로그램 신청하기
function applyVolProgram(rqstData) {
    return axios.post(
        '/VolParticipate/apply_vol_program',
        rqstData
    )
}
//봉사신청취소
function cancelVolAppl(programNo) {
    console.log(programNo)
    return axios.patch(
        `/VolParticipate/cancel_vol_application?programNo=${programNo}`
    )
}
//봉사 실적 승인요청하기
function requestVolPerform(formData) {
    return axios.patch(
        '/VolParticipate/request_vol_perform',
        formData
    )
}

export default{
    getVolPtcpList,
    requestVolPerform,
    cancelVolAppl,
    getVolPerformList,
    applyVolProgram
}