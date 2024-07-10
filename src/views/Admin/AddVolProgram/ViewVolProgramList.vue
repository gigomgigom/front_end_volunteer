<template>
  <div id="view-programlist-wrapper">
    <h5>🔶봉사조회</h5>
    <SearchVolPgrm />
    <AddVolProgramModal id="addVolProgramModal" @buttonClick="addVolProgram"/>
    <VolPrgmList class="mt-5">
      <template v-slot:createButton>
        <NormalButton text="새로 생성" @buttonClick="showDialog(0)" style="padding-top: 2px; padding-bottom: 2px;" />
      </template>
      <template v-slot:right-side>
        <button @click="showDialog(1, $event)" style="background-color: rgb(240, 103, 4);
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
    </VolPrgmList>
    <nav aria-label="Page navigation example" class="d-flex justify-content-center my-5">
      <ul class="pagination justify-content-center align-items-center">
        <li class="page-item mx-2">
          <button class="btn text_button" @click="$emit('changePageNo', 1)">처음</button>
        </li>
        <li class="page-item me-4">
          <button class="btn text_button" @click="$emit('changePageNo', responseData.pager.startPageNo - 1)">이전</button>
        </li>
        <li class="page-item mx-1" v-for="n in responseData.pager.pageNoList" :key="n">
          <button class="btn number_button" @click="$emit('changePageNo', n)" :class="Number(searchIndex.pageNo) === n ? 'selected_button' : ''">{{ n }}</button>
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
import { inject, onMounted, provide, ref } from 'vue';
import { Modal } from 'bootstrap';
import dataPortalAPI from '@/apis/dataPortalAPI';
import SearchVolPgrm from '@/components/SearchVolPgrm.vue';
import AddVolProgramModal from './AddVolProgramModal.vue';
import VolPrgmList from '@/components/VolPrgmList.vue'
import NormalButton from '@/components/Common/NormalButton.vue';
import { useStore } from 'vuex';

let addVolProgramModal = null;
const responseData = inject('responseData');
const searchIndex = inject('searchIndex');

const categoryList = useStore().state.categoryCode.categoryList;

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
  location: '',
  adultPosbl: false,
  teenPosbl: false,
  isClExternal: false,
  isRgExternal: false
});
//데이터를 하위 컴포넌트들에게 provide
provide('providedData', providedData);
onMounted(() => {
  addVolProgramModal = new Modal(document.querySelector("#addVolProgramModal"));
  battachInput = document.querySelector('#battachInput');
  imageInput = document.querySelector('#imageInput');
});
//봉사프로그램 추가작업
function addVolProgram() {
  const blankResult = isDataBlank(providedData.value);
  if (blankResult.isDataOk) {
    const validateResult = isDataValidate(providedData.value);
    if (validateResult.isDataOk) {
      //서버 전송하기 위한 데이터 세팅 작업해줘야함
      //데이터 세팅 작업이 끝난 후 API요청해야함.
      addVolProgramModal.hide();
    } else {
      const errorMsg = validateResult.validateMsgList.join('\n');
      alert(`잘못 입력된 정보가 있습니다.\n${errorMsg}`);
    }
  } else {
    let resultMsg = blankResult.noDataList.join(', ')
    alert(`누락된 내용이 있습니다.\n[ 누락된 항목 : ${resultMsg}]`);
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
  if (data.actDate[0] < data.recruitDate[0]) {
    validateMsgList.push('봉사 시작일이 모집 시작일보다 앞서있습니다.');
    isDataOk = false;
  }
  if (data.actTime[0].hours > data.actTime[1].hours) {
    validateMsgList.push('봉사 시작시간은 봉사 종료시간 전으로 기입해야합니다.');
    isDataOk = false;
  }
  if (data.recruitCnt < 1) {
    validateMsgList.push('모집인원은 1명 이상으로 기입해야합니다.');
    isDataOk = false;
  }
  return { validateMsgList, isDataOk };
}
//봉사 프로그램 추가 버튼을 눌렀을때 해당 봉사 프로그램의 상세정보를 받아오는 함수
async function showDialog(code, event) {
  if (code) {
    //공공데이터에서 받아온 데이터로 데이터 세팅작업
    let listIndex = event.target.parentElement.id;
    let programNo = responseData.value.programList[listIndex].no;
    //첨부파일 초기화
    battachInput.value = '';
    imageInput.value = '';
    //서버 통신 후 데이터를 가져오기
    const response = await dataPortalAPI.getVolProgramDetail(programNo);
    let data = response.data.response.body.items.item;
    //분야 코드 찾기(이름을 통해 분리를 한다.)
    let srvcCdList = data.srvcClCode.split(' > ');
    for (let highCls of categoryList) {
      for (let lowCls of highCls.lowClsList) {
        if (lowCls.lowClsName === srvcCdList[1]) {
          providedData.value.highCls = highCls.highClsCode;
          providedData.value.lowCls = lowCls.lowClsCode;
        }
      }
    }
    //봉사 프로그램 제목
    providedData.value.title = data.progrmSj;
    //봉사 프로그램 모집일자(숫자를 Date로 변환)
    providedData.value.recruitDate = [
      parseIntToDate(data.noticeBgnde),
      parseIntToDate(data.noticeEndde)
    ];
    //봉사 프로그램 봉사시간
    providedData.value.actTime = [
      {
        hours: data.actBeginTm,
        minutes: 0,
        seconds: 0
      },
      {
        hours: data.actEndTm,
        minutes: 0,
        seconds: 0
      }
    ]
    //봉사프로그램 모집기관
    providedData.value.recruitCenter = data.mnnstNm;
    //봉사 프로그램 봉사기간(숫자를 Date로 변환)
    providedData.value.actDate = [
      parseIntToDate(data.progrmBgnde),
      parseIntToDate(data.progrmEndde)
    ];
    //봉사프로그램 모집인원
    providedData.value.recruitCnt = data.rcritNmpr;
    //봉사프로그램 시/도코드
    providedData.value.city = data.sidoCd;
    //봉사프로그램 구/군코드
    providedData.value.county = data.gugunCd;
    //봉사프로그램 봉사장소
    providedData.value.actPlace = data.actPlace;
    //봉사프로그램 담당자명
    providedData.value.mngName = data.nanmmbyNmAdmn;
    //봉사프로그램 담당자 전화번호
    providedData.value.mngTel = data.telno;
    //봉사프로그램 내용
    providedData.value.content = data.progrmCn;
    //봉사프로그램 성인가능여부
    if (data.adultPosblAt === "Y") {
      providedData.value.adultPosbl = true;
    } else {
      providedData.value.adultPosbl = false;
    }
    //봉사프로그램 청소년가능여부
    if (data.yngbgsPosblAt === "Y") {
      providedData.value.teenPosbl = true;
    } else {
      providedData.value.teenPosbl = false;
    }
    //외부에서 가져온 데이터인지 여부를 지정한다.
    providedData.value.isRgExternal = true;
    providedData.value.isClExternal = true;
    //모든 작업이 끝난 후 모달창을 띄운다.
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
  battachInput.value = '';
  imageInput.value = '';
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