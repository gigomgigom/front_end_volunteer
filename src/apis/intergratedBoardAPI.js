import axios from "axios";

//게시판 리스트 가져오기
function getBoardList(rqstData) {
    return axios.get(
        "/Board/get_board_list",
        {params: rqstData}
    )
}
//게시글 쓰기
function createBoard(rqstData){
    return axios.post(
        "/Board/create_board",
        rqstData
    )
}
//관리자 답변 달기 


//관리자 답변 조회


//회원 정보 가져오기
function getMemberInfo(){
    return axios.get(
        "/Member/find_info"
    )
}
//게시글 상세조회
function getBoardDetail(rqstData){
    return axios.get(
        "/Board/read_board/" + rqstData
    )
}
//이전 게시글, 다음 게시글 가져오기
function getSequenceBoard(rqstData){
    return axios.get(
        "/Board/get_previous_next_board",
        {params: rqstData}
    )
}

export default{
    getBoardList,
    getMemberInfo,
    createBoard,
    getBoardDetail,
    getSequenceBoard
}