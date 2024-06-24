<template>
  <RequireReplyBoardPropose @moveProposeForm = 'moveProposeForm'/>
</template>

<script setup>
import RequireReplyBoardPropose from './RequireReplyBoardPropose.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function moveProposeForm() {
  router.push('/Details/Participation/VolProposal/WriteProposal');
}

</script>

<style scoped>

</style>