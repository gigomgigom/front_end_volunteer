<template>
  <div id="button-container" class="d-flex flex-wrap">
    <div :class="selectedRegionCode===city.cityCode?'select-button on r'+ city.cityCode : 'select-button r' + city.cityCode" v-for="(city, index) in cityList" :key="index" @click="selectRegion(city.cityCode)">{{ city.cityName+"("+(city.county.length+1)+")" }}</div>
  </div>
</template>

<script setup>
import { ref, inject, watch } from 'vue';
import { useStore } from 'vuex';
//대한민국 도시 목록(regionCode vuex전역상태)데이터를 가져오기 위해 store객체 생성
const store = useStore();
//도시 리스트(배열 객체)받아오기
const cityList = store.state.regionCode.regionList;
//상위 컴포넌트에서 제공한 데이터를 받아온다.
const parentData = inject("data");
//Template에서 상태 데이터 변경 반영(클래스 on 추가 여부)
const selectedRegionCode = ref(parentData.selectedRegionCode.value);

function selectRegion(cityCode) {
  parentData.selectedRegionCode.value = cityCode;
}
</script>

<style scoped>
#button-container {
    width: 600px;
    padding-top: 50px;
    padding-left: 30px;
}
.select-button {
    border: 1px solid silver;
    height: 40px;
    width: 152px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8em;
    color: gray;
    margin-bottom: 10px;
    margin-right: 10px;
    cursor: pointer;
}

.select-button:hover {
  border: none;
  background-color: rgb(240, 103, 4);
  color: white;
}

.on {
  border: none;
  background-color: rgb(240, 103, 4);
  color: white;
}
</style>