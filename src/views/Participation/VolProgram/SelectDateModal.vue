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
                            <span><b>제목</b> : {{ volDetail.title }}</span>
                            <span><b>봉사자 유형</b> : {{ volDetail.adultTeen }}</span>
                            <span><b>봉사분야</b> : {{ volDetail.ctg }}</span>
                        </div>
                        <div class="col-md-6 d-flex flex-column">
                            <span><b>모집 기관</b> : {{ volDetail.recruitCenter }}</span>
                            <span><b>봉사 지역</b> : {{ volDetail.region }}</span>
                            <span><b>봉사 장소</b> : {{ volDetail.actPlace }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            <div>
                                <h6><b>봉사희망일자 선택</b></h6>
                            </div>
                            <div style="border: 1px solid black" class="mb-2"></div>
                            <VueDatePicker class="mb-5" v-model="selectedDate" :min-date="startDate" no-title
                                :max-date="endDate" multi-dates :enable-time-picker="false"
                                :day-names="['월', '화', '수', '목', '금', '토', '일']">
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
                            <span><b>신청인</b> : {{ memberInfo.name }}</span>
                            <span><b>연락처</b> : {{ memberInfo.tel }}</span>
                            <span><b>이메일</b> : {{ memberInfo.email }}</span>
                        </div>
                        <div class="d-flex flex-column py-2 px-3"
                            style="border: 1px solid silver;  border-radius: 5px; font-size: 13px;">
                            <span>회원님이 등록하신 정보가 표시됩니다. 등록된 정보가 정확한지 확인해주세요.</span>
                            <span style="color: rgb(243, 98, 0);">연락처가 미 등록된 경우 봉사활동 정보를 받으실 수 없습니다.</span>
                            <span>휴대폰번호 및 이메일로 봉사활동 정보를 제공 받으시겠습니까?</span>
                            <div class="d-flex justify-content-center mt-3">
                                <input class="form-check-input me-3" type="checkbox" id="checkbox"
                                    style="border: 1px solid gray">
                                <label class="form-check-label" for="checkbox">
                                    정보제공 및 수신동의
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <HighlightButton text="신청하기" data-bs-dismiss="modal" @buttonClick="applyVolProgram" />
                    <NormalButton text="취소" data-bs-dismiss="modal" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import memberAPI from '@/apis/memberAPI';
import volParticipateAPI from '@/apis/volParticipateAPI';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';
import router from '@/router';
import store from '@/store';
import { inject, onMounted, ref } from 'vue';

const selectedDate = ref(null);

const volDetail = inject('detail');
const startDate = ref(null);
const endDate = ref(null);
const memberInfo = ref({
    name: '',
    tel: '',
    email: ''
});

onMounted(() => {
    startDate.value = new Date(volDetail.value.actDate.split(' - ')[0]);
    endDate.value = new Date(volDetail.value.actDate.split(' - ')[1]);
    if(store.state.userId !== '') {
        getMemberInfo();
    }
    
})

async function getMemberInfo() {
    try {
        const response = await memberAPI.getMemberInfo();
        memberInfo.value.name = response.data.member.memberName;
        memberInfo.value.tel = response.data.member.tel;
        memberInfo.value.email = response.data.member.email;
    } catch(error) {
        alert('에러가 발생했습니다. 다시 시도해주십시오.');
        router.go();
    }
}

async function applyVolProgram() {
    let selectedDateToString = [];
    for(let date of selectedDate.value) {
        selectedDateToString.push(dateFormat(date));
    }
    let data = {
        programNo: volDetail.value.no,
        dateList: selectedDateToString
    }
    try {
        const response = await volParticipateAPI.applyVolProgram(JSON.parse(JSON.stringify(data)));
        if(response.data.result === 'success') {
            alert('신청이 완료되었습니다!');
            router.go();
        } else {
            alert(response.data.reason);
            router.go();
        }
    } catch(error) {
        alert('에러가 발생했습니다. 다시 시도해주십시오.');
        console.log(error);
        router.go();
    }
}

//DATE객체를 문자열(YYYY-MM-DD)로 변환
function dateFormat(dateStr) {
  const date = new Date(dateStr);
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;

  return date.getFullYear() + '-' + month + '-' + day;
}
</script>

<style scoped></style>