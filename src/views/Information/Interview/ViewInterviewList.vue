<template>
  <NormalBoard @moveDetail="moveInterviewDetail"/>
</template>

<script setup>
import NormalBoard from '@/components/NormalBoard.vue';
import router from '@/router';

function moveInterviewDetail(data) {
  router.push('/Details/Information/Interview/ViewInterviewDetail');
}
</script>

<style scoped>

</style>