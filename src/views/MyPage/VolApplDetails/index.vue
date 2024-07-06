<template>
  <TextHeader title="봉사 신청내역" />
  <Search />
  <ViewApplList />
  <div class="custom_loader_wrapper" ref="loadingContainer">
    <div class="spinner-border" style="width: 7rem; height: 7rem;" role="status">
    </div>
  </div>
</template>

<script setup>
import TextHeader from '@/components/Common/TextHeader.vue';
import ViewApplList from './ViewApplList.vue';
import Search from './Search.vue';
import { ref, provide, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import store from '@/store';
import volParticipateAPI from '@/apis/volParticipateAPI';

const loadingContainer = ref(null);
const route = useRoute();
const router = useRouter();

//페이지 번호를 받아온다.
const pageNo = ref(route.query.pageNo || 1);

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

provide('responseData', responseData);
provide('changePageNo', changePageNo);

onMounted(() => {
  getVolApplList(pageNo.value);
});

async function getVolApplList(pageNo) {
  let rqstData = {
    pageNo: pageNo
  }
  loadingContainer.value.classList.add('loading');
  const response = await volParticipateAPI.getVolPtcpList(rqstData);
  //페이저 세팅
  setPager(response.data.pager);
  //봉사 신청 내역 목록 세팅
  const volApplList = response.data.volApplList;
  //상태 데이터(목록) 초기화
  responseData.value.programList.length = 0;
  if (volApplList.length) {
    for (let volAppl of volApplList) {
      let program = volAppl.volDto;
      //지역 찾기
      let cityCounty = findRegionWithRegionNo(program.regionNo);
      //분야명 찾기
      let clsName = findClsWithClsNo(program.programCtg);
      //모집기간 찾기
      let rcStart = dateFormat(program.recruitBgnDate);
      let rcEnd = dateFormat(program.recruitEndDate);
      //봉사기간 찾기
      let actStart = dateFormat(program.actBgnDate);
      let actEnd = dateFormat(program.actEndDate);
      let newObject = {
        no: program.programNo,
        title: program.programTitle,
        region: cityCounty.cityName + ' ' + cityCounty.countyName,
        recruitCenter: program.recruitName,
        recruitDate: `${rcStart} - ${rcEnd}`,
        volDate: `${actStart} - ${actEnd}`,
        volTime: `${program.actBgnTime}:00 - ${program.actEndTime}:00`,
        classification: clsName,
        url: "",//url이동 경로 값을 가져와야함
        isExternal: false
      }
      responseData.value.programList.push(newObject);
    }
  } else {
    alert('페이지 인덱스가 벗어났습니다. 다시 초기화면으로 이동합니다.');
    router.push({
      path: '/Details/MyPage/VolApplDetails/ViewApplList'
    });
  }
  loadingContainer.value.classList.remove('loading');
}

//분야 이름 찾기
function findClsWithClsNo(clsNo) {
  let result = '';
  for (let highCls of store.state.categoryCode.categoryList) {
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
function findRegionWithRegionNo(regionNo) {
  let result = {
    cityName: '',
    countyName: '',
  }
  for (let city of store.state.regionCode.regionList) {
    for (let county of city.county) {
      if (county.countyCode === Number(regionNo)) {
        result.cityName = city.cityName;
        result.countyName = county.countyName;
      }
    }
  }
  return result;
}
//페이지네이션 정보 세팅
function setPager(rspPager) {
  let newPager = {
    numOfRows: rspPager.rowsPerPage, //페이지당 결과 수
    pageNo: rspPager.pageNo, //현재 페이지번호
    totalCount: rspPager.totalRows, //검색결과 총 갯수
    totalPage: rspPager.totalPageNo, //페이지 총 갯수
    pageCntPerGroup: rspPager.pagesPerGroup, //그룹당 페이지 갯수
    groupNo: rspPager.groupNo, //현재 그룹번호
    groupCount: rspPager.totalGroupNo, //총 그룹 갯수
    startPageNo: rspPager.startPageNo, //현재 첫 페이지번호
    endPageNo: rspPager.endPageNo, //현재 끝 페이지번호
    pageNoList: rspPager.pageArray
  }
  responseData.value.pager = newPager;
}
//요청경로가 변경되었을때 페이지번호에 맞는 봉사프로그램 목록을 가져온다. (param값이 없을경우 pageNo는 1로 지정)
watch(route, (newRoute, oldRoute) => {
  if (newRoute.query.pageNo) {
    getVolApplList(newRoute.query.pageNo);
    pageNo.value = newRoute.query.pageNo;
  } else {
    getVolApplList(1);
    pageNo.value = 1;
  }
})
//pagination에서 버튼을 클릭했을때 현재 페이지 새로고침하며 param으로 pageNo를 넘겨준다.
function changePageNo(pageNo) {
  router.push({
    path: '/Details/MyPage/VolApplDetails/ViewApplList',
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