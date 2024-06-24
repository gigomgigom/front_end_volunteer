<template>
  <NormalBoard>
    <template v-slot:createButton>
      <HighlightButton text="글 작성하기" style="padding-left: 5px; padding-right: 5px;"/>
    </template>
  </NormalBoard>
</template>

<script setup>
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalBoard from '@/components/NormalBoard.vue';
import router from '@/router';

function goWriteForm() {
  router.push('/Details/ServiceCenter/Notice/WriteNotice');
}
</script>

<style scoped>

</style>