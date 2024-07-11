<template>
  <div>
    <TextHeader title="실적 승인" />
    <div class="d-flex">
      <div>
        <h6 class="all">
          [전체 <span class="highlight">{{ responseData.pager.totalCount }}</span>건,
          현재페이지 <span class="highlight">{{ responseData.pager.pageNo }}</span>/{{ responseData.pager.totalPage }}]
        </h6>
      </div>
    </div>
    <div>
      <table class="table caption-top mt-2">
        <thead class="table-primary">
          <tr class="tablehead">
            <th scope="col" class="text-center" style="background-color: gainsboro;" colspan="3">프로그램명</th>
            <th scope="col" class="text-center" style="background-color: gainsboro;">사용자ID</th>
            <th scope="col" class="text-center" style="background-color: gainsboro;">이름</th>
            <th scope="col" class="text-center" style="background-color: gainsboro;">휴대폰번호</th>
            <th scope="col" class="no-border-right text-center" style="background-color: gainsboro;">요청일자</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rqst, index) in responseData.rqstList" :key="index" @click="viewDetail(rqst.memberId, rqst.volProgramNo)">
            <td colspan="3">{{ rqst.volProgramName }}</td>
            <td class="text-center">{{ rqst.memberId }}</td>
            <td class="text-center">{{ rqst.memberName }}</td>
            <td class="text-center" style="font-size: 0.8em">{{ rqst.memberTel }}</td>
            <td class="no-border-right text-center">{{ dateFormat(rqst.requestDate) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <NavBar/>
    <ViewRqstDetailModal id="rqstDetailModal" />
  </div>
</template>

<script setup>
import { onMounted, ref, provide, watch } from 'vue';
import { Modal } from 'bootstrap';
import ViewRqstDetailModal from './ViewRqstDetailModal.vue';
import TextHeader from '@/components/Common/TextHeader.vue';
import { useRoute } from 'vue-router';
import router from '@/router';
import adminAPI from '@/apis/adminAPI';
import NavBar from '@/components/Common/NavBar.vue';

let rqstDetailModal = null;
const route = useRoute();
const loadingContainer = ref(null);

const responseData = ref({
  rqstList: [],
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
const providedData = ref({
  fileOname: '',
  memberId: '',
  memberName: '',
  rqstContent: '',
  volProgram: {
    programNo: 0,
    actBgnDate: null,
    actEndDate: null,
    actBgnTime: 0,
    actEndTime: 0,
    actPlace: '',
    ctg: '',
    mngName: '',
    mngTel: '',
    recruitCenter: '',
    region: '',
    title: '',
  }
});
provide('providedData', providedData);
provide('responseData', responseData);
const searchIndex = ref({
  pageNo: route.query.pageNo || 1,
  changePageNo
});
provide('searchIndex', searchIndex);
//pagination에서 버튼을 클릭했을때 현재 페이지 새로고침하며 param으로 pageNo를 넘겨준다.
function changePageNo(pageNo) {
  router.push({
    path: '/Details/Admin/Approve',
    query: {
      pageNo
    }
  });
}
watch(route, (newRoute, oldRoute) => {
    searchIndex.value.pageNo = newRoute.query.pageNo;
    getApproveList();
})
async function viewDetail(memberId, programNo) {
  const response = await adminAPI.getApproveRequestDetail(memberId, programNo);
  providedData.value = response.data;
  providedData.value.volProgram.programNo = programNo;
  rqstDetailModal.show();
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
async function getApproveList() {
  try {
    const response = await adminAPI.getApproveRequestList(searchIndex.value.pageNo);
    console.log(response.data);
    if(response.data.items.length !== 0) {
      responseData.value.pager = setPager(response.data.pager);
      responseData.value.rqstList = response.data.items;
    }
    
  } catch (error) {
    alert('에러가 발생하였습니다. 다시 시도해주세요.');
    console.log(error);
  }
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
onMounted(() => {
  rqstDetailModal = new Modal(document.querySelector('#rqstDetailModal'));
  getApproveList();
});


</script>

<style scoped>
table {
  table-layout: fixed;
  width: 100%;

}

thead th {
  background-color: #666;
  text-align: left;
  border: 1px solid black;
}

td,
th {
  word-wrap: break-word;
  white-space: normal;
  padding: 12px 8px;
  vertical-align: middle;
  text-align: left;
  border: 1px solid #ddd;
}

.no-border-right {
  border-right: none;
}

.no-border-left {
  border-left: none;
}

.highlight {
  color: coral;
  font-weight: bolder;
}
</style>