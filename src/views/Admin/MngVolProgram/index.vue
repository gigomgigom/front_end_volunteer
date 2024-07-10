<template>
    <TextHeader title="봉사 프로그램 조회" />
    <ViewVolProgramList />
    <div class="custom_loader_wrapper" ref="loadingContainer">
        <div class="spinner-border" style="width: 7rem; height: 7rem;" role="status">
        </div>
    </div>
</template>

<script setup>
import volProgramAPI from '@/apis/volProgramAPI';
import ViewVolProgramList from './ViewVolProgramList.vue';
import TextHeader from '@/components/Common/TextHeader.vue';
import { ref, provide, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store';
import router from '@/router';
const loadingContainer = ref();
//리스트 데이터
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
//검색조건
const route = useRoute();
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
    searchBySearchIndex,
    changePageNo,
});
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
    responseData.value.pager = setPager(response.data.pager);
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
        url: `/Details/Participation/VolProgram/ViewVolProgramDetail?programNo=${volProgram.programNo}`,//url이동 경로 값을 가져와야함
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

function searchBySearchIndex() {
    changePageNo(1);
}
function changePageNo(pageNo) {
    if (pageNo > responseData.value.pager.totalPage || pageNo <= 0) {
    alert('페이지 인덱스가 벗어났습니다. 다시 초기화면으로 이동합니다.');
    window.location.href = '/Details/Admin/MngVolProgram';
    searchIndex.value.pageNo = 1;
  } else {
    searchIndex.value.pageNo = pageNo;
    router.push({
      path: '/Details/Admin/MngVolProgram',
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
onMounted(() => {
    getVolProgramList();
})
watch(route, (newRoute, oldRoute) => {
    searchIndex.value.pageNo = newRoute.query.pageNo;
    getVolProgramList();
})
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