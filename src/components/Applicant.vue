<template>
    <div class="modal">
        <div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        프로그램 신청인 정보
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div style="overflow: auto">
                        <table class="table">
                            <thead class="thead">
                                <tr>
                                    <th>신청인 이름</th>
                                    <th>아이디</th>
                                    <th>생년월일</th>
                                    <th>연락처</th>
                                    <th>소속 센터</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(member, index) in providedData.applicant" :key="index">
                                    <td>{{ member.memberName }}</td>
                                    <td>{{ member.memberId }}</td>
                                    <td>{{ dateFormat(member.birthdate) }}</td>
                                    <td>{{ member.tel }}</td>
                                    <td>{{ findRegionWithRegionNo(Number(member.affCenter), store.state.regionCode.regionList) }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">닫기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const providedData = inject('providedData');

//DATE객체를 문자열(YYYY-MM-DD)로 변환
function dateFormat(dateStr) {
    const date = new Date(dateStr);
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;

    return date.getFullYear() + '-' + month + '-' + day;
}
function findRegionWithRegionNo(regionNo, regionList) {
    let result = {
        cityName: '',
        countyName: '',
    }
    for (let city of regionList) {
        for (let county of city.county) {
            if (county.countyCode === Number(regionNo)) {
                result.cityName = city.cityName;
                result.countyName = county.countyName;
            }
        }
    }
    return result.cityName + ' ' + result.countyName;
}
</script>

<style scoped>
.table {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}
</style>