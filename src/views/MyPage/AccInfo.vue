<template>
  <div>
    <TextHeader title="기본 정보"></TextHeader>
    <div class="card-body">
      <AccountForm/>
    </div>
  </div>
</template>

<script setup>
import TextHeader from '@/components/Common/TextHeader.vue';
import AccountForm from '@/components/AccountForm.vue';
</script>

<style scoped>
</style>
