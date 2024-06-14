<template>
  <div class="card">
    <div class="card-header">자원봉사 통계</div>
    <div class="card-body">
      <StatisticsGraph/>
      <StatisticsTable/>
    </div>
  </div>
</template>

<script setup>
import StatisticsGraph from './StatisticsGraph.vue';
import StatisticsTable from './StatisticsTable.vue';
</script>

<style scoped>

</style>