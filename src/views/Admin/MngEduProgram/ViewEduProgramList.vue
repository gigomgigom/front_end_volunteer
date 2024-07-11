<template>
  <div>
    <SearchEduPrgm/>
    <EduPrgmList>
      <template v-slot:right-side="{index}">
        <HighlightButton text="수정하기" class="mb-3" @click="showUpdateModal(index)"
          style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; padding-right: 15px;" />
        <NormalButton text="신청조회" @click="showApplicantModal(index)"
          style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; padding-right: 15px;" />
      </template>
    </EduPrgmList>
    <navBar/>
    <EduPrgmFormTemplateSlot id="updateEduProgramModal" @buttonUpdate="updateEduProgram" @buttonDelete="deleteEduProgram"/>
    <Applicant id="applicant"/>
  </div>
</template>

<script setup>
import SearchEduPrgm from '@/components/SearchEduPrgm.vue';
import EduPrgmFormTemplateSlot from './EduPrgmFormTemplateSlot.vue'
import EduPrgmList from '@/components/EduPrgmList.vue';
import Applicant from '@/components/Applicant.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';
import NavBar from '@/components/Common/NavBar.vue';
import { onMounted, ref, provide, inject } from "vue";
import { Modal } from "bootstrap";
import eduProgramAPI from '@/apis/eduProgramAPI';
import router from '@/router';
import store from '@/store';
import adminAPI from '@/apis/adminAPI';

let updateEduProgramModal = null;
let applicant = null;
let battachInput = null;
let imageInput = null;
const responseData = inject('responseData');

onMounted(() => {
  updateEduProgramModal = new Modal(document.querySelector("#updateEduProgramModal"));
  applicant = new Modal(document.querySelector("#applicant"));
  battachInput = document.querySelector('#battachInput');
  imageInput = document.querySelector('#imageInput');
});
//하위컴포넌트(모달 등)에 데이터 전달
const providedData = ref({
  no: 0,
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
  content: ''
});
provide('providedData', providedData);

async function showUpdateModal(index) {
  battachInput.value = '';
  imageInput.value = '';
  try {
    const response = await eduProgramAPI.getEduProgramDetail(responseData.value.programList[index].no);
    if(response.data.result === 'success') {
      const eduProgram = response.data.eduProgram;
      let newObject = {
        no: eduProgram.programNo,
        title: eduProgram.programTitle,
        eduDate: [new Date(eduProgram.actBgnDate), new Date(eduProgram.actEndDate)],
        recruitCenter: findRegionWithRegionNo(eduProgram.recruitRegion, store.state.regionCode.regionList),
        eduTime: [{hours: eduProgram.actBgnTime, minutes: 0, seconds: 0}, {hours: eduProgram.actEndTime, minutes: 0, seconds: 0}],
        recruitDate: [new Date(eduProgram.recruitBgnDate), new Date(eduProgram.recruitEndDate)],
        recruitCnt: eduProgram.recruitCnt,
        city: 0,
        county: Number(eduProgram.recruitRegion),
        eduPlace: eduProgram.actPlace,
        mngName: eduProgram.mngName,
        mngTel: eduProgram.mngTel,
        content: eduProgram.content,
        location: eduProgram.location
      };
      for(let city of store.state.regionCode.regionList) {
        for(let county of city.county) {
          if(county.countyCode === newObject.county) {
            newObject.city = city.cityCode;
          }
        }
      }
      providedData.value = newObject;
      providedData.value.isRgExternal = true;
      providedData.value.isClExternal = true;
    } else {
      alert('봉사프로그램이 존재하지 않습니다.');
      router.go();
    }
  } catch(error) {
    console.log(error);
  }
  updateEduProgramModal.show();
}
function showApplicantModal(){
  applicant.show();
}
async function deleteEduProgram() {
  try {
    const response = await adminAPI.deleteEduProgram(providedData.value.no);
    if(response.data.result === 'success') {
      alert('교육 프로그램이 삭제되었습니다.');
      router.go();
    } else {
      alert('교육 프로그램 삭제 중 문제가 발생하였습니다. 잠시 후 다시 시도해주십시오');
      router.go();
    }
  } catch(error) {
    alert('서버 통신 중 오류가 발생하였습니다. 잠시 후 다시 시도해주십시오');
    router.go();
  }
}
async function updateEduProgram() {
  const blankResult = isDataBlank(providedData.value);
  if(blankResult.isDataOk) {
    const validateResult = isDataValidate(providedData.value);
    if(validateResult.isDataOk) {
      
      //서버 전송하기 위한 데이터 세팅 작업해줘야함
      const formData = new FormData();
      formData.append('programNo', providedData.value.no);
      formData.append('programTitle', providedData.value.title);
      formData.append('actBgnDate', dateFormat(providedData.value.eduDate[0]));
      formData.append('actEndDate', dateFormat(providedData.value.eduDate[1]));
      formData.append('actBgnTime', providedData.value.eduTime[0].hours);
      formData.append('actEndTime', providedData.value.eduTime[1].hours);
      formData.append('recruitBgnDate', dateFormat(providedData.value.recruitDate[0]));
      formData.append('recruitEndDate', dateFormat(providedData.value.recruitDate[1]));
      formData.append('recruitCnt', providedData.value.recruitCnt);
      formData.append('recruitRegion', providedData.value.county);
      formData.append('actPlace', providedData.value.eduPlace);
      formData.append('mngName', providedData.value.mngName);
      formData.append('mngTel', providedData.value.mngTel);
      formData.append('content', providedData.value.content);
      formData.append('location', providedData.value.location);
      if(battachInput.files.length !== 0) {
        formData.append('battachFile', battachInput.files[0]);
      }
      if(imageInput.files.length !== 0) {
        formData.append('battachImg', imageInput.files[0]);
      }
      try {
        const response = await adminAPI.modifyEduProgram(formData);
        if(response.data.result === 'success') {
          alert('교육 프로그램 수정이 완료되었습니다.');
          router.go();
        } else {
          alert('교육 프로그램 수정 중 오류가 발생하였습니다. 잠시 후 다시 시도해주십시오');
          router.go();
        }
      } catch(error) {
        alert('통신 중 오류가 발생하였습니다. 잠시 후 다시 시도해주십시오.');
        router.push('/Details/Admin/MngEduProgram');
      }
      updateEduProgramModal.hide();
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
  if(data.eduDate[0] < data.recruitDate[1]) {
    validateMsgList.push('교육 시작일이 모집 마감일보다 앞서있거나 두 기간이 겹쳐있습니다.');
    isDataOk = false;
  }
  if(data.eduTime[0].hours > data.eduTime[1].hours) {
    validateMsgList.push('교육 시작시간은 교육 종료시간 전으로 기입해야합니다.');
    isDataOk = false;
  }
  if(data.recruitCnt < 1) {
    validateMsgList.push('모집인원은 1명 이상으로 기입해야합니다.');
    isDataOk = false;
  }
  return { validateMsgList, isDataOk };
}
//지역이름 찾기
function findRegionWithRegionNo(regionNo, regionList) {
    let result = {
        cityName: '',
        countyName: '',
    }
    for (let city of regionList) {
        for (let county of city.county) {
            if (county.countyCode === Number(regionNo)) {
                result.cityName = city.cityName;
                result.countyName = county.countyName;
            }
        }
    }
    return result.cityName + ' ' + result.countyName + ' 자원봉사센터';
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

</style>