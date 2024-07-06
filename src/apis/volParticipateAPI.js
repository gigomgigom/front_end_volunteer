import axios from "axios";
import qs from "qs";

//봉사신청내역 가져오기
function getVolPtcpList(rqstData) {
    return axios.get(
        "/VolParticipate/get_vol_apply_detail_list",
        {params: rqstData}
    )
}

export default{
    getVolPtcpList,
}