<template>
  <NormalBoard/>
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

function moveReviewDetail() {
  router.push('/Details/Information/Review/ViewReviewDetail');
}
</script>

<style scoped>

</style>