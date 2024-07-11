<template>
    <TextHeader title="교육 프로그램 추가" />
    <ViewEduProgramList @changePageNo="changePageNo" />
    <div class="custom_loader_wrapper" ref="loadingContainer">
        <div class="spinner-border" style="width: 7rem; height: 7rem;" role="status">
        </div>
    </div>
</template>

<script setup>
import ViewEduProgramList from './ViewEduProgramList.vue';
import TextHeader from '@/components/Common/TextHeader.vue';
import dataPortalAPI from '@/apis/dataPortalAPI';
import router from '@/router';
import { useRoute } from 'vue-router';
import { onMounted, ref, provide, watch } from 'vue';

const route = useRoute();
const pageNo = ref(route.query.pageNo || 1);

const loadingContainer = ref(null);
const searchIndex = ref({
  pageNo: route.query.pageNo || 1,
  keyword: route.query.keyword || '',
  regionNo: route.query.regionNo,
  recruitStts: route.query.recruitStts || 0,
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
onMounted(() => {
    getProgramList(pageNo.value);
});

async function getProgramList(pageNo) {
    try {
        loadingContainer.value.classList.add('loading');
        let data = { pageNo };
        const response = await dataPortalAPI.getEduProgramList(data);
        let resultData = response.data.response.body;
        console.log(resultData);
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
        for (let program of resultList) {
            //봉사 시작/종료 일자
            let eduStart = `${program.edcBgnde.toString().substring(0, 4)}.${program.edcBgnde.toString().substring(4, 6)}.${program.edcBgnde.toString().substring(6, 8)}`;
            let eduEnd = `${program.edcEndde.toString().substring(0, 4)}.${program.edcEndde.toString().substring(4, 6)}.${program.edcEndde.toString().substring(6, 8)}`;
            let newObject = {
                no: program.crclmRegistNo,
                center: program.edcMnnstNm,
                rcCount: program.edcNmpr,
                title: program.crclmNm,
                eduDate: `${eduStart} - ${eduEnd}`,
                url: `https://www.1365.go.kr/vols/P9310/srvcgud/eduSearch.do?type=show&crclmRegistNo=${program.crclmRegistNo}`,
                isExternal: true
            }
            responseData.value.programList.push(newObject);
        }
    } catch (error) {
        console.log('에러가 발생함 ㅇㅇ', error);
        if (pageNo < 1 || pageNo > responseData.value.pager.totalPage) {
            alert('페이지 인덱스 범위에 벗어났습니다. 초기화면으로 돌아갑니다.');
        } else {
            alert('서버와 통신 중 에러가 발생했습니다. 초기화면으로 돌아갑니다.');
        }
        router.push('/Details/Admin/AddEduProgram');
    }
    loadingContainer.value.classList.remove('loading');
}
watch(route, (newRoute, oldRoute) => {
    if (newRoute.query.pageNo) {
        getProgramList(newRoute.query.pageNo);
        pageNo.value = newRoute.query.pageNo;
    } else {
        getProgramList(1);
        pageNo.value = 1;
    }
})
//pagination에서 버튼을 클릭했을때 현재 페이지 새로고침하며 param으로 pageNo를 넘겨준다.
function changePageNo(pageNo) {
  router.push({
    path: '/Details/Admin/AddEduProgram',
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