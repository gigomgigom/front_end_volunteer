<template>
  <TextHeader title="지역별 봉사센터"/>
  <div id="guide">
        <span>▶해당 지역 선택 시 지역별자원봉사센터 정보를 확인하실 수 있습니다.</span>
  </div>
  <div id="select-region" class="mb-5">
    <SelectByMap/>
    <SelectByButton/>
  </div>
  <RegionList/>
</template>

<script setup>
import { ref, provide, watch } from 'vue';
import TextHeader from '@/components/Common/TextHeader.vue';
import SelectByMap from './SelectByMap.vue';
import SelectByButton from './SelectByButton.vue';
import RegionList from './RegionList.vue';

const selectedRegionCode = ref(6110000);

provide("data", {selectedRegionCode});

watch(() => selectedRegionCode.value, (newRegionCode, oldRegionCode) => {
  let oldRegions = document.querySelectorAll('.r' + oldRegionCode);
  let newRegions = document.querySelectorAll('.r' + newRegionCode);
  for(let oldRegion of oldRegions) {
    oldRegion.classList.remove('on');
  }
  for(let newRegion of newRegions) {
    newRegion.classList.add('on');
  }
  window.scrollTo({
    top: 800,
    behavior: 'smooth'
  })
});
</script>

<style scoped>
#guide {
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  border: 1px solid silver;
  font-size: 1em;
  color: gray;
}
#select-region {
  display: flex;
}
</style>