<template>
  <div class="d-flex justify-content-end">
    <HighlightButton text="신청하기" class="me-2" @buttonClick="showModal()" />
    <NormalButton text="관심목록 담기" />
  </div>
  <div class="title-wrapper">
    <div class="rc-status"><b>모집중</b></div>
    <h5><b>양평서부청소년문화의집 청소년커뮤니티공간 유스피크닉 운영보조</b></h5>
  </div>
  <VolPrgmDetail/>
  <MovePost />
  <SelectDateModal id="selectDateModal" />
</template>

<script setup>
import VolPrgmDetail from '@/components/VolPrgmDetail.vue';
import MovePost from '@/components/MovePost.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';
import SelectDateModal from './SelectDateModal.vue';
import volProgramAPI from '@/apis/volProgramAPI';
import { onMounted, provide, ref } from 'vue';
import { Modal } from 'bootstrap';
import { useRoute } from 'vue-router';
import store from '@/store';
//모달 창 띄울때 사용되는 참조객체 및 메소드
let selectDateModal = null;
onMounted(() => {
  selectDateModal = new Modal(document.querySelector('#selectDateModal'));
  getVolPrgmDtl();
})
function showModal() {
  selectDateModal.show();
}
//프로그램 상세정보 가져오기
const volDetail = ref({
  no: 0,
  title: '',
  actDate: '',
  actTime: '',
  recruitDate: '',
  recruitCenter: '',
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
  isDataLoaded: false
})

provide('volDetail', volDetail);

const route = useRoute();
let programNo = ref(route.query.programNo);
async function getVolPrgmDtl() {
  volProgramAPI.getVolProgramDetail(programNo.value)
  .then(response => {
    const data = response.data.volProgram;
    let newData = {
      no: data.programNo,
      title: data.programTitle,
      actDate: `${dateFormat(data.actBgnDate)} - ${dateFormat(data.actEndDate)}`,
      actTime: `${data.actBgnTime}시 - ${data.actEndTime}시`,
      recruitDate: `${dateFormat(data.recruitBgnDate)} - ${dateFormat(data.recruitEndDate)}`,
      recruitCenter: data.recruitName,
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
      location: data.location,
      isDataLoaded: true
    }
    console.log(newData);
    volDetail.value = newData;
  })
  .catch(error => {
    console.log('에러발생', error);
  });
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
</style>