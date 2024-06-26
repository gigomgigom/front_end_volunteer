<template>
  <BoardDetail/>
  <EditDeleteButtons/>
  <likeUnlike/>

  <Comment/>
  <MovePost @moveList="moveReviewList"/>
</template>

<script setup>
import BoardDetail from '@/components/BoardDetail.vue';
import likeUnlike from './likeUnlike.vue';
import Comment from '@/components/Comment.vue';
import MovePost from '@/components/MovePost.vue';
import router from '@/router';
import EditDeleteButtons from '@/components/EditDeleteButtons.vue';

function moveReviewList() {
  router.push('/Details/Information/Review/ViewReviewList');
}

</script>

<style scoped>

</style>