<template>
  <VolPrgmList>
    <template v-slot:right-side="{ index }">
      <div class="eduApplStts">
        <span>{{ findStatus(index) }}</span>
      </div>
      <HighlightButton :text="findStatusButtonText(index)" @buttonClick="buttonActionPerSttsNo(index)"
        style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; padding-right: 15px;" 
        v-if="findStatus(index) !== '취소' && findStatus(index) !== '승인요청' && responseData.volApplList[index].revWritten !== 1"/>
    </template>
  </VolPrgmList>
  <ApplRequestModal id="ApplRequestModal" :targetProgramNo="targetProgramNo"/>
  <NavBar/>
  
</template>

<script setup>
import VolPrgmList from '@/components/VolPrgmList.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NavBar from "@/components/Common/NavBar.vue";
import ApplRequestModal from "./ApplRequestModal.vue";
import volParticipateAPI from '@/apis/volParticipateAPI';
import { inject, onMounted, ref } from 'vue';
import { Modal } from 'bootstrap';
import router from '@/router';

let responseData = inject("responseData");
let applRequestModal = null;
const targetProgramNo = ref(0);

onMounted(() => {
  applRequestModal = new Modal(document.getElementById("ApplRequestModal"));
})
//신청내역 상태 텍스트 찾기
function findStatus(index) {
  let sttsNo = responseData.value.volApplList[index].sttsNo;
  switch(sttsNo) {
    case 1:
      return '신청';
    case 2:
      return '취소';
    case 3:
      return '진행';
    case 4:
      return '요청대기';
    case 5:
      return '승인요청';
    case 6:
      return '승인완료';
    case 7:
      return '승인거부';
  }
}
//신청내역 버튼 텍스트 찾기
function findStatusButtonText(index) {
  let sttsNo = responseData.value.volApplList[index].sttsNo;
  switch(sttsNo) {
    case 1:
    case 3:
      return '취소';
    case 4:
      return '승인요청';
    case 6:
      return '후기작성';
    case 7:
      return '재요청';
  }
}
//신청내역 상태 별 버튼을 클릭했을때 액션 지정
function buttonActionPerSttsNo(index) {
  targetProgramNo.value = responseData.value.volApplList[index].programNo;
  let sttsNo = responseData.value.volApplList[index].sttsNo;
  switch(sttsNo) {
    case 1:
    case 3:
      //백엔드 취소 api요청
      cancelVolApply(targetProgramNo.value);
      break;
    case 4:
      //모달창 띄워야함
      showRqstModal(index);
      break;
    case 7:
      //모달창 띄워야함
      alert('거부사유 : ' + responseData.value.volApplList[index].rejectReason);
      showRqstModal(index);
      break;
    case 6:
      //후기 작성으로 이동
      break;
  }
}
//신청 취소
async function cancelVolApply(programNo) {
  const response = await volParticipateAPI.cancelVolAppl(programNo);
  if(response.data.result === 'success') {
    alert('성공적으로 취소되었습니다.');
    router.go('/Details/MyPage/VolApplDetails/ViewApplList');
  } else {
    alert('서버에서 오류가 발생했습니다. 잠시후 다시 요청해주십시오.');
  }
}
//모달창 띄우기
function showRqstModal(index) {
  applRequestModal.show();
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
  font-size: 0.8em;
  color: rgb(240, 103, 4);
  font-weight: bold;
  margin-bottom: 10px;
}
</style>