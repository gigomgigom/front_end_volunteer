<template>
  <BoardDetail/>
  <likeUnlike/>
  <comment/>
  <MovePost @moveList="moveReviewList"/>
</template>

<script setup>
import BoardDetail from '@/components/BoardDetail.vue';
import likeUnlike from './likeUnlike.vue';
import comment from '@/components/comment.vue';
import MovePost from '@/components/MovePost.vue';
import router from '@/router';

function moveReviewList() {
  router.push('/Details/Information/Review/ViewReviewList');
}

</script>

<style scoped>

</style>