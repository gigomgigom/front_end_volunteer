<template>
  <div class="container row justify-content-center">
    <div class="col-sm-12 text-center">
      <HighlightButton text="추천" style="display: inline-block; margin-right:10px;" />
      <NormalButton text="비추천" />
    </div>
  </div>
  <div class="bottom-line"></div>
</template>

<script setup>
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';
</script>

<style scoped>
.container {
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
}

.bottom-line {
  border-bottom: 2px solid #757575;
}
</style>