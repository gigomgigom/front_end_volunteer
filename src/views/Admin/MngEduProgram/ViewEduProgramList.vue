<template>
  <div>
    <SearchEduPrgm />
    <EduPrgmListSlot class="mt-5" @showModal="showModal" @showApplicant="showApplicant"/>
    <EduPrgmFormTemplateSlot id="updateEduProgramModal"/>
    <Applicant id="applicant"/>
  </div>
</template>

<script setup>
import SearchEduPrgm from '@/components/SearchEduPrgm.vue';
import EduPrgmListSlot from './EduPrgmListSlot.vue';
import EduPrgmFormTemplateSlot from './EduPrgmFormTemplateSlot.vue'
import Applicant from '@/components/Applicant.vue';
import { onMounted } from "vue";
import { Modal } from "bootstrap";

let updateEduProgramModal = null;
let applicant = null;

onMounted(() => {
  updateEduProgramModal = new Modal(document.querySelector("#updateEduProgramModal"));
  applicant = new Modal(document.querySelector("#applicant"));
});

function showModal() {
  updateEduProgramModal.show();
}
function showApplicant(){
  applicant.show();
}

</script>

<style scoped>

</style>