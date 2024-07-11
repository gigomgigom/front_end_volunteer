<template>
    <TextHeader title="교육 프로그램 조회" />
    <ViewEduProgramList />
    <div class="custom_loader_wrapper" ref="loadingContainer">
      <div class="spinner-border" style="width: 7rem; height: 7rem;" role="status">
      </div>
    </div>
</template>

<script setup>
import store from '@/store';
import ViewEduProgramList from './ViewEduProgramList.vue';
import TextHeader from '@/components/Common/TextHeader.vue';
import { ref, provide, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';
import eduProgramAPI from '@/apis/eduProgramAPI';

const loadingContainer = ref(null);
const regionList = store.state.regionCode.regionList;

const route = useRoute();
const searchIndex = ref({
    pageNo: route.query.pageNo || 1,
    keyword: route.query.keyword || '',
    regionNo: route.query.regionNo,
    recruitStts: route.query.recruitStts || 0,
    searchBySearchIndex,
    changePageNo
});
provide('searchIndex', searchIndex);

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

function searchBySearchIndex() {
    getEduProgramList(1);
}
function changePageNo(pageNo) {
    if (pageNo > responseData.value.pager.totalPage || pageNo <= 0) {
    alert('페이지 인덱스가 벗어났습니다. 다시 초기화면으로 이동합니다.');
    window.location.href = '/Details/Admin/MngEduProgram';
    searchIndex.value.pageNo = 1;
  } else {
    searchIndex.value.pageNo = pageNo;
    router.push({
      path: '/Details/Admin/MngEduProgram',
      query: {
        pageNo: searchIndex.value.pageNo,
        keyword: searchIndex.value.keyword,
        regionNo: searchIndex.value.regionNo,
        recruitStts: searchIndex.value.recruitStts,
      }
    });
  }
}
onMounted(() => {
    getEduProgramList();
})
watch(route, (newRoute, oldRoute) => {
    searchIndex.value.pageNo = newRoute.query.pageNo;
    getEduProgramList();
})
async function getEduProgramList() {
    let data = {
        pageNo: searchIndex.value.pageNo,
        regionNo: searchIndex.value.regionNo,
        keyword: searchIndex.value.keyword,
        recruitStts: searchIndex.value.recruitStts
    }
    loadingContainer.value.classList.add('loading');
    try {
        const response = await eduProgramAPI.getEduProgramList(data);
        const prgmList = response.data.eduList;
        if(prgmList.length) {
            responseData.value.pager = setPager(response.data.pager);
            responseData.value.programList.length = 0;
            for(let eduProgram of prgmList) {
                let newObject = {
                    no: eduProgram.programNo,
                    center: findRegionWithRegionNo(eduProgram.recruitRegion, regionList),
                    rcCount: eduProgram.recruitCnt,
                    title: eduProgram.programTitle,
                    eduDate: dateFormat(eduProgram.actBgnDate) + ' - ' + dateFormat(eduProgram.actEndDate),
                    url: '',
                    isExternal: false
                }
                responseData.value.programList.push(newObject);
            }
        } else {
            alert('검색결과가 존재하지 않습니다.');
            window.location.href = '/Details/Admin/MngEduProgram';
        }
    } catch(error) {
        alert('에러가 발생했습니다.');
        console.log(error);
    }
    loadingContainer.value.classList.remove('loading');
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