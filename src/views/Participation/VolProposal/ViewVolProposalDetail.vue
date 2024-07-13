<template>
  <BoardDetail/>
  <Comment>
    <template v-slot:body>
      <div class="card-body" style="padding: 12px; padding-top: 10px; padding-bottom: 0; margin-bottom: 30px;">
        <div class="row">
            <div class="col-sm-12" style="">
                <span style="color: rgb(240, 103, 4);">{{ comment.writer }}</span>
                <span style="margin-left: 10px;">{{ comment.date }}</span>
            </div>
            <div class="row">
                <div class="col-sm-12" style="">
                    <span>{{ comment.content }}</span>
                </div>
            </div>
        </div>
        <div class="row"
            style="font-size: 14px; border-bottom: 1px solid gray; padding-bottom: 10px; padding-top: 5px;">
            <div class="col-sm-8 d-flex align-items-center">
            </div>
            <div class="col-sm-4" style="text-align: right;">
                <HighlightButton text="수정" />
                <NormalButton text="삭제" style="margin-left: 8px;" />
            </div>
        </div>
    </div>
    </template>
  </Comment>
  <MovePost @moveList="moveList" v-if="loadEnd"/>
  <div style="height: 100px;"></div>
  <div class="custom_loader_wrapper" ref="loadingContainer">
    <div class="spinner-border" style="width: 7rem; height: 7rem;" role="status">
    </div>
  </div>

</template>

<script setup>
import BoardDetail from '@/components/BoardDetail.vue';
import Comment from '@/components/Comment.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';
import MovePost from '@/components/MovePost.vue';
import { inject,provide, ref } from 'vue';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import intergratedBoardAPI from '@/apis/intergratedBoardAPI';

const moveList = inject("moveList");
const loadEnd = ref(false);

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
  console.log(boardDto)
}

function dateFormat(dateStr) {
  const date = new Date(dateStr);
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;

  return date.getFullYear() + '-' + month + '-' + day;
}

const comment = ref(
    {
        no: 0,
        writer: 'cosa1992',
        content: '정말 보람차셨을 것 같아요!',
        date: '2024.04.12 17:32'
    }
  )
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