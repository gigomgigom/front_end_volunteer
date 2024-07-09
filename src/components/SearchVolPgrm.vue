<template>
    <div id="search-program-picker">
        <table class="table">
            <thead>
                <tr>
                    <th colspan="2">
                        봉사지역
                    </th>
                    <th colspan="2">
                        봉사분야
                    </th>
                    <th>
                        모집상태
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="width: 20%">
                        <select id="select-city" class="form-select" multiple v-model="cityCode">
                            <option :value="0" selected>전체</option>
                            <option v-for="(city, index) in regionList" :key="index" :value="city.cityCode">{{
                                city.cityName }}</option>
                        </select>
                    </td>
                    <td style="width: 15%">
                        <select id="select-county" class="form-select" multiple v-model="countyCode">
                            <option id="default-option" value=0 selected>전체</option>
                            <option v-for="(county, index) in countyList" :key="index" :value="county.countyCode">
                                {{ county.countyName }}
                            </option>
                        </select>
                    </td>
                    <td style="width: 23%">
                        <select id="select-high-class" class="form-select" multiple v-model="highClsCode">
                            <option selected :value="''">전체</option>
                            <option v-for="(highCls, index) in categoryList" :key="index" :value="highCls.highClsCode">
                                {{ highCls.highClsName }}</option>
                        </select>
                    </td>
                    <td style="width: 30%">
                        <select id="select-low-class" class="form-select" multiple v-model="lowClsCode">
                            <option selected :value="''">전체</option>
                            <option v-for="(lowCls, index) in lowClsList" :key="index" :value="lowCls.lowClsCode"> {{
                                lowCls.lowClsName }}</option>
                        </select>
                    </td>
                    <td style="width: 12%">
                        <select id="select-recruit" class="form-select" multiple v-model="recruitStts">
                            <option selected :value="0">전체</option>
                            <option :value="1">모집중</option>
                            <option :value="2">모집완료</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="mt-3">
            <div id="search-program-form">
                <div class="search-input mb-4">
                    <div class="me-5">
                        <label class="me-2" for="act-date">▪️봉사 기간</label>
                        <input id="act-start-date" type="date" v-model="searchIndex.startDate" />
                        <span> - </span>
                        <input id="act-end-date" type="date" v-model="searchIndex.endDate"/>
                    </div>
                    <div class="d-flex align-items-center">
                        <span class="me-2">▪️봉사자 유형</span>
                        <input class="form-check-input me-1" type="checkbox" id="adultAble" v-model="searchIndex.adultPosbl">
                        <label class="form-check-label me-3" for="adultAble">성인</label>
                        <input class="form-check-input me-1" type="checkbox" id="yngAble" v-model="searchIndex.teenPosbl">
                        <label class="form-check-label" for="yngAble">청소년</label>
                    </div>
                </div>
                <div class="search-input mb-4">
                    <div class="d-flex w-75">
                        <label class="w-25" for="search-keyword">▪️봉사명 검색</label>
                        <input id="search-keyword" class="form-control" type="text" v-model="searchIndex.keyword"/>
                    </div>
                </div>
                <div class="search-input">
                    <HighLightButton text="검색" class="me-5" @buttonClick="searchVolProgram" />
                    <NormalButton text="초기화" @buttonClick="resetInputValue" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import HighLightButton from "@/components/Common/HighlightButton.vue";
import NormalButton from "@/components/Common/NormalButton.vue";

import { inject, onMounted, ref, watch } from "vue";
import store from "@/store";
const searchIndex = inject('searchIndex');

const recruitStts = ref([searchIndex.value.recruitStts]);

//-----지역코드 사용
//상태 데이터에 저장되어있는 지역정보 리스트를 가져온다.
const regionList = store.state.regionCode.regionList;
const cityCode = ref([0]);
const countyCode = ref([0]);
//군/구 목록 상태 데이터 정의
const countyList = ref([]);
// 하위 분야 리스트를 찾아오기
function findCounty(cityCode) {
    for (let city of regionList) {
        if (city.cityCode === cityCode) {
            return city.county;
        }
    }
    return [];
}
watch(cityCode, (newCode) => {
    countyList.value = findCounty(newCode[0]);
    document.getElementById("select-county").selectedIndex = 0;
}, { deep: true });
//-----분야코드 사용
//상태 데이터에 저장되어있는 분야코드 리스트를 가져온다.
const categoryList = store.state.categoryCode.categoryList;
const highClsCode = ref(['']);
const lowClsCode = ref(['']);
//하위 분야 목록 상태 데이터 정의
const lowClsList = ref([]);
//하위 분야 리스트를 찾아오기
function findLowCls(highClsCode) {
    for (let highCls of categoryList) {
        if (highCls.highClsCode === highClsCode) {
            return highCls.lowClsList;
        }
    }
    return [];
}
watch(highClsCode, (newCode, oldCode) => {
    lowClsList.value = findLowCls(newCode[0]);
    document.getElementById("select-low-class").selectedIndex = 0;
}, {deep: true});
//----검색어 입력 초기화 버튼 (작업해야함)
function resetInputValue() {
    searchIndex.value.keyword = '';
    searchIndex.value.startDate = null;
    searchIndex.value.endDate = null;
    searchIndex.value.regionNo = 0;
    cityCode.value = [0];
    countyCode.value = [0];
    searchIndex.value.ctgNo = '';
    highClsCode.value = [''];
    lowClsCode.value = [''];
    searchIndex.value.recruitStts = 0;
    searchIndex.value.adultPosbl = false;
    searchIndex.value.teenPosbl = false;
    countyList.value = [];
    lowClsList.value = [];
}
//url 쿼리를 통해서 전달된 검색 조건을 반영시키기
onMounted(() => {
    if(searchIndex.value.regionNo) {
        for(let city of regionList) {
            for(let county of city.county) {
                if(county.countyCode === Number(searchIndex.value.regionNo)) {
                    cityCode.value = [city.cityCode];
                    countyCode.value = [county.countyCode];
                }
            }
        }
    }
    if(searchIndex.value.ctgNo) {
        for(let highCls of categoryList) {
            for(let lowCls of highCls.lowClsList) {
                if(lowCls.lowClsCode === searchIndex.value.ctgNo) {
                    highClsCode.value = [highCls.highClsCode];
                    lowClsCode.value = [lowCls.lowClsCode];
                }
            }
        }
    }
});
const emit = defineEmits(['searchBySearchIndex']);
//----봉사 프로그램 검색버튼 누를시 호출
function searchVolProgram() {
    searchIndex.value.regionNo = countyCode.value[0];
    searchIndex.value.ctgNo = lowClsCode.value[0];
    searchIndex.value.recruitStts = recruitStts.value[0];
    searchIndex.value.searchBySearchIndex();
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.table {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
}

th {
    text-align: center;
}

thead>tr>th {
    border-right: 1px solid silver;
    border-left: 1px solid silver;
    border-collapse: collapse;
}

tbody>tr>td {
    border-right: 1px solid silver;
    border-left: 1px solid silver;
    border-collapse: collapse;
}

.form-select {
    border: none;
    overflow-y: auto;
    border-radius: 0%;
}

::-webkit-scrollbar {
    width: 5px;
    height: 100px;
}

#search-program-form {
    border: 1px solid silver;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 50px;
    padding-right: 50px;
}

.search-input {
    display: flex;
    justify-content: center;
}

::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: silver;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: gray;
}
</style>