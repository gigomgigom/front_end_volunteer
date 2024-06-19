<template>
  <div id="view-programlist-wrapper">
    <h5>🔶봉사조회</h5>
    <SearchVolPgrm/>
    <UpdateVolProgramModal id="updateVolProgramModal"/>
    <Applicant id="applicant"/>
    <VolPrgmListSlot class="mt-5" @showModal="showDialog" @showApplicant="showApplicant"/>

  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Modal } from 'bootstrap';
import SearchVolPgrm from '@/components/SearchVolPgrm.vue';
import Applicant from '@/components/Applicant.vue';
import VolPrgmListSlot from './VolPrgmListSlot.vue'
import UpdateVolProgramModal from './UpdateVolProgramModal.vue';

let updateVolProgramModal = null;
let applicant = null;

onMounted( () => {
  updateVolProgramModal = new Modal(document.querySelector("#updateVolProgramModal"));
  applicant = new Modal(document.querySelector("#applicant"));
});

function showDialog() {
  updateVolProgramModal.show();
}
function showApplicant(){
  applicant.show();
}
</script>



<style scoped>
*{
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