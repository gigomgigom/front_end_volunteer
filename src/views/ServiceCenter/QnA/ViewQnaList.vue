<template>
  <RequireReplyBoardQuestion @moveQuestionForm="moveQuestionForm"/>
</template>

<script setup>
import RequireReplyBoardQuestion from './RequireReplyBoardQuestion.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

function moveQuestionForm() {
  router.push('/Details/ServiceCenter/QNA/WriteQna');
}
</script>

<style scoped>

</style>