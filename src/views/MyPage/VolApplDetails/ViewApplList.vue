<template>
  <VolPrgmList>
    <template v-slot:right-side>
      <div class="eduApplStts">
        <span>접수</span>
      </div>
      <HighlightButton text="취소"
        style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; padding-right: 15px;" />
    </template>
  </VolPrgmList>
</template>

<script setup>
import VolPrgmList from '@/components/VolPrgmList.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.eduApplStts {
  width: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(240, 103, 4);
  color: rgb(240, 103, 4);
  font-weight: bold;
  margin-bottom: 10px;
}
</style>