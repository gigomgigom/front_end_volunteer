<template>
  <div id="view-programlist-wrapper">
    <h5>🔶봉사조회</h5>
    <SearchVolPgrm @showModal="showDialog"/>
    <AddVolProgramModal id="addVolProgramModal"/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Modal } from 'bootstrap';
import SearchVolPgrm from '@/components/SearchVolPgrm.vue';
import AddVolProgramModal from './AddVolProgramModal.vue';

let addVolProgramModal = null;

onMounted( () => {
  addVolProgramModal = new Modal(document.querySelector("#addVolProgramModal"));
});

function showDialog() {
  addVolProgramModal.show();
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