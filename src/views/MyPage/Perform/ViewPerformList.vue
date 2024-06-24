<template>
  <VolPrgmList>
    <template v-slot:right-side>
      <HighlightButton text="후기 작성" style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; padding-right: 15px;" @buttonClick="moveReviewForm"/>
    </template>
  </VolPrgmList>
</template>

<script setup>
import HighlightButton from '@/components/Common/HighlightButton.vue';
import VolPrgmList from '@/components/VolPrgmList.vue';
import router from '@/router';

function moveReviewForm() {
  router.push('/Details/Information/Review/WriteReview');
}
</script>

<style scoped>

</style>