<template>
  <div id="view-programlist-wrapper">
    <h5>🔶봉사조회</h5>
    <SearchVolPgrm/>
    <VolPrgmList>
      <template v-slot:right-side>
        <HighlightButton text="수정하기" class="mb-3"
          style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; padding-right: 15px;" @buttonClick="showUpdateModal"/>
        <NormalButton text="신청조회"
          style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; padding-right: 15px;" @buttonClick="showApplicantModal"/>
      </template>
    </VolPrgmList>
    <UpdateVolProgramModal id="updateVolProgramModal" @buttonUpdate="updateVolProgram" @buttonDelete="deleteVolProgram"/>
    <Applicant id="applicant" />
  </div>
</template>

<script setup>
import { onMounted, ref, provide } from 'vue';
import { Modal } from 'bootstrap';
import SearchVolPgrm from '@/components/SearchVolPgrm.vue';
import VolPrgmList from '@/components/VolPrgmList.vue';
import Applicant from '@/components/Applicant.vue';
import UpdateVolProgramModal from './UpdateVolProgramModal.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';

let updateVolProgramModal = null;
let applicant = null;
//첨부파일 input 객체
let battachInput = null;
//이미지파일 input 객체
let imageInput = null;

onMounted(() => {
  updateVolProgramModal = new Modal(document.querySelector("#updateVolProgramModal"));
  applicant = new Modal(document.querySelector("#applicant"));
  battachInput = document.querySelector('#battachInput');
  imageInput = document.querySelector('#imageInput');
});

//하위 컴포넌트들에게 제공되는 데이터(객체)
const providedData = ref({
  title: '',
  actDate: [],
  actTime: [],
  recruitCenter: '',
  recruitDate: [],
  recruitCnt: 0,
  highCls: '',
  lowCls: '',
  city: 0,
  county: 0,
  actPlace: '',
  mngName: '',
  mngTel: '',
  content: '',
  adultPosbl: false,
  teenPosbl: false,
});

//데이터를 하위 컴포넌트들에게 provide
provide('providedData', providedData);

//수정하기 모달창 띄우기
function showUpdateModal() {
  battachInput.value = '';
  imageInput.value = '';
  //수정할 봉사프로그램의 정보를 세팅해주는 작업
  updateVolProgramModal.show();
}

//신청인 조회 모달창 띄우기
function showApplicantModal() {
  //해당 봉사프로그램의 신청인 목록을 가져와야 함.
  applicant.show();
}

//봉사 프로그램 삭제
function deleteVolProgram() {
  //삭제 로직 작성
  console.log('삭제 작업');
  updateVolProgramModal.hide();
}

function updateVolProgram() {
  const blankResult = isDataBlank(providedData.value);
  if (blankResult.isDataOk) {
    const validateResult = isDataValidate(providedData.value);
    if(validateResult.isDataOk) {
      //서버 전송하기 위한 데이터 세팅 작업해줘야함
      //데이터 세팅 작업이 끝난 후 API요청해야함.
      console.log('유효성 검사 통과');
      updateVolProgramModal.hide();
    } else {
      const errorMsg = validateResult.validateMsgList.join('\n');
      alert(`잘못 입력된 정보가 있습니다.\n${errorMsg}`);
    }
  } else {
    let resultMsg = blankResult.noDataList.join(', ')
    alert(`누락된 내용이 있습니다.\n[ 누락된 항목 : ${resultMsg}]`);
  }
}
//공백확인
function isDataBlank(data) {
  let isDataOk = true;
  let noDataList = [];
  if (data.title === '') {
    noDataList.push('제목');
    isDataOk = false;
  }
  if (data.actDate.length !== 2) {
    noDataList.push('봉사기간');
    isDataOk = false;
  }
  if (data.actTime.length !== 2) {
    noDataList.push('봉사시간');
    isDataOk = false;
  }
  if (data.recruitCenter === '') {
    noDataList.push('모집기관');
    isDataOk = false;
  }
  if (data.recruitDate.length !== 2) {
    noDataList.push('모집기간');
    isDataOk = false;
  }
  if (data.recruitCnt === '') {
    noDataList.push('모집인원');
    isDataOk = false;
  }
  if (data.lowCls === '') {
    noDataList.push('분야선택');
    isDataOk = false;
  }
  if (data.county === 0) {
    noDataList.push('지역선택');
    isDataOk = false;
  }
  if (data.actPlace === '') {
    noDataList.push('봉사장소');
    isDataOk = false;
  }
  if (data.mngName === '') {
    noDataList.push('관리자 이름');
    isDataOk = false;
  }
  if (data.mngTel === '') {
    noDataList.push('관리자 연락처');
    isDataOk = false;
  }
  if (data.content === '') {
    noDataList.push('내용');
    isDataOk = false;
  }
  if (!data.adultPosbl && !data.teenPosbl) {
    noDataList.push('봉사자유형 선택');
    isDataOk = false;
  }
  return { isDataOk, noDataList };
}
//데이터 유효성 검사
function isDataValidate(data) {
  let isDataOk = true;
  let validateMsgList = [];
  //봉사기간과 모집기간이 논리적으로 맞는지 (봉사기간이 모집기간보다 뒤에 있어야한다.)
  if(data.actDate[0] < data.recruitDate[1]) {
    validateMsgList.push('봉사 시작일이 모집 마감일보다 앞서있거나 두 기간이 겹쳐있습니다.');
    isDataOk = false;
  }
  //봉사시간 시작 시간이 봉사시간 종료 시간보다 앞에 있어야한다.
  if(data.actTime[0].hours > data.actTime[1].hours) {
    validateMsgList.push('봉사 시작시간은 봉사 종료시간 전으로 기입해야합니다.');
    isDataOk = false;
  }
  //모집인원은 1명 이상이어야한다.
  if(data.recruitCnt < 1) {
    validateMsgList.push('모집인원은 1명 이상으로 기입해야합니다.');
    isDataOk = false;
  }
  return { validateMsgList, isDataOk };
}
</script>



<style scoped>
* {
  margin: 0;
  padding: 0;
}

h5 {
  font-weight: bold;
  padding-bottom: 10px;
}

#view-programlist-wrapper {
  padding-top: 30px;
}
</style>