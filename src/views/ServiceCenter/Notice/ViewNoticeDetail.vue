<template>
  <BoardDetail/>
  <EditDeleteButtons/>
  <MovePost @moveList="moveList" v-if="loadEnd"/>
  <div style="height: 100px;"></div>
  <div class="custom_loader_wrapper" ref="loadingContainer">
    <div class="spinner-border" style="width: 7rem; height: 7rem;" role="status">
    </div>
  </div>
</template>

<script setup>
import BoardDetail from  '@/components/BoardDetail.vue';
import MovePost from '@/components/MovePost.vue';
import EditDeleteButtons from '@/components/EditDeleteButtons.vue';
import { inject,provide, ref } from 'vue';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import intergratedBoardAPI from '@/apis/intergratedBoardAPI';
const moveList = inject("moveList");
const loadEnd = ref(false);
//게시글의 번호를 받아서 객체를 생성하고 provide로 boardDetail로 넘겨주고
//페이지 상세 데이터 보여주기 
const route = useRoute();
const Num = route.query.boardNo;
let formData = ref({});
let boardDto = ref({});
provide("boardDetail", formData);
provide("boardDto", boardDto);
onMounted(() => { 
  getBoardByNo(Num);
});




async function getBoardByNo(boardNo) {
  const response = await intergratedBoardAPI.getBoardDetail(boardNo);
  console.log(response.data.battachOname)
  formData.value.title = response.data.title;
  formData.value.adminReply = response.data.adminReply;
  formData.value.battachData = response.data.battachData;
  formData.value.battachImg = response.data.battachImg;
  formData.value.battachOname = response.data.battachOname;
  formData.value.battachType = response.data.battachType;
  formData.value.boardCtg = response.data.boardCtg;
  formData.value.boardDate = dateFormat(response.data.boardDate);
  formData.value.content = response.data.content;
  formData.value.hitCnt = response.data.hitCnt;
  formData.value.imgData = response.data.imgData;
  formData.value.imgOname = response.data.imgOname;
  formData.value.imgType = response.data.imgType;
  formData.value.memberId = response.data.memberId;
  formData.value.downloadFileUrl = `http://localhost/Board/download_board_battach_file?boardNo=${response.data.boardNo}`;
  formData.value.downloadImgUrl =  `http://localhost/Board/download_board_img_file?boardNo=${response.data.boardNo}`;
  formData.value.boardNo = response.data.boardNo;
  boardDto.value.boardNo = formData.value.boardNo;
  boardDto.value.boardCtg = formData.value.boardCtg;
  loadEnd.value = true;
}

function dateFormat(dateStr) {
  const date = new Date(dateStr);
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;

  return date.getFullYear() + '-' + month + '-' + day;
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