<template>
   <div>
      <!--세부사항 네비게이션바(가로, Row)-->
      <NavDetailRow/>
      <div class="d-flex justify-content-center">
         <div class="" style="height:100%; width: 300px;">
            <NavDetailCol/>
         </div>
         <div class="px-5" style="height:100%; width: 900px">
            <!--화면나오는곳-->
         </div>
      </div>
   </div>
</template>

<script setup>
   import NavDetailRow from "@/components/NavDetailRow.vue";
   import NavDetailCol from "@/components/NavDetailCol.vue";
</script>

<style scoped>
  
</style>