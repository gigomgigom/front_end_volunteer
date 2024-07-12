<template>
  <TextHeader title="관심 봉사" />
  <ViewInterestVolList />
  <div class="custom_loader_wrapper" ref="loadingContainer">
    <div class="spinner-border" style="width: 7rem; height: 7rem;" role="status">
    </div>
  </div>
</template>

<script setup>
import TextHeader from '@/components/Common/TextHeader.vue';
import ViewInterestVolList from './ViewInterestVolList.vue';
import volProgramAPI from '@/apis/volProgramAPI';
import { ref, provide, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const loadingContainer = ref(null);
const route = useRoute();
const router = useRouter();
const store = useStore();

const searchIndex = ref({
  pageNo: route.query.pageNo || 1,
  changePageNo,
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

watch(route, () => {
  getInterestVol();
})

onMounted(() => {
  getInterestVol();
})
provide('searchIndex', searchIndex);
provide('responseData', responseData);

async function getInterestVol() {
  loadingContainer.value.classList.add('loading');
  const response = await volProgramAPI.getInterestVolList(searchIndex.value.pageNo);
  //페이저 세팅
  responseData.value.pager = setPager(response.data.pager);
  //관심봉사목록 세팅
  const interestVolPrgmList = response.data.volList;
  //상태 데이터(목록) 초기화
  responseData.value.programList.length = 0;
  for (let vol of interestVolPrgmList) {
    let cityCounty = findRegionWithRegionNo(vol.regionNo, store.state.regionCode.regionList);
    let clsName = findClsWithClsNo(vol.programCtg, store.state.categoryCode.categoryList);
    let rcStart = dateFormat(vol.recruitBgnDate);
    let rcEnd = dateFormat(vol.recruitEndDate);
    let actStart = dateFormat(vol.actBgnDate);
    let actEnd = dateFormat(vol.actEndDate);
    let newObject = {
      no: vol.programNo,
      title: vol.programTitle,
      region: cityCounty.cityName + ' ' + cityCounty.countyName,
      recruitCenter: vol.recruitName,
      recruitDate: `${rcStart} - ${rcEnd}`,
      volDate: `${actStart} - ${actEnd}`,
      volTime: `${vol.actBgnTime}:00 - ${vol.actEndTime}:00`,
      classification: clsName,
      url: `/Details/Participation/VolProgram/ViewVolProgramDetail?programNo=${vol.programNo}`,//url이동 경로 값을 가져와야함
      isExternal: false
    }
    responseData.value.programList.push(newObject);
  }
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

function changePageNo(pageNo) {
  if (pageNo > responseData.value.pager.totalPage || pageNo <= 0) {
    alert('페이지 인덱스가 벗어났습니다. 다시 초기화면으로 이동합니다.');
    searchIndex.value.pageNo = 1;
    router.push({
      path: '/Details/MyPage/Interest/ViewInterestVolList'
    });
  } else {
    searchIndex.value.pageNo = pageNo;
    router.push({
      path: '/Details/MyPage/Interest/ViewInterestVolList',
      query: {
        pageNo: searchIndex.value.pageNo
      }
    });
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