<template>
   <div>
      <!--세부사항 네비게이션바(가로, Row)-->
      <NavDetailRow/>
      <div class="d-flex justify-content-center">
         <div class="" style="height:100%; width: 200px;">
            <AsideBar/>
         </div>

         <div class="px-5" style="height:100%; width: 1000px">
            <!--화면나오는곳-->
            <EducatingSource/>

         </div>
      </div>
   </div>
</template>

<script setup>
   import NavDetailRow from "@/components/NavDetailRow.vue";
   import NavDetailCol from "@/components/NavDetailCol.vue";

   import AsideBar from "@/components/AsideBar.vue";
   import EducatingSource from "./VolunteerGuide/EducatingSource.vue";

   import Approach from "./Approach.vue"
   

</script>

<style scoped>
  *{
   margin:0;
   padding:0;
  }
</style>