<template>
  <TextHeader title="봉사 참여 실적" />
  <Search class="mb-5"/>
  <ViewPerformList/>
</template>

<script setup>
import TextHeader from '@/components/Common/TextHeader.vue';
import ViewPerformList from './ViewPerformList.vue';
import Search from './Search.vue';
import SearchEduPrgm from '@/components/SearchEduPrgm.vue';
</script>

<style scoped></style>