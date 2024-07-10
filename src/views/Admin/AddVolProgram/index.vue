<template>
  <div>
    <TextHeader title="봉사 프로그램 추가" />
    <ViewVolProgramList @changePageNo="changePageNo" />
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
const regionList = store.state.regionCode.regionList;

const searchIndex = ref({
  pageNo: route.query.pageNo || 1,
  keyword: route.query.keyword || '',
  startDate: route.query.startDate || null,
  endDate: route.query.endDate || null,
  regionNo: route.query.regionNo,
  ctgNo: route.query.ctgNo,
  recruitStts: route.query.recruitStts || 0,
  adultPosbl: route.query.adultPosbl,
  teenPosbl: route.query.teenPosbl,
  searchBySearchIndex
});

provide('searchIndex', searchIndex);



//프로그램 목록과 pagination 구현을 위한 pager객체를 가져온다.
const responseData = ref({
  programList: [],
  pager: {
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
  getProgramList();
});
function searchBySearchIndex() {
  getProgramList();
}
provide('responseData', responseData);

//프로그램 목록 가져오는 함수 (페이지 번호를 받아야됨)
async function getProgramList() {
  try {
    //작업하는 동안 로딩 화면 보여주기
    loadingContainer.value.classList.add('loading');
    let rqstData = { 
      pageNo: searchIndex.value.pageNo,
      keyword: searchIndex.value.keyword,
      schCateGu: 'all',
      progrmBgnde: searchIndex.value.startDate,
      startDate: searchIndex.value.endDate,
      schSign1: searchIndex.value.regionNo === 0 ? null : searchIndex.value.regionNo,
      nanmClCode: searchIndex.value.ctgNo,
      adultPosblAt: searchIndex.value.adultPosbl ? 'Y' : null,
      yngbgsPosblAt: searchIndex.value.teenPosbl ? 'Y' : null
     };
    //통신 작업 후 데이터를 가져옴
    const response = await dataPortalAPI.getVolProgramList(rqstData);
    let resultData = response.data.response.body;

    //통신후 받고 세팅할 페이저 객체 초기화
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
    //전체 페이지 수
    if (pagerData.totalCount % pagerData.numOfRows) {
      pagerData.totalPage = Math.floor((pagerData.totalCount / pagerData.numOfRows) + 1);
    } else {
      pagerData.totalPage = Math.floor(pagerData.totalCount / pagerData.numOfRows);
    }
    //전체 그룹 수
    if (pagerData.totalPage % pagerData.pageCntPerGroup) {
      pagerData.groupCount = Math.floor((pagerData.totalPage / pagerData.pageCntPerGroup) + 1);
    } else {
      pagerData.groupCount = Math.floor(pagerData.totalPage / pagerData.pageCntPerGroup);
    }
    //현재 그룹 번호
    pagerData.groupNo = Math.floor(((pagerData.pageNo - 1) / pagerData.pageCntPerGroup) + 1);
    //현재 그룹 시작번호
    pagerData.startPageNo = ((pagerData.groupNo - 1) * pagerData.pageCntPerGroup) + 1;
    //현재 그룹 끝번호
    pagerData.endPageNo = pagerData.startPageNo + pagerData.pageCntPerGroup - 1;
    //만약 그룹 끝번호가 전체 페이지번호보다 크면 전체 페이지번호로 set
    if (pagerData.endPageNo > pagerData.totalPage) {
      pagerData.endPageNo = pagerData.totalPage;
    }
    //pagination 버튼을 생성하기 위한 페이지번호 목록을 만든다.
    for (let i = pagerData.startPageNo; i <= pagerData.endPageNo; i++) {
      pagerData.pageNoList.push(i);
    }
    //하위 컴포넌트에게 보낼 데이터에 대입해준다.
    responseData.value.pager = pagerData;

    //프로그램 목록을 초기화시켜준다.
    responseData.value.programList.length = 0;
    //통신에서 응답받은 프로그램 목록
    let resultList = resultData.items.item;
    //목록에서 프로그램 정보를 담은 객체를 반복해서 찾고 하위컴포넌트에게 보낼 배열에 추가시켜준다.
    for (let program of resultList) {
      //모집 시작/종료 일자
      let rcStart = `${program.noticeBgnde.toString().substring(0, 4)}.${program.noticeBgnde.toString().substring(4, 6)}.${program.noticeBgnde.toString().substring(6, 8)}`;
      let rcEnd = `${program.noticeEndde.toString().substring(0, 4)}.${program.noticeEndde.toString().substring(4, 6)}.${program.noticeEndde.toString().substring(6, 8)}`
      //봉사 시작/종료 일자
      let actStart = `${program.progrmBgnde.toString().substring(0, 4)}.${program.progrmBgnde.toString().substring(4, 6)}.${program.progrmBgnde.toString().substring(6, 8)}`;
      let actEnd = `${program.progrmEndde.toString().substring(0, 4)}.${program.progrmEndde.toString().substring(4, 6)}.${program.progrmEndde.toString().substring(6, 8)}`;
      //시/도, 군/구 이름 찾기
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
      //찾아낸 봉사프로그램 정보들로 객체를 만든다.
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
      //하위컴포넌트에게 보낼 봉사프로그램 배열에 만든 객체(봉사프로그램 정보)를 추가한다.
      responseData.value.programList.push(newObject);
      //모든 작업이 끝났으므로 로딩창을 없앤다.
    }
  } catch (error) {
    console.log("에러 사유 : ", error);
    if (searchIndex.value.pageNo < 1 || searchIndex.value.pageNo > responseData.value.pager.totalPage) {
      alert('페이지 인덱스 범위에 벗어났습니다. 초기화면으로 돌아갑니다.');
    } else {
      alert('서버와 통신 중 에러가 발생했습니다. 초기화면으로 돌아갑니다.');
    }
    router.push('/Details/Admin');
  }
  loadingContainer.value.classList.remove('loading');
}
//요청경로가 변경되었을때 페이지번호에 맞는 봉사프로그램 목록을 가져온다. (param값이 없을경우 pageNo는 1로 지정)
watch(route, (newRoute, oldRoute) => {
  if (newRoute.query.pageNo) {
    searchIndex.value.pageNo = newRoute.query.pageNo;
    getProgramList();
  } else {
    searchIndex.value.pageNo = 1;
    getProgramList();
  }
})
//pagination에서 버튼을 클릭했을때 현재 페이지 새로고침하며 param으로 pageNo를 넘겨준다.
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