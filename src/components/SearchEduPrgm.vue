<template>
    <div class="card">
        <div class="card-body" style="padding: 12px;">
                <div class="row" style="margin-bottom: 30px; margin-top: 10px;">
                    <div class="col-sm-6 aa">
                        <span class="bb">교육지역</span>
                        <select class="ms-4 me-2" @change="selectCity($event)">
                            <option selected>전체</option>
                            <option v-for="(city, index) in regionList" :key="index" :value="city.cityCode">{{
                                city.cityName }}</option>
                        </select>
                        <select id="county" class="" v-model="searchIndex.regionNo">
                            <option selected>전체</option>
                            <option v-for="(county, index) in countyList" :key="index" :value="county.countyCode">{{
                                county.countyName }}</option>
                        </select>
                    </div>
                    <div class="col-sm-6 aa">
                        <span class="bb">모집상태</span>
                        <div class="ms-4" style="display: inline-block;">
                            <span class="checks small">
                                <input type="radio" id="ex_rds1" v-model="searchIndex.recruitStts" value="0">
                                <label for="ex_rds1" class="ms-1">전체</label>
                            </span>
                            <span class="checks small ms-2">
                                <input type="radio" id="ex_rds2" v-model="searchIndex.recruitStts" value="1">
                                <label for="ex_rds2" class="ms-1">모집중</label>
                            </span>
                            <span class="checks small ms-2">
                                <input type="radio" id="ex_rds3" v-model="searchIndex.recruitStts" value="2">
                                <label for="ex_rds3" class="ms-1">모집완료</label>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 aa">
                        <span class="bb">봉사명</span>
                        <input type="text" v-model="searchIndex.keyword" style="width: 83%; margin-left: 40px; border-radius: 2px; border: 1px solid">
                    </div>
                </div>
                <div class="mt-4 mb-2" style="text-align: center;">
                    <button class="btn btn-info me-2" @click="searchIndex.searchBySearchIndex"
                        style="color: #fff; background-color: #d43e0c; border: none; border-radius: 0">검색</button>
                    <button class="btn btn-danger"
                        style="background-color: #666; border: none; border-radius: 0;">초기화</button>
                </div>
        </div>
    </div>
</template>

<script setup>
import { inject, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const regionList = store.state.regionCode.regionList;
const countyList = ref([]);

// 도시 분야 선택시 호출
function selectCity(event) {
    const cityCode = Number(event.target.value);
    countyList.value = findCounty(cityCode);
    document.getElementById("county").selectedIndex = 0;
}
// 하위 분야 리스트를 찾아오기
function findCounty(cityCode) {
    for (let city of regionList) {
        if (city.cityCode === cityCode) {
            return city.county;
        }
    }
    return [];
}
const searchIndex = inject('searchIndex');

</script>

<style scoped>
.aa {
    height: 30px;
    line-height: 30px;
    padding: 0;
}

.bb {
    padding: 0 0 0 12px;
    margin-left: 12px;
    background: url("@/assets/ico_search.png") center left no-repeat;
}
</style>