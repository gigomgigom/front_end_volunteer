<template>
  <div class="d-flex justify-content-end">
    <HighlightButton text="신청하기" class="me-2" @buttonClick="showModal()"/>
  </div>
  <div class="title-wrapper">
    <div class="rc-status"><b>모집중</b></div>
    <h5><b>양평서부청소년문화의집 청소년커뮤니티공간 유스피크닉 운영보조</b></h5>
  </div>
  <EduPrgmDetail/>
  <MovePost/>
</template>

<script setup>
import EduPrgmDetail from '@/components/EduPrgmDetail.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import MovePost from '@/components/MovePost.vue';

function showModal() {

}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.title-wrapper {
  height: 50px;
  margin-top: 15px;
  margin-bottom: 20px;
  border-top: 2px solid black;
  border-bottom: 1px solid black;
  background-color: rgb(238, 238, 238);
  display: flex;
  justify-content: center;
  align-items: center;
}

.rc-status {
  padding-left: 10px;
  padding-right: 10px;
  height: 30px;
  border-radius: 20px;
  background-color: rgb(240, 103, 4);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
</style>