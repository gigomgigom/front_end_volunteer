import axios from "axios";

//교육 프로그램 목록 가져오기
function getEduProgramList(searchIndex) {
    return axios.get(
        '/EduProgram/get_edu_program_list',
        {params: searchIndex}
    )
}

export default {
    getEduProgramList
}