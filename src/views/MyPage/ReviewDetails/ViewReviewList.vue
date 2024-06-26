<template>
  <NormalBoard @moveDetail="moveReviewDetail"/>
</template>

<script setup>
import NormalBoard from '@/components/NormalBoard.vue';
import router from '@/router';

function moveReviewDetail(data){
  router.push('/Details/Information/Review/ViewReviewDetail');
}

</script>

<style scoped>

</style>