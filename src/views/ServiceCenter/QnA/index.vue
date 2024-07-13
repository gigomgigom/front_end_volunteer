<template>
  <TextHeader title="질문과 답변 조회하기"/>
  <RouterView/>
  <div class="custom_loader_wrapper" ref="loadingContainer">
    <div class="spinner-border" style="width: 7rem; height: 7rem;" role="status">
    </div>
  </div>
</template>

<script setup>
import TextHeader from '@/components/Common/TextHeader.vue';
import { ref, provide, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import intergratedBoardAPI from '@/apis/intergratedBoardAPI';

const loadingContainer = ref(null);
const route = useRoute();
const router = useRouter();

//QNA 번호 
let boardCtg = 4;

const searchIndex = ref({
  pageNo: route.query.pageNo || 1,
  keywordIndex: route.query.keywrodIndex || 1,
  keyword: route.query.keyword || '',
  ctgNo: boardCtg,
  changePageNo,
  searchBySearchIndex
});

const responseData = ref({
  noticeList: [],
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

const memberInfo = ref({
  memberId: null,
  center:null
});

provide('responseData', responseData);
provide('searchIndex', searchIndex);
provide('memberInfo', memberInfo);
provide('boardCtg', boardCtg);

onMounted(() => {
  getNoticeList();
});

async function getNoticeList() {
  let data = {
    pageNo: searchIndex.value.pageNo,
    keyword: searchIndex.value.keyword,
    keywordIndex: searchIndex.value.keywordIndex,
    ctgNo:searchIndex.value.ctgNo
  }
  
  loadingContainer.value.classList.add('loading');
  const memberResponse = await intergratedBoardAPI.getMemberInfo();
  memberInfo.value.memberId = memberResponse.data.memberId;
  memberInfo.value.center = memberResponse.data.affCenter;
  console.log('실행', memberResponse.data);
  const response = await intergratedBoardAPI.getBoardList(data);
  //페이저 세팅
  responseData.value.pager = setPager(response.data.pager);
  //공지사항 목록 세팅
  const noticeList = response.data.boardList;
  //상태 데이터(목록) 초기화
  responseData.value.noticeList.length = 0;
  
  for (let notice of noticeList) {
    
    let newObject = {
      no :notice.boardNo,
      title: notice.title,
      writer: notice.memberId,
      date: dateFormat(notice.boardDate),
      adminReply: notice.adminReply
    }
    responseData.value.noticeList.push(newObject);
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
//요청경로가 변경되었을때 페이지번호에 맞는 공지사항을 가져온다. (param값이 없을경우 pageNo는 1로 지정)
watch(route, () => {
  getNoticeList();
})
//pagination에서 버튼을 클릭했을때 현재 페이지 새로고침하며 param으로 pageNo를 넘겨준다.
function changePageNo(pageNo) {
  if (pageNo > responseData.value.pager.totalPage || pageNo <= 0) {
    alert('페이지 인덱스가 벗어났습니다. 다시 초기화면으로 이동합니다.');
    router.push({
      path: '/Details/ServiceCenter/QNA/ViewQnaList'
    });
    searchIndex.value.pageNo = 1;
  } else {
    searchIndex.value.pageNo = pageNo;
    router.push({
      path: '/Details/ServiceCenter/QNA/ViewQnaList',
      query: {
        pageNo: searchIndex.value.pageNo,
        keyword: searchIndex.value.keyword,
        keywordIndex: searchIndex.value.keywordIndex
      }
    });
  }
}
//검색하기 기능
function searchBySearchIndex() {
  changePageNo(1)
}

provide('moveList',moveList);

function moveList(){
router.push("/Details/ServiceCenter/QNA/ViewQnaList")
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