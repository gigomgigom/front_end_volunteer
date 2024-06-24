<template>
  <BoardDetail/>
  <MovePost @moveList="moveInterviewList"/>
  <div style="height: 100px;"></div>
</template>

<script setup>
import BoardDetail from  '@/components/BoardDetail.vue';
import MovePost from '@/components/MovePost.vue';
import router from '@/router';

function moveInterviewList() {
  router.push('/Details/Information/Interview/ViewInterviewList');
}
</script>

<style scoped>

</style>