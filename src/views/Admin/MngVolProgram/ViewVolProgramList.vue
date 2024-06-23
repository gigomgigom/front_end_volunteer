<template>
  <div id="view-programlist-wrapper">
    <h5>🔶봉사조회</h5>
    <SearchVolPgrm />
    <VolPrgmList>
      <template v-slot:right-side>
        <HighlightButton text="수정하기" class="mb-3"
          style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; padding-right: 15px;" />
        <NormalButton text="신청조회"
          style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; padding-right: 15px;" />
      </template>
    </VolPrgmList>
    <UpdateVolProgramModal id="updateVolProgramModal" />
    <Applicant id="applicant" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Modal } from 'bootstrap';
import SearchVolPgrm from '@/components/SearchVolPgrm.vue';
import VolPrgmList from '@/components/VolPrgmList.vue';
import Applicant from '@/components/Applicant.vue';
import UpdateVolProgramModal from './UpdateVolProgramModal.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';

let updateVolProgramModal = null;
let applicant = null;

onMounted(() => {
  updateVolProgramModal = new Modal(document.querySelector("#updateVolProgramModal"));
  applicant = new Modal(document.querySelector("#applicant"));
});

function showDialog() {
  updateVolProgramModal.show();
}
function showApplicant() {
  applicant.show();
}
</script>



<style scoped>
* {
  margin: 0;
  padding: 0;
}

h5 {
  font-weight: bold;
  padding-bottom: 10px;
}

#view-programlist-wrapper {
  padding-top: 30px;
}
</style>