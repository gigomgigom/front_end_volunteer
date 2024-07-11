<template>
  <EduPrgmList>
    <template v-slot:right-side="{ index }">
      <div class="eduApplStts">
        <span>{{ getSttsString(index) }}</span>
      </div>
      <HighlightButton text="취소" v-if="responseData.programList[index].applStts === 1" @buttonClick="cancelApply(index)"
        style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; padding-right: 15px;" />
    </template>
  </EduPrgmList>
  <navBar />
</template>

<script setup>
import HighlightButton from '@/components/Common/HighlightButton.vue';
import EduPrgmList from '@/components/EduPrgmList.vue';
import NavBar from '@/components/Common/NavBar.vue';
import { inject } from 'vue';
import eduParticipateAPI from '@/apis/eduParticipateAPI';
import router from '@/router';

const responseData = inject('responseData');

function getSttsString(index) {
  let sttsNo = responseData.value.programList[index].applStts;
  switch (sttsNo) {
    case 1:
      return '접수';
    case 2:
      return '취소';
    case 3:
      return '완료';
  }
}
async function cancelApply(index) {
  const confirmResult = confirm('신청을 취소하시게 되면 다시 해당 프로그램을 신청하실 수 없습니다. 정말 취소하시겠습니까?');
  if (confirmResult) {
    try {
      const response = await eduParticipateAPI.cancelEduProgram(responseData.value.programList[index].no);
      if(response.data.result === 'success') {
        alert('교육프로그램 신청을 취소하였습니다.');
        router.go();
      } else {
        alert(response.data.reason);
        router.go();
      }
    } catch(error) {
      alert('서버 통신간 오류가 발생하였습니다. 잠시 후 다시 시도해주십시오');
      router.go();
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.eduApplStts {
  width: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(240, 103, 4);
  color: rgb(240, 103, 4);
  font-weight: bold;
  margin-bottom: 10px;
}
</style>