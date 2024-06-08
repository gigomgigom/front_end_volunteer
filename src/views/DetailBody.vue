<template>
   <div>
      <!--세부사항 네비게이션바(가로, Row)-->
      <NavDetailRow/>
      <div class="d-flex justify-content-center">
         <div class="bg-primary" style="height:500px; width: 200px;">
            <NavDetailCol/>
         </div>
         <div class="bg-secondary" style="width: 900px">
            <RouterView/>
         </div>
      </div>
   </div>
</template>

<script setup>
   import NavDetailRow from "@/components/NavDetailRow.vue";
   import NavDetailCol from "@/components/NavDetailCol.vue"
</script>

<style scoped>
  
</style>