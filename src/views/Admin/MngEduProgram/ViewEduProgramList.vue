<template>
  <div>
    <SearchEduPrgm/>
    <EduPrgmList>
      <template v-slot:right-side>
        <HighlightButton text="수정하기" class="mb-3"
          style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; padding-right: 15px;" />
        <NormalButton text="신청조회"
          style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; padding-right: 15px;" />
      </template>
    </EduPrgmList>
    <EduPrgmFormTemplateSlot id="updateEduProgramModal"/>
    <Applicant id="applicant"/>
  </div>
</template>

<script setup>
import SearchEduPrgm from '@/components/SearchEduPrgm.vue';
import EduPrgmFormTemplateSlot from './EduPrgmFormTemplateSlot.vue'
import EduPrgmList from '@/components/EduPrgmList.vue';
import Applicant from '@/components/Applicant.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';
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