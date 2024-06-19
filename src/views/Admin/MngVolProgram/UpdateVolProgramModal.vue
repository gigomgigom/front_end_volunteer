<template>
    <VolPrgmFormTemplate>
      <template v-slot:header>
          봉사 프로그램 수정
      </template>
      <template v-slot:footer>
          <HighlightButton text="수정" data-bs-dismiss="modal"/>
          <HighlightButton text="삭제" data-bs-dismiss="modal"/>
          <NormalButton text="취소" data-bs-dismiss="modal"/>
      </template>
    </VolPrgmFormTemplate>
  </template>
  
  <script setup>
  import VolPrgmFormTemplate from '@/components/VolPrgmFormTemplate.vue';
  import HighlightButton from '@/components/Common/HighlightButton.vue';
  import NormalButton from '@/components/Common/NormalButton.vue';
  </script>
  
  <style scoped>
  
  </style>