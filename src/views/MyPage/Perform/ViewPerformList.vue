<template>
  <VolPrgmList>
    <template v-slot:right-side="{ index }">
      <HighlightButton text="후기 작성" style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; 
      padding-right: 15px;" @buttonClick="moveReviewForm" v-if="responseData.volPerformList[index].revWritten !== 1"/>
    </template>
  </VolPrgmList>
  <NavBar/>
</template>

<script setup>
import HighlightButton from '@/components/Common/HighlightButton.vue';
import { inject } from 'vue';
import VolPrgmList from '@/components/VolPrgmList.vue';
import router from '@/router';
import NavBar from '@/components/Common/NavBar.vue';

let responseData = inject("responseData");

function moveReviewForm() {
  router.push('/Details/Information/Review/WriteReview');
}
</script>

<style scoped>

</style>