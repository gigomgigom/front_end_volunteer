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

//선택한 지역코드 초기화(서울특별시)
const selectedRegionCode = ref(6110000);

//선택한 지역코드 하위 컴포넌트들에게 제공
provide("data", {selectedRegionCode});

//만약 선택한 지역코드가 변경이 되었을 경우
watch(() => selectedRegionCode.value, (newRegionCode, oldRegionCode) => {
  //CSS 선택자를 변경시킴
  let oldRegions = document.querySelectorAll('.r' + oldRegionCode);
  let newRegions = document.querySelectorAll('.r' + newRegionCode);
  for(let oldRegion of oldRegions) {
    oldRegion.classList.remove('on');
  }
  for(let newRegion of newRegions) {
    newRegion.classList.add('on');
  }
  //상단 기준에서 800의 간격만큼 스크롤을 내려준다.
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