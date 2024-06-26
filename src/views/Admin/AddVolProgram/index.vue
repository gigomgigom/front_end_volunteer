<template>
  <div>
    <TextHeader title="봉사 프로그램 추가" />
    <ViewVolProgramList />
    <div class="custom_loader_wrapper" ref="loadingContainer">
      <div class="spinner-border" style="width: 7rem; height: 7rem;" role="status">
      </div>
    </div>
  </div>
</template>

<script setup>
import TextHeader from '@/components/Common/TextHeader.vue';
import ViewVolProgramList from './ViewVolProgramList.vue';
import dataPortalAPI from '@/apis/dataPortalAPI';
import { onMounted, provide, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const regionList = store.state.regionCode.regionList;
const loadingContainer = ref(null);

const responseData = ref({
  programList: [],
  pager: {
    numOfRows: 0,
    pageNo: 0,
    totalCount: 0
  }
});

onMounted(() => {
  getProgramList();
});

provide('responseData', responseData);
async function getProgramList() {
  try {
    loadingContainer.value.classList.add('loading');
    let data = {};
    const response = await dataPortalAPI.getVolProgramList(data);
    let resultData = response.data.response.body;
    responseData.value.pager.numOfRows = resultData.numOfRows;
    responseData.value.pager.pageNo = resultData.pageNo;
    responseData.value.pager.totalCount = resultData.totalCount;
    let resultList = resultData.items.item;
    for (let program of resultList) {
      let rcStart = `${program.noticeBgnde.toString().substring(0, 4)}.${program.noticeBgnde.toString().substring(4, 6)}.${program.noticeBgnde.toString().substring(6, 8)}`;
      let rcEnd = `${program.noticeEndde.toString().substring(0, 4)}.${program.noticeEndde.toString().substring(4, 6)}.${program.noticeEndde.toString().substring(6, 8)}`
      let actStart = `${program.progrmBgnde.toString().substring(0, 4)}.${program.progrmBgnde.toString().substring(4, 6)}.${program.progrmBgnde.toString().substring(6, 8)}`;
      let actEnd = `${program.progrmEndde.toString().substring(0, 4)}.${program.progrmEndde.toString().substring(4, 6)}.${program.progrmEndde.toString().substring(6, 8)}`;
      let cityName = '';
      let countyName = '';
      for (let city of regionList) {
        for (let county of city.county) {
          if (county.countyCode === program.gugunCd) {
            cityName = city.cityName;
            countyName = county.countyName;
          }
        }
      }

      let newObject = {
        no: program.progrmRegistNo,
        title: program.progrmSj,
        region: cityName + ' ' + countyName,
        recruitCenter: program.nanmmbyNm,
        recruitDate: `${rcStart} - ${rcEnd}`,
        volDate: `${actStart} - ${actEnd}`,
        volTime: `${program.actBeginTm}:00 - ${program.actEndTm}:00`,
        classification: program.srvcClCode,
        url: program.url,
        isExternal: true
      }
      responseData.value.programList.push(newObject);
      loadingContainer.value.classList.remove('loading');
    }
    /* 
    {
      items : { item:배열객체 }
      numOfRows: 한 페이지당 갯수
      pageNo: 현재 페이지수
      totalCount: 전체 갯수
    } 
    
    item : [
      {
        progrmRegistNo: 프로그램 등록번호
        actBeginTm: 봉사시작시간
        actEndTm: 봉사종료시간
        actPlace: 봉사장소
        adultPosblAt: 성인가능여부
        yngbgsPosblAt: 청소년가능여부
        sidoCd: 시도코드
        gugunCd: 군구코드
        nanmmbyNm: 모집기관
        noticeBgnde: 모집시작일
        noticeEndde: 모집종료일
        progrmBgnde: 봉사시작일
        progrmEndde: 봉사종료일
        progrmSj: 프로그램 제목
        srvcClCode: 분야코드
        url: 상세정보 페이지주소
        
      }
    ]
    */
  } catch (error) {
    console.log("에러 사유 : ", error);
    return null;
  }
}
</script>

<style scoped>
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