<template>
  <TextHeader title="자원봉사 통계"/>
  <div class="card">
    <div class="card-header">통계</div>
    <div class="card-body" >
      <StatisticsGraph/>
      <StatisticsTable/>
    </div>
  </div>
</template>

<script setup>
import TextHeader from '@/components/Common/TextHeader.vue';
import StatisticsGraph from './StatisticsGraph.vue';
import StatisticsTable from './StatisticsTable.vue';
</script>

<style scoped>

</style>