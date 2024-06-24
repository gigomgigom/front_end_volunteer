<template>
  <NormalBoard @moveDetail="moveReviewDetail"/>
</template>

<script setup>
import { useRouter } from 'vue-router';
import NormalBoard from '@/components/NormalBoard.vue';

const router = useRouter();

function moveReviewForm() {
  router.push('/Details/Information/Review/WriteReview');
}

function moveReviewList() {
  router.push('/Details/Information/Review/ViewReviewList');
}

function moveReviewDetail(data) { //글번호 전달하는 매개값
  router.push('/Details/Information/Review/ViewReviewDetail');
  console.log(data);
}
</script>

<style scoped>

</style>