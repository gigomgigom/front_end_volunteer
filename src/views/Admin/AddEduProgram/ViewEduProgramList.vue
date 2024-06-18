<template>
  <div>
    <SearchEduPrgm />
    <EduPrgmList class="mt-5" @click="showDialogA"/>
    <EduPrgmForm id="dialogA"/>
    
  </div>
</template>

<script setup>
import SearchEduPrgm from '@/components/SearchEduPrgm.vue';
import EduPrgmList from '@/components/EduPrgmList.vue'; 
import EduPrgmForm from '@/components/EduPrgmForm.vue';
import { onMounted } from "vue";
import { Modal } from "bootstrap";

let modalDialogA = null;

onMounted(() => {
    modalDialogA = new Modal(document.querySelector("#dialogA"));
});

function showDialogA() {
    modalDialogA.show();
}

</script>

<style scoped>

</style>