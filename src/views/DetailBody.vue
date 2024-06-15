<template>
   <div>
      <!--세부사항 네비게이션바(가로, Row)-->
      <NavDetailRow />
      <div class="d-flex justify-content-center">
         <div id="aside-bar" style="width: 200px;">
            <AsideBar />
         </div>
         <div class="px-5" style="height:100%; width: 900px">
            <!--화면나오는곳-->
            <RouterView />
         </div>
      </div>
   </div>
</template>

<script setup>
import NavDetailRow from "@/components/DetailsNavi/NavDetailRow.vue";
import AsideBar from "@/components/DetailsNavi/AsideBar.vue";

</script>

<style scoped>
* {
   margin: 0;
   padding: 0;
}
@media screen and (max-width: 1115px) {
    #aside-bar {
        display: none;
    }
}
</style>