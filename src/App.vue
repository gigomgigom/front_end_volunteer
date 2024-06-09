<template>
  <AppFirstHeader/>
  <AppSecondHeader/>
  <!--메인페이지 바디 or 상세페이지 바디-->
  <router-view/>
  <AppFooter/>
</template>

<script setup>
import AppFirstHeader from "@/components/AppFirstHeader.vue";
import AppSecondHeader from "@/components/AppSecondHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>
<style scoped>
 
</style>