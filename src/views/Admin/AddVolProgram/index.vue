<template>
  <div>
    <TextHeader title="봉사 프로그램 추가" />
    <ViewVolProgramList  @changePageNo="changePageNo"/>
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
import { onMounted, provide, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import router from '@/router';

const loadingContainer = ref(null);

const route = useRoute();
const store = useStore();

const pageNo = ref(route.query.pageNo || 1);
const regionList = store.state.regionCode.regionList;


const responseData = ref({
  programList: [],
  pager: {
    //기본적인 VolProgramList화면에서 필요한 데이터
    numOfRows: 0, //페이지당 결과 수
    pageNo: 0, //현재 페이지번호
    totalCount: 0, //검색결과 총 갯수
    totalPage: 0, //페이지 총 갯수
    pageCntPerGroup: 0, //그룹당 페이지 갯수
    groupNo: 0, //현재 그룹번호
    groupCount: 0, //총 그룹 갯수
    startPageNo: 0, //현재 첫 페이지번호
    endPageNo: 0, //현재 끝 페이지번호
    pageNoList: []
  }
});

onMounted(() => {
  getProgramList(pageNo.value);
});

provide('responseData', responseData);

async function getProgramList(pageNo) {
  try {
    loadingContainer.value.classList.add('loading');
    let data = {pageNo};
    const response = await dataPortalAPI.getVolProgramList(data);
    let resultData = response.data.response.body;

    let pagerData = {
      numOfRows: resultData.numOfRows,
      pageNo: resultData.pageNo,
      totalCount: resultData.totalCount,
      totalPage: 0,
      pageCntPerGroup: 5,
      groupNo: 0,
      groupCount: 0,
      startPageNo: 0,
      endPageNo: 0,
      pageNoList: [],
    }
    if(pagerData.totalCount % pagerData.numOfRows) {
      pagerData.totalPage = Math.floor((pagerData.totalCount / pagerData.numOfRows) + 1);
    } else {
      pagerData.totalPage = Math.floor(pagerData.totalCount / pagerData.numOfRows);
    }
    if(pagerData.totalPage % pagerData.pageCntPerGroup) {
      pagerData.groupCount = Math.floor((pagerData.totalPage / pagerData.pageCntPerGroup) + 1);
    } else {
      pagerData.groupCount = Math.floor(pagerData.totalPage / pagerData.pageCntPerGroup);
    }
    pagerData.groupNo = Math.floor(( (pagerData.pageNo - 1) / pagerData.pageCntPerGroup ) + 1);
    pagerData.startPageNo = ( (pagerData.groupNo - 1) * pagerData.pageCntPerGroup ) + 1;
    pagerData.endPageNo = pagerData.startPageNo + pagerData.pageCntPerGroup - 1;
    if(pagerData.endPageNo > pagerData.totalPage) {
      pagerData.endPageNo = pagerData.totalPage;
    }

    for(let i = pagerData.startPageNo; i <= pagerData.endPageNo; i++) {
      pagerData.pageNoList.push(i);
    }
    responseData.value.pager = pagerData;
    console.log(responseData.value.pager);

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
  } catch (error) {
    console.log("에러 사유 : ", error);
    loadingContainer.value.classList.remove('loading');
    return null;
  }
}

watch(route, (newRoute, oldRoute) => {
  if(newRoute.query.pageNo) {
    getProgramList(newRoute.query.pageNo);
    pageNo.value = newRoute.query.pageNo;
  } else {
    getProgramList(1);
    pageNo.value = 1;
  }
})

function changePageNo(pageNo) {
  router.push({
    path: '/Details/Admin/AddVolProgram',
    query: {
      pageNo
    }
  });
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