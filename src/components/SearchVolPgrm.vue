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
                        <select id="select-city" class="form-select" multiple>
                            <option value=0 selected @click="selectCity(null)">전체</option>
                            <option v-for="(city, index) in regionList" :key="index" :value="city.cityCode"
                                @click="selectCity(city.county)">{{ city.cityName }}</option>
                        </select>
                    </td>
                    <td style="width: 15%">
                        <select id="select-county" class="form-select" multiple>
                            <option id="default-option" value=0 selected>전체</option>
                            <option v-for="(county, index) in countyList" :key="index" :value="county.countyCode">
                                {{ county.countyName }}
                            </option>
                        </select>
                    </td>
                    <td style="width: 23%">
                        <select id="select-high-class" class="form-select" multiple>
                            <option selected @click="selectHighCls(null)">전체</option>
                            <option v-for="(highCls, index) in categoryList" :key="index" :value="highCls.highClsCode"
                                @click="selectHighCls(highCls.lowClsList)">{{ highCls.highClsName }}</option>
                        </select>
                    </td>
                    <td style="width: 30%">
                        <select id="select-low-class" class="form-select" multiple>
                            <option selected>전체</option>
                            <option v-for="(lowCls, index) in lowClsList" :key="index" :value="lowCls.lowClsCode"> {{
                                lowCls.lowClsName }}</option>
                        </select>
                    </td>
                    <td style="width: 12%">
                        <select id="select-recruit" class="form-select" multiple>
                            <option selected>전체</option>
                            <option>모집중</option>
                            <option>모집완료</option>
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
                        <input id="act-start-date" type="date" :value="currentDate"/>
                        <span> - </span>
                        <input id="act-end-date" type="date" />
                    </div>
                    <div class="d-flex align-items-center">
                        <span class="me-2">▪️봉사자 유형</span>
                        <input class="form-check-input me-1" type="checkbox" value="Y" id="adultAble">
                        <label class="form-check-label me-3" for="adultAble">성인</label>
                        <input class="form-check-input me-1" type="checkbox" value="Y" id="yngAble">
                        <label class="form-check-label" for="yngAble">청소년</label>
                    </div>
                </div>
                <div class="search-input mb-4">
                    <div class="d-flex w-75">
                        <label class="w-25" for="search-keyword">▪️봉사명 검색</label>
                        <input id="search-keyword" class="form-control" type="text"/>
                    </div>
                </div>
                <div class="search-input">
                    <HighLightButton text="검색" class="me-5" @buttonClick="searchVolProgram"/>
                    <NormalButton text="초기화" @buttonClick="resetInputValue"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import HighLightButton from "@/components/Common/HighlightButton.vue";
import NormalButton from "@/components/Common/NormalButton.vue";

import { ref } from "vue";
import { useStore } from "vuex";

const emits = defineEmits(['showModal']);


//상태 데이터(지역코드, 분야코드)를 사용하기 위한 store객체 생성
const store = useStore();

//-----지역코드 사용
//상태 데이터에 저장되어있는 지역정보 리스트를 가져온다.
const regionList = store.state.regionCode.regionList;
//군/구 목록 상태 데이터 정의
const countyList = ref([]);

// 시/도 선택시 호출
function selectCity(listData) {

    //군/구 리스트(상태데이터) 수정
    countyList.value = listData;
    //군/구 리스트에서 기본값(전체)로 selected되도록 함.
    document.getElementById("select-county").selectedIndex = 0;
}

//-----분야코드 사용
//상태 데이터에 저장되어있는 분야코드 리스트를 가져온다.
const categoryList = store.state.categoryCode.categoryList;
//하위 분야 목록 상태 데이터 정의
const lowClsList = ref([]);

// 상위 분야 선택시 호출
function selectHighCls(listData) {
    //하위 분류 리스트(상태데이터) 수정
    lowClsList.value = listData;
    //군/구 리스트에서 기본값(전체)로 selected되도록 함.
    document.getElementById("select-low-class").selectedIndex = 0;
}

//----봉사 프로그램 검색버튼 누를시 호출
function searchVolProgram() {
    emits('showModal');
}

const currentDate = new Date();
//----검색어 입력 초기화 버튼
function resetInputValue() {
    document.getElementById("select-city").selectedIndex = 0;
    document.getElementById("select-county").selectedIndex = 0;
    document.getElementById("select-high-class").selectedIndex = 0;
    document.getElementById("select-low-class").selectedIndex = 0;
    document.getElementById("select-recruit").selectedIndex = 0;
    document.getElementById("act-start-date").value = currentDate;
    document.getElementById("act-end-date").value = currentDate;
    document.getElementById("search-keyword").value = '';

    countyList.value = [];
    lowClsList.value = [];
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