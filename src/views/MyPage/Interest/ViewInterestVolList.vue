<template>
  <VolPrgmList>
    <template v-slot:vol-checkbox>
      <div class="d-flex align-items-center mb-2">
        <div class="me-2">
          <input class="form-check-input" type="checkbox" value="" id="selectAllChecked">
          <label class="form-check-label" for="selectAllChecked" style="font-size: 14px;">
            전체 선택
          </label>
        </div>
        <NormalButton text="선택 삭제"
          style="font-size: 14px; padding-top: 2px; padding-bottom: 2px; padding-left: 5px; padding-right: 5px;" />
      </div>
    </template>
    <template v-slot:checkBox>
      <div class="mx-2">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
      </div>
    </template>
    <template v-slot:right-side>
      <div class="right-side">
        <span>마감</span>
        <span style="color: rgb(240, 103, 4);">14일전</span>
      </div>
    </template>
  </VolPrgmList>
</template>

<script setup>
import NormalButton from '@/components/Common/NormalButton.vue';
import VolPrgmList from '@/components/VolPrgmList.vue';
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