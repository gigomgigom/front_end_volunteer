<template>
  <TextHeader title="봉사 참여 실적" />
  
  <div>
    <Search></Search>
  </div>
  <div>
    <ViewPerformList></ViewPerformList>
  </div>
  
</template>

<script setup>
import TextHeader from '@/components/Common/TextHeader.vue';
import ViewPerformList from './ViewPerformList.vue';
import Search from '../VolApplDetails/Search.vue';
import SearchEduPrgm from '@/components/SearchEduPrgm.vue';
</script>

<style scoped></style>