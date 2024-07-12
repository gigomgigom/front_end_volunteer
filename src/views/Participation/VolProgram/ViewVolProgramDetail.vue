<template>
  <div class="d-flex justify-content-end" v-if="store.state.userId!==''">
    <HighlightButton :text="volDetail.isApplied ? '신청 취소' : '신청하기' " class="me-2" @buttonClick="participate()" v-if="(volDetail.recruitStts==1)&&(!volDetail.isApplied)"/>
    <NormalButton :text="volDetail.isInterestAdded ? '관심 취소' : '관심등록'" @buttonClick="interest()" v-if="volDetail.recruitStts==1"/>
  </div>
  <div class="title-wrapper">
    <div class="rc-status"><b>{{ (volDetail.recruitStts == 1) ? '모집중' : '모집완료' }}</b></div>
    <h5><b>{{ volDetail.title }}</b></h5>
  </div>
  <VolPrgmDetail/>
  <div class="my-5"></div>
  <SelectDateModal id="selectDateModal" v-if="volDetail.isDataLoaded"/>
  <div class="custom_loader_wrapper" ref="loadingContainer">
      <div class="spinner-border" style="width: 7rem; height: 7rem;" role="status">
      </div>
  </div>
</template>

<script setup>
import VolPrgmDetail from '@/components/VolPrgmDetail.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';
import SelectDateModal from './SelectDateModal.vue';
import volProgramAPI from '@/apis/volProgramAPI';
import { onMounted, provide, ref } from 'vue';
import { Modal } from 'bootstrap';
import { useRoute } from 'vue-router';
import store from '@/store';
import volParticipateAPI from '@/apis/volParticipateAPI';
import router from '@/router';

const loadingContainer = ref(null);
//모달 창 띄울때 사용되는 참조객체 및 메소드
let selectDateModal = null;

//프로그램 상세정보 가져오기
const volDetail = ref({
  no: 0,
  title: '',
  actDate: '',
  actTime: '',
  recruitDate: '',
  recruitCenter: '',
  recruitStts: 0,
  recruitCnt: 0,
  applyCnt: 0,
  region: '',
  actPlace: '',
  ctg: '',
  adultTeen: '',
  mngName: '',
  mngTel: '',
  content: '',
  fileName: '',
  downloadFileUrl: '',
  downloadImgUrl: '',
  location: '',
  isInterestAdded: false,
  isApplied: false,
  isDataLoaded: false
})
onMounted(() => {
  getVolPrgmDtl();
})
provide('detail', volDetail);
async function participate() {
  if(volDetail.value.isApplied) {
    let askToCancel = confirm('취소하시게 되면 다시 신청하실 수 없습니다. 정말로 취소하시겠습니까?');
    if(askToCancel) {
      const response = await volParticipateAPI.cancelVolAppl(volDetail.value.no);
      if (response.data.result === 'success') {
        alert('취소되었습니다.');
        router.go();
      }
    }
  } else {
    selectDateModal.show();
  }
  
}
async function interest() {
  if(volDetail.value.isInterestAdded) {
    let askToCancel = confirm('관심목록에서 제거하시겠습니까?');
    if(askToCancel) {
      const data = JSON.parse(JSON.stringify([volDetail.value.no]));
      const response = await volProgramAPI.cancelInterestVolProgram(data);
      if(response.data.result === 'success') {
        alert('관심목록에서 제거되었습니다.');
        router.go();
      } else {
        alert('서버상의 오류가 발생하였습니다. 잠시후 다시 시도해주십시오.');
      }
    }
  } else {
    let askToInterest = confirm('관심목록에서 추가하시겠습니까?');
    if(askToInterest) {
      const response = await volProgramAPI.addInterestVolProgram(volDetail.value.no);
      if(response.data.result === 'success') {
        alert('관심목록에 추가되었습니다.');
        router.go();
      } else {
        alert('서버상의 오류가 발생하였습니다. 잠시후 다시 시도해주십시오.');
      }
    }
  }
}

const route = useRoute();
let programNo = ref(route.query.programNo);

async function getVolPrgmDtl() {
  loadingContainer.value.classList.add('loading');
  await volProgramAPI.getVolProgramDetail(programNo.value)
  .then(response => {
    const data = response.data.volProgram;
    let newData = {
      no: data.programNo,
      title: data.programTitle,
      actDate: `${dateFormat(data.actBgnDate)} - ${dateFormat(data.actEndDate)}`,
      actTime: `${data.actBgnTime}시 - ${data.actEndTime}시`,
      recruitDate: `${dateFormat(data.recruitBgnDate)} - ${dateFormat(data.recruitEndDate)}`,
      recruitCenter: data.recruitName,
      recruitStts: data.recruitStts,
      recruitCnt: data.recruitCnt,
      applyCnt: data.applyCnt,
      region: findRegionWithRegionNo(data.regionNo, store.state.regionCode.regionList),
      actPlace: data.actPlace,
      ctg: findClsWithClsNo(data.programCtg, store.state.categoryCode.categoryList),
      adultTeen: `${data.adultPosbl === 1 ? '성인' : ''} ${data.teenPosbl === 1 ? '청소년' : ''}`,
      mngName: data.mngName,
      mngTel: data.mngTel,
      content: data.content,
      fileName: data.battachOname,
      downloadFileUrl: `http://localhost/VolProgram/download_vol_pgrm_battach_file?programNo=${data.programNo}`,
      downloadImgUrl: `http://localhost/VolProgram/download_vol_pgrm_img_file?programNo=${data.programNo}`,
      isInterestAdded: response.data.isInterestAdded,
      isApplied: response.data.isApplied,
      location: data.location,
      isDataLoaded: true
    }
    console.log(newData);
    volDetail.value = newData;
  })
  .catch(error => {
    console.log('에러발생', error);
  });
  loadingContainer.value.classList.remove('loading');
  selectDateModal = new Modal(document.querySelector('#selectDateModal'));
}
//분야 이름 찾기
function findClsWithClsNo(clsNo, clsList) {
  let result = '';
  for (let highCls of clsList) {
    for (let lowCls of highCls.lowClsList) {
      if (lowCls.lowClsCode === clsNo) {
        result = `${highCls.highClsName} > ${lowCls.lowClsName}`
      }
    }
  }
  return result;
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
  return result.cityName + ' ' + result.countyName;
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.title-wrapper {
  height: 50px;
  margin-top: 15px;
  margin-bottom: 20px;
  border-top: 2px solid black;
  border-bottom: 1px solid black;
  background-color: rgb(238, 238, 238);
  display: flex;
  justify-content: center;
  align-items: center;
}

.rc-status {
  padding-left: 10px;
  padding-right: 10px;
  height: 30px;
  border-radius: 20px;
  background-color: rgb(240, 103, 4);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.custom_loader_wrapper {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  z-index: 999;
  display: none;
}

.loading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>