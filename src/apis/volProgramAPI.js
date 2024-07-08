import axios from "axios";

//관심 봉사 목록 가져오기
function getInterestVolList(pageNo) {
    return axios.get(
        `/VolProgram/get_interest_program_list?pageNo=${pageNo}`,
    )
}
export default {
    getInterestVolList
}