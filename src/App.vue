<template>
  <AppFirstHeader/>
  <AppSecondHeader/>
  <!--메인페이지 바디 or 상세페이지 바디-->
  <DetailBody/>
  <AppFooter/>

</template>

<script setup>
import AppFirstHeader from "@/components/AppFirstHeader.vue";
import AppSecondHeader from "@/components/AppSecondHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import DetailBody from "@/views/DetailBody.vue";
</script>
<style scoped>
 
</style>