import axios from "axios";
import qs from "qs";

//봉사신청내역 가져오기
function getVolPtcpList(rqstData) {
    return axios.get(
        "/VolParticipate/get_vol_apply_detail_list",
        {params: rqstData}
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
}