import axios from "axios";

//공지사항 리스트
function getNoticeList(){
    return axios.get(
        '/recent-noticelist-main'
    )
}

export default{
    getNoticeList
}