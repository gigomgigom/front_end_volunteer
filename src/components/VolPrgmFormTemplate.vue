<template>
    <div class="modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <!-- slot -->
                        <slot name="header">제목</slot>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex flex-column align-items-center" style="overflow: auto">
                        <table id="modalTable">
                            <tbody>
                                <tr>
                                    <td colspan="1">
                                        봉사 제목
                                    </td>
                                    <td colspan="3">
                                        <input type="text" class="form-control" v-model="providedData.title">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="1">
                                        봉사 기간
                                    </td>
                                    <td colspan="1">
                                        <VueDatePicker range :enable-time-picker="false"
                                            v-model="providedData.actDate" />
                                    </td>
                                    <td colspan="1">
                                        봉사 시간
                                    </td>
                                    <td colspan="1">
                                        <VueDatePicker time-picker disable-time-range-validation range
                                            :show-minute="false" placeholder="Select Time"
                                            v-model="providedData.actTime" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="1">
                                        모집 기관
                                    </td>
                                    <td colspan="3">
                                        <div>
                                            <input type="text" class="form-control"
                                                v-model="providedData.recruitCenter">
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="1">
                                        모집 기간
                                    </td>
                                    <td colspan="1">
                                        <VueDatePicker range :enable-time-picker="false"
                                            v-model="providedData.recruitDate" />
                                    </td>
                                    <td colspan="1">
                                        모집 인원
                                    </td>
                                    <td colspan="1">
                                        <input type="number" class="form-control" v-model="providedData.recruitCnt">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="1">
                                        봉사 분야
                                    </td>
                                    <td colspan="1">
                                        <select class="form-select"
                                            v-model="providedData.highCls">
                                            <option selected :value="''">전체</option>
                                            <option v-for="(highCls, index) in categoryList" :key="index"
                                                :value="highCls.highClsCode">{{ highCls.highClsName }}</option>
                                        </select>
                                    </td>
                                    <td colspan="2">
                                        <select id="lowCls" class="form-select" v-model="providedData.lowCls">
                                            <option selected :value="''">전체</option>
                                            <option v-for="(lowCls, index) in lowClsList" :key="index"
                                                :value="lowCls.lowClsCode">{{ lowCls.lowClsName }}</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="1">
                                        봉사 지역
                                    </td>
                                    <td colspan="1">
                                        <select class="form-select"
                                            v-model="providedData.city">
                                            <option selected :value="0">전체</option>
                                            <option v-for="(city, index) in regionList" :key="index"
                                                :value="city.cityCode">{{ city.cityName }}</option>
                                        </select>
                                    </td>
                                    <td colspan="2">
                                        <select id="county" class="form-select" v-model="providedData.county">
                                            <option selected :value="0">전체</option>
                                            <option v-for="(county, index) in countyList" :key="index"
                                                :value="county.countyCode">{{ county.countyName }}</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="1">
                                        봉사 장소
                                    </td>
                                    <td colspan="3">
                                        <input type="text" class="form-control" v-model="providedData.actPlace">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="1">
                                        담당자명
                                    </td>
                                    <td colspan="1">
                                        <input type="text" class="form-control" v-model="providedData.mngName">
                                    </td>
                                    <td colspan="1">
                                        부서 연락처
                                    </td>
                                    <td colspan="1">
                                        <input type="text" class="form-control" v-model="providedData.mngTel">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="1" rowspan="3">
                                        내용
                                    </td>
                                    <td colspan="3" rowspan="3">
                                        <textarea class="form-control" id="exampleFormControlTextarea1"
                                            v-model="providedData.content" rows="3"></textarea>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <div class="mt-3">
                            <span class="me-2">봉사자 유형</span>
                            <input class="form-check-input me-1" type="checkbox" v-model="providedData.adultPosbl">
                            <label class="form-check-label me-3" for="adultAble">성인</label>
                            <input class="form-check-input me-1" type="checkbox" v-model="providedData.teenPosbl">
                            <label class="form-check-label" for="yngAble">청소년</label>
                        </div>
                        <div class="mt-5">
                            <label for="formFile" class="form-label">첨부 파일</label>
                            <input class="form-control" type="file" id="battachInput" @change="battachValidate($event)">
                        </div>
                        <div class="mt-3">
                            <label for="formFile" class="form-label">이미지 파일</label>
                            <input class="form-control" type="file" id="imageInput" accept="image/*"
                                @change="imageValidate($event)">
                        </div>
                        <div class="mt-1 d-flex justify-content-center">
                            <img src="@/assets/home.png">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        <!-- slot -->
                        <button type="button" class="btn btn-info btn-sm" data-bs-dismiss="modal">확인</button>
                        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">닫기</button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, inject, watch, watchEffect } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const providedData = inject('providedData');

const categoryList = store.state.categoryCode.categoryList;
const lowClsList = ref([]);
const regionList = store.state.regionCode.regionList;
const countyList = ref([]);
// 하위 분야 리스트를 찾아오기
function findLowCls(highClsCode) {
    for (let highCls of categoryList) {
        if (highCls.highClsCode === highClsCode) {
            return highCls.lowClsList;
        }
    }
    return [];
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
//이미지 파일 유효성 검사
function imageValidate(event) {
    const file = event.target.files[0];
    if (file) {
        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (event.target.files.length > 1) {
            alert('파일은 한개만 선택가능합니다.');
            event.target.value = '';
        } else if (!validImageTypes.includes(file.type)) {
            alert('이미지 파일만 업로드 가능합니다.');
            event.target.value = '';
        }
    }
}
//첨부 파일 유효성 검사
function battachValidate(event) {
    const file = event.target.files[0];
    if(file) {
        if(event.target.files.length > 1) {
            alert('파일은 한개만 선택가능합니다.');
            event.target.value = '';
        }
    }
}

watch(() => providedData.value.city, (newCity, oldCity) => {
    countyList.value = findCounty(newCity);
    if(providedData.value.isRgExternal) {
        providedData.value.isRgExternal = false;
    } else {
        providedData.value.county = 0;
    }
})

watch(() => providedData.value.highCls, (newCls, oldCls) => {
    lowClsList.value = findLowCls(newCls);
    if(providedData.value.isClExternal) {
        providedData.value.isClExternal = false;
    } else {
        providedData.value.lowCls = '';
    }
})


</script>

<style scoped>
.modal-body>div>div {
    width: 90%;
}

table {
    width: 90%;
}

td {
    text-align: center;
}

.modal-dialog {
    overflow-y: initial !important
}

.validate_style {
    border: 1px solid red;
}

.validate_text {
    color: red;
    font-size: 0.9em;
    display: none;
}

.validate_text_active {
    display: inline;
}
</style>