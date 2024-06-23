<template>
  <div>
    <SearchEduPrgm />
    <EduPrgmList>
      <template v-slot:createButton>
        <NormalButton text="새로 생성" style="padding-top: 2px; padding-bottom: 2px;" />
      </template>
      <template v-slot:right-side>
        <HighlightButton text="추가" style="padding-top: 2px; padding-bottom: 2px;" />
      </template>
    </EduPrgmList>
    <EduPrgmFormTemplateSlot id="addEduProgramModal"/>
  </div>
</template>

<script setup>
import SearchEduPrgm from '@/components/SearchEduPrgm.vue';
import EduPrgmList from '@/components/EduPrgmList.vue';
import EduPrgmFormTemplateSlot from './EduPrgmFormTemplateSlot.vue'
import { onMounted } from "vue";
import { Modal } from "bootstrap";
import NormalButton from '@/components/Common/NormalButton.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';

let addEduProgramModal = null;

onMounted(() => {
  addEduProgramModal = new Modal(document.querySelector("#addEduProgramModal"));
});

function showModal() {
  addEduProgramModal.show();
}

</script>

<style scoped>

</style>