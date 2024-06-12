<template>
  <AppFirstHeader/>
  <AppSecondHeader/>
  <!--메인페이지 바디 or 상세페이지 바디-->
  <router-view/>
  <AppFooter/>
</template>

<script setup>
import AppFirstHeader from "@/components/Common/AppFirstHeader.vue";
import AppSecondHeader from "@/components/Common/AppSecondHeader.vue";
import AppFooter from "@/components/Common/AppFooter.vue";
</script>
<style scoped>
 
</style>