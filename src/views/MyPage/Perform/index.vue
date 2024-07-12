<template>
  <TextHeader title="봉사 참여 실적" />
  <Search class="mb-5"/>
  <ViewPerformList/>
  <div class="custom_loader_wrapper" ref="loadingContainer">
    <div class="spinner-border" style="width: 7rem; height: 7rem;" role="status">
    </div>
  </div>
</template>

<script setup>
import TextHeader from '@/components/Common/TextHeader.vue';
import ViewPerformList from './ViewPerformList.vue';
import Search from './Search.vue';
import volParticipateAPI from '@/apis/volParticipateAPI';
import { useRoute, useRouter } from 'vue-router';
import { ref, provide, onMounted, watch } from 'vue';
import { useStore } from 'vuex';

const loadingContainer = ref(null);
const route = useRoute();
const router = useRouter();
const store = useStore();

const searchIndex = ref({
  pageNo: route.query.pageNo || 1,
  keyword: route.query.keyword || '',
  recruitCenter: route.query.recruitCenter || '',
  actDate: [],
  changePageNo,
  searchBySearchIndex
});

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
provide('searchIndex', searchIndex);

onMounted(() => {
  getPerformList();
})
async function getPerformList() {
  let data = {
    pageNo: searchIndex.value.pageNo,
    keyword: searchIndex.value.keyword,
    recruitCenter: searchIndex.value.recruitCenter,
  }
  if(searchIndex.value.actDate.length) {
    data.startDate = dateFormat(searchIndex.value.actDate[0]),
    data.endDate = dateFormat(searchIndex.value.actDate[1]);
  }
  loadingContainer.value.classList.add('loading');
  const response = await volParticipateAPI.getVolPerformList(data);
  //페이저 세팅
  responseData.value.pager = setPager(response.data.pager);
  //봉사 실적 내역 목록
  const volPerformList = response.data.volPerformList;
  //상태 데이터(목록) 초기화
  responseData.value.programList.length = 0;
  for (let volPerform of volPerformList) {
    let program = volPerform.volDto;
    //지역 찾기
    let cityCounty = findRegionWithRegionNo(program.regionNo, store.state.regionCode.regionList);
    //분야 찾기
    let clsName = findClsWithClsNo(program.programCtg, store.state.categoryCode.categoryList);
    //모집기간 찾기
    let rcStart = dateFormat(program.recruitBgnDate);
    let rcEnd = dateFormat(program.recruitEndDate);
    //봉사시간 찾기
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
      url: `/Details/Participation/VolProgram/ViewVolProgramDetail?programNo=${program.programNo}`,//url이동 경로 값을 가져와야함
      isExternal: false
    }
    responseData.value.programList.push(newObject);
  }
  responseData.value.volPerformList = volPerformList;
  loadingContainer.value.classList.remove('loading');
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
  return newPager;
}

watch(route, () => {
  getPerformList();
})

function changePageNo(pageNo) {
  if (pageNo > responseData.value.pager.totalPage || pageNo <= 0) {
    alert('페이지 인덱스가 벗어났습니다. 다시 초기화면으로 이동합니다.');
    router.push({
      path: '/Details/MyPage/Perform/ViewPerformList'
    });
    searchIndex.value.pageNo = 1;
  } else {
    searchIndex.value.pageNo = pageNo;
    router.push({
      path: '/Details/MyPage/Perform/ViewPerformList',
      query: {
        pageNo: searchIndex.value.pageNo,
        keyword: searchIndex.value.keyword,
        recruitCenter: searchIndex.value.recruitCenter,
        startDate: searchIndex.value.actDate[0],
        endDate: searchIndex.value.actDate[1]
      }
    });
  }
}

function searchBySearchIndex() {
  changePageNo(1)
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