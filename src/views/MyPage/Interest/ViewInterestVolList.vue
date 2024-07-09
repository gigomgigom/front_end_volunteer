<template>
  <VolPrgmList>
    <template v-slot:vol-checkbox>
      <div class="d-flex align-items-center mb-2">
        <div class="me-2">
          <input class="form-check-input" type="checkbox" :value="true" @change="selectAll()">
          <label class="form-check-label" for="selectAllChecked" style="font-size: 14px;">
            전체 선택
          </label>
        </div>
        <NormalButton text="선택 삭제" @buttonClick="cancelSelectedVolProgram"
          style="font-size: 14px; padding-top: 2px; padding-bottom: 2px; padding-left: 5px; padding-right: 5px;" />
      </div>
    </template>
    <template v-slot:checkBox="{ index }">
      <div class="mx-2">
        <input class="form-check-input" type="checkbox" name="program" :value="index">
      </div>
    </template>
    <template v-slot:right-side="{ index }">
      <div class="right-side">
        <span>마감</span>
        <span style="color: rgb(240, 103, 4);">{{ isOverDeadline(index) }}</span>
      </div>
    </template>
  </VolPrgmList>
  <NavBar />
</template>

<script setup>
import NormalButton from '@/components/Common/NormalButton.vue';
import VolPrgmList from '@/components/VolPrgmList.vue';
import NavBar from '@/components/Common/NavBar.vue';
import volProgramAPI from '@/apis/volProgramAPI';
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const responseData = inject('responseData');
const isSelectAllCheckboxSelected = ref(false);
//마감일자 계산
function isOverDeadline(index) {
  let dateList = responseData.value.programList[index].recruitDate.split(' - ');
  let endDate = new Date(dateList[1]);
  if (endDate.getTime() < new Date().getTime()) {
    return '';
  } else {
    let timeDiff = endDate.getTime() - new Date().getTime();
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + '일전';
  }
}
//전체 선택하기(체크박스 onChange함수)
function selectAll() {
  isSelectAllCheckboxSelected.value = !isSelectAllCheckboxSelected.value;
  var checkboxes = document.querySelectorAll('input[name="program"]');
  if (isSelectAllCheckboxSelected.value) {
    for (let checkbox of checkboxes) {
      checkbox.checked = true;
    }
  } else {
    for (let checkbox of checkboxes) {
      checkbox.checked = false;
    }
  }
}
//선택한 봉사프로그램 관심등록 취소하기
function cancelSelectedVolProgram() {
  var selectedCheckboxes = document.querySelectorAll('input[name="program"]:checked');
  var checkedVolProgramNo = [];

  for (let selectedBox of selectedCheckboxes) {
    checkedVolProgramNo.push(responseData.value.programList[selectedBox.value].no);
  }
  let data = JSON.parse(JSON.stringify(checkedVolProgramNo));

  let askDecision = confirm('선택하신 봉사프로그램을 관심등록 목록에서 해제하시겠습니까?');
  if (askDecision) {
    volProgramAPI.cancelInterestVolProgram(data)
      .then(response => {
        const responseData = response.data;
        if (responseData.result === 'success') {
          alert('성공적으로 해제되었습니다.');
          router.go();
        } else {
          alert('서버에서 오류가 발생하였습니다. 잠시후 다시 시도해주십시오');
        }
      })
      .catch(error => {
        console.log('에러 발생 : ', error);
      });
  }
}
</script>

<style scoped>
.right-side {
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid silver;
  color: gray;
}
</style>