<template>
  <div class="d-flex justify-content-end">
    <HighlightButton text="신청하기" class="me-2" @buttonClick="applyOrCancel()" v-if="!detailData.isEduApplExist"/>
  </div>
  <div class="title-wrapper">
    <div class="rc-status"><b>{{ detailData.recruitStts === 1 ? '모집중' : '모집완료' }}</b></div>
    <h5><b>{{ detailData.title }}</b></h5>
  </div>
  <EduPrgmDetail />
</template>

<script setup>
import EduPrgmDetail from '@/components/EduPrgmDetail.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import { ref, provide, onMounted } from 'vue';
import router from '@/router';
import eduProgramAPI from '@/apis/eduProgramAPI';
import { useRoute } from 'vue-router';
import store from '@/store';
import eduParticipateAPI from '@/apis/eduParticipateAPI';

const route = useRoute();
const detailData = ref({
  no: route.query.programNo,
  title: '',
  eduDate: '',
  eduTime: '',
  recruitCnt: '',
  applyCnt: '',
  recruitDate: '',
  recruitCenter: '',
  region: '',
  actPlace: '',
  mngName: '',
  content: '',
  mngTel: '',
  fileName: '',
  location: '',
  recruitStts: 0,
  isEduApplExist: false,
  isDataLoaded: false
});
provide('detail', detailData);

onMounted(() => {
  applyEduProgram();
})

async function applyEduProgram() {
  detailData.value.isDataLoaded = false;
  try {
    const response = await eduProgramAPI.getEduProgramDetail(detailData.value.no);
    if (response.data.result === 'success') {
      const eduProgram = response.data.eduProgram;
      let newObject = {
        no: detailData.value.no,
        title: eduProgram.programTitle,
        eduDate: dateFormat(eduProgram.actBgnDate) + ' ~ ' + dateFormat(eduProgram.actEndDate),
        eduTime: eduProgram.actBgnTime + '시 ~ ' + eduProgram.actEndTime + '시',
        recruitCnt: eduProgram.recruitCnt,
        applyCnt: eduProgram.applyCnt,
        recruitDate: dateFormat(eduProgram.recruitBgnDate) + ' ~ ' + dateFormat(eduProgram.recruitEndDate),
        recruitCenter: findRegionWithRegionNo(Number(eduProgram.recruitRegion), store.state.regionCode.regionList) + ' 자원봉사센터',
        region: findRegionWithRegionNo(Number(eduProgram.recruitRegion), store.state.regionCode.regionList),
        actPlace: eduProgram.actPlace,
        mngName: eduProgram.mngName,
        mngTel: eduProgram.mngTel,
        fileName: eduProgram.battachOname,
        location: eduProgram.location,
        content: eduProgram.content,
        recruitStts: eduProgram.recruitStts,
        isEduApplExist: response.data.isEduApplExist !== 0 ? true : false
      }
      console.log(eduProgram.isEduApplExist);
      console.log(typeof eduProgram.isEduApplExist);
      detailData.value = newObject;
    } else {
      alert('프로그램이 존재하지 않습니다. 다시 시도해주십시오');
      router.push('/Details/Participation/VolTraining/ViewEduProgramList');
    }
  } catch (error) {
    console.log(error);
    alert('서버 통신 중 오류가 발생했습니다. 잠시 후 다시 시도해주십시오');
    router.go();
  }
  detailData.value.isDataLoaded = true;
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
//DATE객체를 문자열(YYYY-MM-DD)로 변환
function dateFormat(dateStr) {
  const date = new Date(dateStr);
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;

  return date.getFullYear() + '-' + month + '-' + day;
}
async function applyOrCancel() {
  if (detailData.value.isEduApplExist) {
    const confirmToCancel = confirm('신청을 취소하게 되면 해당 프로그램을 다시 신청하실 수 없습니다.\n정말로 취소하시겠습니까?');
    if (confirmToCancel) {
      try {
        //신청취소
        const response = await eduParticipateAPI.cancelEduProgram(detailData.value.no);
        console.log(response.data);
        if (response.data.result === 'success') {
          alert('신청이 취소되었습니다.');
          router.go();
        } else {
          alert(response.data.reason);
          router.go();
        }
      } catch (error) {
        alert('서버 통신간 오류가 발생하였습니다. 잠시 후 다시 시도해주세요.');
        router.go();
      }
    }
  } else {
    try {
      //신청하기
      const response = await eduParticipateAPI.applyEduProgram(detailData.value.no);
      console.log(response.data);
      if(response.data.result === 'success') {
        alert('신청이 완료되었습니다.');
        router.go();
      } else {
        alert('정상적으로 신청 작업이 완료되지 않았습니다.');
        //router.go();
      }
    } catch (error) {
      alert('서버 통신간 오류가 발생하였습니다. 잠시 후 다시 시도해주세요.');
      console.log(error);
      //router.go();
    }
  }
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