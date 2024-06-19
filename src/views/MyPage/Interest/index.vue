<template>
  <TextHeader title="관심 봉사"/>
  <div class="card">
    <div class="card-header">관심 봉사목록</div>
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