<template>
   <div>
      <div class="containter-fluid d-flex justify-content-center" style="height: 30px">
         <div style="width:1100px">
            <NavDetailRow/>
         </div>
      </div>
      <div class="d-flex justify-content-center">
         <div class="bg-primary" style="height:10px; width: 200px;">
            <NavDetailCol/>
         </div>
         <div class="bg-secondary" style="width: 500px">
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