<template>
  <TextHeader title="공지사항"/>
  <div class="card">
    <div class="card-header">공지사항</div>
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