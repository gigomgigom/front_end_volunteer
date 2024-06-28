<template>
  <div>
    <SearchEduPrgm />
    <EduPrgmList>
      <template v-slot:createButton>
        <NormalButton text="새로 생성" @buttonClick="showAddModal(0)" style="padding-top: 2px; padding-bottom: 2px;" />
      </template>
      <template v-slot:right-side>
        <button @click="showAddModal(1, $event)" style="background-color: rgb(240, 103, 4);
            padding-left: 30px;
            padding-right: 30px;
            padding-top: 5px;
            padding-bottom: 5px;
            border-radius: 5%;
            border: none;
            font-weight: bold;
            color: white;
            ">
          추가
        </button>
      </template>
    </EduPrgmList>
    <EduPrgmFormTemplateSlot id="addEduProgramModal" @buttonClick="addEduProgram" />
    <nav aria-label="Page navigation example" class="d-flex justify-content-center my-5">
      <ul class="pagination justify-content-center align-items-center">
        <li class="page-item mx-2">
          <button class="btn text_button" @click="$emit('changePageNo', 1)">처음</button>
        </li>
        <li class="page-item me-4">
          <button class="btn text_button" @click="$emit('changePageNo', responseData.pager.startPageNo - 1)">이전</button>
        </li>
        <li class="page-item mx-1" v-for="n in responseData.pager.pageNoList" :key="n">
          <button class="btn number_button" @click="$emit('changePageNo', n)" :class="responseData.pager.pageNo === n ? 'selected_button' : ''">{{ n }}</button>
        </li>
        <li class="page-item ms-4">
          <button class="btn text_button" @click="$emit('changePageNo', responseData.pager.endPageNo + 1)">다음</button>
        </li>
        <li class="page-item mx-2">
          <button class="btn text_button" @click="$emit('changePageNo', responseData.pager.totalPage)">맨끝</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, ref, provide, inject } from "vue";
import { Modal } from "bootstrap";
import SearchEduPrgm from '@/components/SearchEduPrgm.vue';
import EduPrgmList from '@/components/EduPrgmList.vue';
import EduPrgmFormTemplateSlot from './EduPrgmFormTemplateSlot.vue'
import NormalButton from '@/components/Common/NormalButton.vue';
import dataPortalAPI from "@/apis/dataPortalAPI";
import { useStore } from "vuex";

let addEduProgramModal = null;
let battachInput = null;
let imageInput = null;

const regionList = useStore().state.regionCode.regionList;
const responseData = inject('responseData');

onMounted(() => {
  addEduProgramModal = new Modal(document.querySelector("#addEduProgramModal"));
  battachInput = document.querySelector('#battachInput');
  imageInput = document.querySelector('#imageInput');
});
//하위컴포넌트(모달 등)에 데이터 전달
const providedData = ref({
  title: '',
  eduDate: [],
  eduTime: [],
  recruitCenter: '',
  recruitDate: [],
  recruitCnt: 0,
  city: 0,
  county: 0,
  eduPlace: '',
  mngName: '',
  mngTel: '',
  content: '',
  isExternal: false
});
provide('providedData', providedData);
//모달창 띄우기
async function showAddModal(switchNum, event) {
  if (switchNum) {
    //공공데이터에서 받아온 데이터로 데이터 세팅작업
    let domElement = event.target.parentElement.id;
    battachInput.value = '';
    imageInput.value = '';
    //서버 통신 후 데이터를 가져오기
    const response = await dataPortalAPI.getEduProgramDetail(domElement);
    let data = response.data.response.body.items.item;
    //데이터 세팅 작업
    providedData.value.title = data.crclmNm;
    providedData.value.eduDate = [
      parseIntToDate(data.edcBgnde),
      parseIntToDate(data.edcEndde)
    ];
    providedData.value.recruitDate = [
      parseIntToDate(data.edcRceptBgnde),
      parseIntToDate(data.edcRceptEndde)
    ]
    providedData.value.eduTime = [
      {
        hours: data.edcBeginTime,
        minutes: 0,
        seconds: 0
      },
      {
        hours: data.edcEndTime,
        minutes: 0,
        seconds: 0
      }
    ];
    providedData.value.recruitCenter = `${data.edcMnnstNm} 자원봉사센터`;
    providedData.value.recruitCnt = data.edcNmpr;
    providedData.value.eduPlace = data.edcplcNm;
    providedData.value.mngName = data.edcChargerNm;
    providedData.value.mngTel = data.telno;
    providedData.value.content = data.edcCn;
    let cityCounty = data.edcMnnstNm.split(' ');
    for(let city of regionList) {
      for(let county of city.county){
        if(county.countyName === cityCounty[1]) {
          providedData.value.city = city.cityCode;
          providedData.value.county = county.countyCode;
        }
      }
    }
    providedData.value.isExternal = true;
    addEduProgramModal.show();
  } else {
    //새로 만들기
    resetData();
    addEduProgramModal.show();
  }
}
//데이터 초기화(빈칸으로 만들기)
function resetData() {
  providedData.value.title = '';
  providedData.value.eduDate = [];
  providedData.value.eduTime = [];
  providedData.value.recruitCenter = '';
  providedData.value.recruitDate = [];
  providedData.value.recruitCnt = 0;
  providedData.value.city = 0;
  providedData.value.county = 0;
  providedData.value.eduPlace = '';
  providedData.value.mngName = '';
  providedData.value.mngTel = '';
  providedData.value.content = '';
  battachInput.value = '';
  imageInput.value = '';
}
//데이터 추가전 확인하는 함수
function addEduProgram() {
  const blankResult = isDataBlank(providedData.value);
  if (blankResult.isDataOk) {
    const validateResult = isDataValidate(providedData.value);
    if (validateResult.isDataOk) {
      //서버 전송하기 위한 데이터 세팅 작업해줘야함
      //데이터 세팅 작업이 끝난 후 API요청해야함.
      addEduProgramModal.hide();
    } else {
      const validateMsg = validateResult.validateMsgList.join('\n');
      alert(`잘못 입력된 정보가 있습니다.\n${validateMsg}`);
    }
  } else {
    const blankMsg = blankResult.noDataList.join(', ');
    alert(`누락된 내용이 있습니다.\n[ 누락된 항목 : ${blankMsg}]`);
  }
}
//공백 확인
function isDataBlank(data) {
  let isDataOk = true;
  let noDataList = [];
  if (data.title === '') {
    noDataList.push('제목');
    isDataOk = false;
  }
  if (data.eduDate.length !== 2) {
    noDataList.push('교육기간');
    isDataOk = false;
  }
  if (data.eduTime.length !== 2) {
    noDataList.push('교육시간');
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
  if (data.county === 0) {
    noDataList.push('교육센터');
    isDataOk = false;
  }
  if (data.eduPlace === '') {
    noDataList.push('교육장소');
    isDataOk = false;
  }
  if (data.mngName === '') {
    noDataList.push('관리자 이름');
    isDataOk = false;
  }
  if (data.mngTel === '') {
    noDataList.push('부서 연락처');
    isDataOk = false;
  }
  if (data.content === '') {
    noDataList.push('내용');
    isDataOk = false;
  }
  return { isDataOk, noDataList };
}
//데이터가 논리적으로 맞는지 여부 확인
function isDataValidate(data) {
  let isDataOk = true;
  let validateMsgList = [];
  //봉사기간과 모집기간이 논리적으로 맞는지 (봉사기간이 모집기간보다 뒤에 있어야한다.)
  if (data.eduDate[0] < data.recruitDate[1]) {
    validateMsgList.push('교육 시작일이 모집 마감일보다 앞서있거나 두 기간이 겹쳐있습니다.');
    isDataOk = false;
  }
  if (data.eduTime[0].hours > data.eduTime[1].hours) {
    validateMsgList.push('교육 시작시간은 교육 종료시간 전으로 기입해야합니다.');
    isDataOk = false;
  }
  if (data.recruitCnt < 1) {
    validateMsgList.push('모집인원은 1명 이상으로 기입해야합니다.');
    isDataOk = false;
  }
  return { validateMsgList, isDataOk };
}
//숫자형 날짜 데이터를 Date객체로 변환
function parseIntToDate(dateNumber) {
  const dateString = dateNumber.toString();
  // 연도, 월, 일을 추출
  const year = parseInt(dateString.substring(0, 4), 10);
  const month = parseInt(dateString.substring(4, 6), 10) - 1; // 월은 0부터 시작하므로 1을 뺌
  const day = parseInt(dateString.substring(6, 8), 10);
  // Date 객체 생성
  return new Date(year, month, day);
}
</script>

<style scoped>
.text_button {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: rgb(240, 103, 4);
  color: white;
  font-weight: bold;
}

.number_button:hover {
  border: 2px solid rgb(240, 103, 4);
  background-color: rgb(240, 103, 4);
  color: white;
}

.number_button.selected_button {
  border: 2px solid rgb(240, 103, 4);
  background-color: rgb(240, 103, 4);
  color: white;
}

.number_button {
  padding-left: 10px;
  padding-right: 10px;
  border: 2px solid gray;
  font-weight: bold;
}
</style>