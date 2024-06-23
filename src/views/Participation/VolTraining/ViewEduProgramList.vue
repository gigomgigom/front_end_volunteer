<template>
  <SearchEduPrgm />
  <EduPrgmList>
    <template v-slot:right-side>
      <div class="right-side">
        <span>마감</span>
        <span style="color: rgb(240, 103, 4);">14일전</span>
      </div>
    </template>
  </EduPrgmList>
</template>

<script setup>
import SearchEduPrgm from '@/components/SearchEduPrgm.vue';
import EduPrgmList from '@/components/EduPrgmList.vue';
</script>

<style scoped>
.right-side {
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid silver;
  color: gray;
}
</style>