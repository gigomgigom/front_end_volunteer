<template>
 <BoardDetail/>
 <MovePost @moveList="moveReviewList"/>
 <div style="height: 100px;"></div>
</template>

<script setup>
import BoardDetail from '@/components/BoardDetail.vue';
import MovePost from '@/components/MovePost.vue';
import router from '@/router';

function moveReviewList() {
  router.push('/Details/MyPage/ReviewDetails/ViewReviewList');
}
</script>

<style scoped>

</style>