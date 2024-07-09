<template>
  <div id="view-programlist-wrapper">
    <h5>🔶봉사조회</h5>
    <SearchVolPgrm />
    <VolPrgmList>
      <template v-slot:right-side="{ index }">
        <div class="right-side">
          <span>마감</span>
          <span style="color: rgb(240, 103, 4);">{{ isOverDeadline(index) }}</span>
        </div>
      </template>
    </VolPrgmList>
    <NavBar />
    <div class="custom_loader_wrapper" ref="loadingContainer">
      <div class="spinner-border" style="width: 7rem; height: 7rem;" role="status">
      </div>
    </div>
  </div>
</template>

<script setup>
import volProgramAPI from '@/apis/volProgramAPI';
import NavBar from '@/components/Common/NavBar.vue';
import SearchVolPgrm from '@/components/SearchVolPgrm.vue';
import VolPrgmList from '@/components/VolPrgmList.vue';
import store from '@/store';
import { ref, provide, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const loadingContainer = ref(null);
const route = useRoute();
const router = useRouter();

const searchIndex = ref({
  pageNo: route.query.pageNo || 1,
  keyword: route.query.keyword || '',
  startDate: route.query.startDate || null,
  endDate: route.query.endDate || null,
  regionNo: route.query.regionNo || 0,
  ctgNo: route.query.ctgNo || '',
  recruitStts: route.query.recruitStts || 0,
  adultPosbl: route.query.adultPosbl || false,
  teenPosbl: route.query.teenPosbl || false,
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
//봉사프로그램 목록가져오기
async function getVolProgramList() {
  let data = {
    pageNo: searchIndex.value.pageNo,
    keyword: searchIndex.value.keyword,
    regionNo: searchIndex.value.regionNo,
    ctgNo: searchIndex.value.ctgNo,
    recruitStts: searchIndex.value.recruitStts,
    adultPosbl: searchIndex.value.adultPosbl === 'true' ? 1 : 0,
    teenPosbl: searchIndex.value.teenPosbl === 'true' ? 1 : 0
  }
  if (searchIndex.value.startDate !== null && searchIndex.value.endDate !== null) {
    data.startDate = searchIndex.value.startDate;
    data.endDate = searchIndex.value.endDate;
  }
  loadingContainer.value.classList.add('loading');
  const response = await volProgramAPI.getVolProgramList(data);
  //페이저 세팅
  responseData.value.pager = setPager(response.data.pager);
  //봉사프로그램 목록 세팅
  const volList = response.data.volList;
  if (volList.length) {
    //상태 데이터 (목록) 초기화하기
    responseData.value.programList.length = 0;
    for (let volProgram of volList) {
      //지역 찾기
      let cityCounty = findRegionWithRegionNo(volProgram.regionNo, store.state.regionCode.regionList);
      //분야명 찾기
      let clsName = findClsWithClsNo(volProgram.programCtg, store.state.categoryCode.categoryList);
      //모집기간 찾기
      let rcStart = dateFormat(volProgram.recruitBgnDate);
      let rcEnd = dateFormat(volProgram.recruitEndDate);
      //봉사시간 찾기
      let actStart = dateFormat(volProgram.actBgnDate);
      let actEnd = dateFormat(volProgram.actEndDate);
      let newObject = {
        no: volProgram.programNo,
        title: volProgram.programTitle,
        region: cityCounty.cityName + ' ' + cityCounty.countyName,
        recruitCenter: volProgram.recruitName,
        recruitDate: `${rcStart} - ${rcEnd}`,
        volDate: `${actStart} - ${actEnd}`,
        volTime: `${volProgram.actBgnTime}:00 - ${volProgram.actEndTime}:00`,
        classification: clsName,
        url: "",//url이동 경로 값을 가져와야함
        isExternal: false
      }
      responseData.value.programList.push(newObject);
    }
  } else {
    alert('검색결과가 존재하지 않습니다.');
    window.location.href = '/Details/Participation/VolProgram/ViewVolProgramList';
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
//pagination에서 버튼을 클릭했을때 현재 페이지 새로고침하며 param으로 pageNo를 넘겨준다.
function changePageNo(pageNo) {
  if (pageNo > responseData.value.pager.totalPage || pageNo <= 0) {
    alert('페이지 인덱스가 벗어났습니다. 다시 초기화면으로 이동합니다.');
    window.location.href = '/Details/Participation/VolProgram/ViewVolProgramList';
    searchIndex.value.pageNo = 1;
  } else {
    searchIndex.value.pageNo = pageNo;
    router.push({
      path: '/Details/Participation/VolProgram/ViewVolProgramList',
      query: {
        pageNo: searchIndex.value.pageNo,
        keyword: searchIndex.value.keyword,
        startDate: searchIndex.value.startDate,
        endDate: searchIndex.value.endDate,
        regionNo: searchIndex.value.regionNo,
        ctgNo: searchIndex.value.ctgNo,
        recruitStts: searchIndex.value.recruitStts,
        adultPosbl: searchIndex.value.adultPosbl,
        teenPosbl: searchIndex.value.teenPosbl
      }
    });
  }
}
//검색하기 기능
function searchBySearchIndex() {
  changePageNo(1)
}
//마감일자 계산
function isOverDeadline(index) {
  let dateList = responseData.value.programList[index].recruitDate.split(' - ');
  let endDate = new Date(dateList[1]);
  if (endDate.getTime() < new Date().getTime()) {
    return '';
  } else {
    let timeDiff = endDate.getTime() - new Date().getTime();
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + '일전';
  }
}
//요청경로가 변경되었을때 페이지번호에 맞는 봉사프로그램 목록을 가져온다. (param값이 없을경우 pageNo는 1로 지정)
watch(route, () => {
  getVolProgramList();
})
onMounted(() => {
  getVolProgramList();
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

h5 {
  font-weight: bold;
  padding-bottom: 10px;
}

#view-programlist-wrapper {
  padding-top: 30px;
}

.right-side {
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid silver;
  color: gray;
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