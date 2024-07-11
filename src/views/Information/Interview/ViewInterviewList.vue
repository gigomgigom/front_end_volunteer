<template>
  <NormalBoard>
    <template v-slot:createButton v-if="true">
      <HighlightButton text="글 작성하기" @buttonClick="writeBoard" style="padding-left: 5px; padding-right: 5px;"/>
    </template>
  </NormalBoard>
  <NavBar/>
</template>

<script setup>
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalBoard from '@/components/NormalBoard.vue';
import router from '@/router';
import NavBar from '@/components/Common/NavBar.vue';
import { provide, inject } from 'vue';

provide("moveDetail", moveDetail);
const authority = inject("authority")

let result = false;
if(authority === 'admin'){
  result = true;
}else{
  result = false;
}

function writeBoard(){
  router.push("/Details/Information/Interview/WriteInterview")
}
function moveDetail(data) {
  router.push(`/Details/Information/Interview/ViewInterviewDetail?boardNo=${data}`);
}
</script>

<style scoped>                                                                                                                  

</style>