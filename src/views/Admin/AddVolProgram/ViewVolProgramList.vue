<template>
  <div id="view-programlist-wrapper">
    <h5>🔶봉사조회</h5>
    <SearchVolPgrm />
    <AddVolProgramModal id="addVolProgramModal" @buttonClick="addVolProgram" />
    <VolPrgmList class="mt-5">
      <template v-slot:createButton>
        <NormalButton text="새로 생성" @buttonClick="showDialog(0)" style="padding-top: 2px; padding-bottom: 2px;" />
      </template>
      <template v-slot:right-side>
        <HighlightButton text="추가" @buttonClick="showDialog(1)" style="padding-top: 2px; padding-bottom: 2px;" />
      </template>
    </VolPrgmList>

  </div>
</template>

<script setup>
import { onMounted, provide, ref } from 'vue';
import { Modal } from 'bootstrap';
import SearchVolPgrm from '@/components/SearchVolPgrm.vue';
import AddVolProgramModal from './AddVolProgramModal.vue';
import VolPrgmList from '@/components/VolPrgmList.vue'
import NormalButton from '@/components/Common/NormalButton.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
let addVolProgramModal = null;

//첨부파일 input 객체
let battachInput = null;
//이미지파일 input 객체
let imageInput = null;

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

onMounted(() => {
  addVolProgramModal = new Modal(document.querySelector("#addVolProgramModal"));
  battachInput = document.querySelector('#battachInput');
  imageInput = document.querySelector('#imageInput');
});

function addVolProgram() {
  console.log(imageInput.files[0]);
  const blankResult = isDataBlank(providedData.value);
  if (blankResult.isDataOk) {
    console.log('유효성 검사 통과');
    const validateResult = isDataValidate(providedData.value);
    //alert창 띄워줘야함
  } else {
    let resultMsg = blankResult.noDataList.join(', ')
    alert(`누락된 내용이 있습니다.\n[ 누락된 항목 : ${resultMsg}]`);
  }
}
//서버통신을 위한 데이터 세팅 작업
//addVolProgramModal.hide();
//서버 통신 - 봉사프로그램 추가
//공백 확인
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
//데이터가 논리적으로 맞는지 여부 확인
function isDataValidate(data) {
  let isDataOk = true;
  let validateMsgList = [];
  //봉사기간과 모집기간이 논리적으로 맞는지 (봉사기간이 모집기간보다 뒤에 있어야한다.)
  if(data.actDate[0] < data.recruitDate[1]) {
    validateMsgList.push('봉사 시작일이 모집 마감일보다 앞서있거나 두 기간이 겹쳐있습니다.');
    isDataOk = false;
  }
  if(data.actTime[0].hours > data.actTime[1].hours) {
    validateMsgList.push('봉사 시작시간은 봉사 종료시간 전으로 기입해야합니다.');
    isDataOk = false;
  }
  if(data.recruitCnt < 1) {
    validateMsgList.push('모집인원은 1명 이상으로 기입해야합니다.');
    isDataOk = false;
  }
  
}
function showDialog(code) {
  if (code) {
    //공공데이터에서 받아온 데이터로 데이터 세팅작업
    addVolProgramModal.show();
  } else {
    resetData(); //데이터 리셋('빈칸으로 세팅');
    addVolProgramModal.show();
  }
}
//데이터 리셋
function resetData() {
  providedData.value.title = '';
  providedData.value.actDate = [];
  providedData.value.actTime = [];
  providedData.value.recruitCenter = '';
  providedData.value.recruitDate = [];
  providedData.value.recruitCnt = 0;
  providedData.value.highCls = '';
  providedData.value.lowCls = '';
  providedData.value.city = 0;
  providedData.value.county = 0;
  providedData.value.actPlace = '';
  providedData.value.mngName = '';
  providedData.value.mngTel = '';
  providedData.value.content = '';
  providedData.value.adultPosbl = false;
  providedData.value.teenPosbl = false;
  
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