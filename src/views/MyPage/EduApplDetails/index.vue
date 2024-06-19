<template>
  <TextHeader title="교육신청내역"/>
  <div class="card">
    <div class="card-header">교육신청내역</div>
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