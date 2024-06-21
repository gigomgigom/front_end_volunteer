<template>
    <div class="modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><b>일자 선택</b></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <h6><b>봉사프로그램 정보</b></h6>
                    </div>
                    <div style="border: 1px solid black" class="mb-2"></div>
                    <div class="row py-2 mb-4 px-2">
                        <div class="col-md-6 d-flex flex-column">
                            <span><b>봉사프로그램명</b> : 폐지줍기</span>
                            <span><b>봉사자 유형</b> : 청소년</span>
                            <span><b>봉사분야</b> : 행정보조 > 업무지원</span>
                        </div>
                        <div class="col-md-6 d-flex flex-column">
                            <span><b>모집 기관</b> : 양평서부청소년문화의집</span>
                            <span><b>봉사 지역</b> : 서울특별시 송파구</span>
                            <span><b>봉사 장소</b> : IT 벤처타워</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            <div>
                                <h6><b>봉사희망일자 선택</b></h6>
                            </div>
                            <div style="border: 1px solid black" class="mb-2"></div>
                            <VueDatePicker class="mb-5" v-model="selectedDate" :min-date="startDate" no-title
                                :max-date="endDate" multi-dates @update:model-value="updateSelectedDateCount"
                                :enable-time-picker="false" :day-names="['월', '화', '수', '목', '금', '토', '일']">
                            </VueDatePicker>
                        </div>
                        <div class="col-md-7">
                            <h6><b>선택하신 일자</b></h6>
                            <div style="border: 1px solid black" class="mb-2"></div>
                            <div v-if="selectedDate === null">
                                <span>선택한 일자가 없습니다.</span>
                            </div>
                            <div v-if="selectedDate !== null">
                                <ul>
                                    <li v-for="(selected, index) in selectedDate" :key="index">
                                        <div>
                                            <span class="border-bottom">{{ selected.getFullYear() + '년 ' +
                                                (selected.getMonth() + 1)
                                                + '월 ' + selected.getDate()
                                                + '일' }}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="d-flex justify-content-between">
                            <h6><b>신청인 정보</b></h6>
                            <div style="font-size: 12px" class="d-flex align-items-end pb-1">
                                신청인의 연락처, 이메일 변경은 <span style="color: rgb(243, 98, 0);">'나의 자원봉사>회원정보>기본정보'</span>에서
                                수정하시길 바랍니다.
                            </div>
                        </div>
                        <div style="border: 1px solid black"></div>
                        <div class="d-flex justify-content-between py-2 px-2">
                            <span><b>신청인</b> : 심영조</span>
                            <span><b>연락처</b> : 010-2810-4870</span>
                            <span><b>이메일</b> : tlarlrma@naver.com</span>
                        </div>
                        <div class="d-flex flex-column py-2 px-3"
                            style="border: 1px solid silver;  border-radius: 5px; font-size: 13px;">
                            <span>회원님이 등록하신 정보가 표시됩니다. 등록된 정보가 정확한지 확인해주세요.</span>
                            <span style="color: rgb(243, 98, 0);">연락처가 미 등록된 경우 봉사활동 정보를 받으실 수 없습니다.</span>
                            <span>휴대폰번호 및 이메일로 봉사활동 정보를 제공 받으시겠습니까?</span>
                            <div class="d-flex justify-content-center mt-3">
                                <input class="form-check-input me-3" type="checkbox" id="checkbox" style="border: 1px solid gray">
                                <label class="form-check-label" for="checkbox">
                                    정보제공 및 수신동의
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <HighlightButton text="신청하기" data-bs-dismiss="modal" />
                    <NormalButton text="취소" data-bs-dismiss="modal" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';
import { ref, vModelCheckbox, watch } from 'vue';

const startDate = new Date(2024, 5, 19);
const endDate = new Date(2024, 5, 23);

const selectedDate = ref(null);
</script>

<style scoped></style>