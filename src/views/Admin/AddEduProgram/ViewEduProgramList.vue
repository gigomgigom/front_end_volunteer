<template>
  <div>
    <SearchEduPrgm />
    <EduPrgmList :isAddPage="true" class="mt-5" @buttonClick="showModal"/>
    <EduPrgmFormTemplateSlot id="addEduProgramModal"/>
  </div>
</template>

<script setup>
import SearchEduPrgm from '@/components/SearchEduPrgm.vue';
import EduPrgmList from '@/components/EduPrgmList.vue';
import EduPrgmFormTemplateSlot from './EduPrgmFormTemplateSlot.vue'
import { onMounted } from "vue";
import { Modal } from "bootstrap";

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