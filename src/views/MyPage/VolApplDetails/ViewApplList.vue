<template>
  <VolPrgmList>
    <template v-slot:right-side>
      <div class="eduApplStts">
        <span>{{ findStatus() }}</span>
      </div>
      <HighlightButton :text="findStatusButtonText()"
        style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; padding-right: 15px;" />
    </template>
  </VolPrgmList>
  <NavBar/>
  
</template>

<script setup>
import VolPrgmList from '@/components/VolPrgmList.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NavBar from "@/components/Common/NavBar.vue";
import { inject } from 'vue';

let responseData = inject("responseData");

function findStatus(event) {
  console.log(event.target);
}

function findStatusButtonText(event) {
  console.log("버튼", event.target);
}
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