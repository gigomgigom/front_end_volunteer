<template>
  <TextHeader title="작성한 후기"/>
  <div class="card">
    <div class="card-header">작성한 리뷰내역 보기</div>
    <div class="card-body">
      <RouterView/>
    </div>
  </div>
</template>

<script setup>
import TextHeader from '@/components/Common/TextHeader.vue';
</script>

<style scoped>

</style>