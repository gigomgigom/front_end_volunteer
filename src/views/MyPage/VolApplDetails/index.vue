<template>
  <TextHeader title="봉사 신청내역"/>
  <div class="card">
    <div class="card-header">봉사 신청 내역 페이지</div>
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