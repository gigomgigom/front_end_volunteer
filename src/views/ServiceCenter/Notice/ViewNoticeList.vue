<template>
  <NormalBoard/> 
</template>

<script setup>
import NormalBoard from '@/components/NormalBoard.vue';
import router from '@/router';

function goWriteForm() {
  router.push('/Details/ServiceCenter/Notice/WriteNotice');
}
</script>

<style scoped>

</style>