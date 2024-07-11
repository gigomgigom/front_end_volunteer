<template>
  <div id="view-programlist-wrapper">
    <h5>🔶봉사조회</h5>
    <SearchVolPgrm />
    <VolPrgmList>
      <template v-slot:right-side="{ index }">
        <HighlightButton text="수정하기" class="mb-3"
          style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; padding-right: 15px;"
          @buttonClick="showUpdateModal(index)" />
        <NormalButton text="신청조회"
          style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; padding-right: 15px;"
          @buttonClick="showApplicantModal(index)" />
      </template>
    </VolPrgmList>
    <navBar />
    <UpdateVolProgramModal id="updateVolProgramModal" @buttonUpdate="updateVolProgram"
      @buttonDelete="deleteVolProgram" />
    <Applicant id="applicant" />
  </div>
</template>

<script setup>
import { onMounted, ref, provide, inject } from 'vue';
import { Modal } from 'bootstrap';
import SearchVolPgrm from '@/components/SearchVolPgrm.vue';
import VolPrgmList from '@/components/VolPrgmList.vue';
import Applicant from '@/components/Applicant.vue';
import UpdateVolProgramModal from './UpdateVolProgramModal.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';
import NavBar from '@/components/Common/NavBar.vue';
import volProgramAPI from '@/apis/volProgramAPI';
import store from '@/store';
import adminAPI from '@/apis/adminAPI';
import router from '@/router';

const responseData = inject('responseData');
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
  programNo: 0,
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
async function showUpdateModal(index) {
  battachInput.value = '';
  imageInput.value = '';
  try {
    const response = await volProgramAPI.getVolProgramDetail(responseData.value.programList[index].no);
    if (response.data.result === 'success') {
      const volProgram = response.data.volProgram;

      let newObject = {
        programNo: volProgram.programNo,
        title: volProgram.programTitle,
        actDate: [new Date(volProgram.actBgnDate), new Date(volProgram.actEndDate)],
        actTime: [{ hours: volProgram.actBgnTime, minutes: 0, seconds: 0 }, { hours: volProgram.actEndTime, minutes: 0, seconds: 0 }],
        recruitCenter: volProgram.recruitName,
        recruitDate: [new Date(volProgram.recruitBgnDate), new Date(volProgram.recruitEndDate)],
        recruitCnt: volProgram.recruitCnt,
        //highCls
        lowCls: volProgram.programCtg,
        //city
        county: volProgram.regionNo,
        actPlace: volProgram.actPlace,
        mngName: volProgram.mngName,
        mngTel: volProgram.mngTel,
        content: volProgram.content,
        adultPosbl: volProgram.adultPosbl === 1 ? true : false,
        teenPosbl: volProgram.teenPosbl === 1 ? true : false,
        location: volProgram.location
      }
      for (let city of store.state.regionCode.regionList) {
        for (let county of city.county) {
          if (county.countyCode === Number(newObject.county)) {
            newObject.city = city.cityCode;
          }
        }
      }
      for (let highCls of store.state.categoryCode.categoryList) {
        for (let lowCls of highCls.lowClsList) {
          if (lowCls.lowClsCode === newObject.lowCls) {
            newObject.highCls = highCls.highClsCode;
          }
        }
      }
      providedData.value = newObject;
      //외부에서 가져온 데이터인지 여부를 지정한다.
      providedData.value.isRgExternal = true;
      providedData.value.isClExternal = true;
    } else {
      alert('해당 봉사프로그램은 존재하지않습니다.');
    }
  } catch (error) {
    console.log(error);
  }
  updateVolProgramModal.show();
}
//신청인 조회 모달창 띄우기
async function showApplicantModal(index) {
  //해당 봉사프로그램의 신청인 목록을 가져와야 함.
  try {
    const response = await adminAPI.getVolParticipantList(responseData.value.programList[index].no);
    if (response.data.result === 'success') {
      providedData.value.applicant = response.data.applicantList;
    } else {
      alert('오류가 발생했습니다. 잠시후 다시 요청해주세요');
    }
  } catch (error) {
    console.log(error);
  }
  applicant.show();
}
//봉사 프로그램 삭제
async function deleteVolProgram() {
  //삭제 로직 작성
  try {
    const response = await adminAPI.deleteVolProgram(providedData.value.programNo);
    if(response.data.result === 'success') {
      alert('봉사프로그램이 성공적으로 삭제되었습니다.');
      router.go();
    } else {
      alert('봉사프로그램이 존재하지 않습니다.');
      router.go();
    }
  } catch(error) {
    console.log(error);
  }
}
//봉사프로그램 수정
async function updateVolProgram() {
  const blankResult = isDataBlank(providedData.value);
  if (blankResult.isDataOk) {
    const validateResult = isDataValidate(providedData.value);
    if (validateResult.isDataOk) {
      //서버 전송하기 위한 데이터 세팅 작업해줘야함
      const formData = new FormData();
      formData.append('programNo', providedData.value.programNo);
      formData.append('programTitle', providedData.value.title);
      formData.append('actBgnDate', dateFormat(providedData.value.actDate[0]));
      formData.append('actEndDate', dateFormat(providedData.value.actDate[1]));
      formData.append('actBgnTime', providedData.value.actTime[0].hours);
      formData.append('actEndTime', providedData.value.actTime[1].hours);
      formData.append('recruitName', providedData.value.recruitCenter);
      formData.append('recruitBgnDate', dateFormat(providedData.value.recruitDate[0]));
      formData.append('recruitEndDate', dateFormat(providedData.value.recruitDate[1]));
      formData.append('recruitCnt', providedData.value.recruitCnt);
      formData.append('programCtg', providedData.value.lowCls);
      formData.append('regionNo', providedData.value.county);
      formData.append('actPlace', providedData.value.actPlace);
      formData.append('mngName', providedData.value.mngName);
      formData.append('mngTel', providedData.value.mngTel);
      formData.append('content', providedData.value.content);
      formData.append('adultPosbl', providedData.value.adultPosbl ? 1 : 0);
      formData.append('teenPosbl', providedData.value.teenPosbl ? 1 : 0);
      formData.append('location', providedData.value.location);
      //주소 집어넣어야함
      if (battachInput.files.length !== 0) {
        formData.append('battachFile', battachInput.files[0]);
      }
      if (imageInput.files.length !== 0) {
        formData.append('battachImg', imageInput.files[0]);
      }
      //데이터 세팅 작업이 끝난 후 API요청해야함.
      try {
        const response = await adminAPI.modifyVolProgram(formData);
        if (response.data.result === 'success') {
          alert('수정작업이 완료되었습니다.');
          router.go();
        } else {
          alert('작업 중 오류가 발생하였습니다. 잠시 후 다시 시도해주십시오');
          router.go();
        }
      } catch (error) {
        console.log(error);
      }
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
  if (data.actDate[0] < data.recruitDate[1]) {
    validateMsgList.push('봉사 시작일이 모집 마감일보다 앞서있거나 두 기간이 겹쳐있습니다.');
    isDataOk = false;
  }
  //봉사시간 시작 시간이 봉사시간 종료 시간보다 앞에 있어야한다.
  if (data.actTime[0].hours > data.actTime[1].hours) {
    validateMsgList.push('봉사 시작시간은 봉사 종료시간 전으로 기입해야합니다.');
    isDataOk = false;
  }
  //모집인원은 1명 이상이어야한다.
  if (data.recruitCnt < 1) {
    validateMsgList.push('모집인원은 1명 이상으로 기입해야합니다.');
    isDataOk = false;
  }
  return { validateMsgList, isDataOk };
}
//DATE객체를 문자열(YYYY-MM-DD)로 변환
function dateFormat(dateStr) {
  const date = new Date(dateStr);
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;

  return date.getFullYear() + '-' + month + '-' + day;
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