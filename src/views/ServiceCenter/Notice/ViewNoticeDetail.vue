<template>
  <BoardDetail/>
  <EditDeleteButtons/>
  <MovePost @moveList="moveList"/>
  <div style="height: 100px;"></div>
</template>

<script setup>
import BoardDetail from  '@/components/BoardDetail.vue';
import MovePost from '@/components/MovePost.vue';
import EditDeleteButtons from '@/components/EditDeleteButtons.vue';
import { inject } from 'vue';
const moveList = inject("moveList");
//게시글의 번호를 받아서 객체를 생성하고 provide로 boardDetail로 넘겨주고
//페이지 상세 데이터 보여주기 

</script>

<style scoped>

</style>