<template>
    <TextHeader title="회원 탈퇴"/>
   <div class="container">
    <div class="content-wrapper">
      <img src="@/assets/lv2.png" class="image1">
      <h5 class="check1">회원 탈퇴를 하시기 전에 아래 내용을 꼭 확인하시기 바랍니다.</h5>
    </div>
  </div>
  <div class="box">
    <div class="container">
    <div class="content-wrapper">
      <img src="@/assets/qna_list.png" class="image2 mt-2">
      <h6 class="check2">홈페이지 회원이 홈페이지 탈퇴를 할 경우 개인정보 일체가 즉시 삭제됩니다. 다만 삭제 이력(아이디,회원번호,
        소속센터, 삭제자, 삭제일시 등)은 3개월 이내로 보존할 수 있습니다.</h6>
    </div>
    </div>

  </div>
   


    <div class="button-container">
      <div class="text-center mt-3 mb-4">
        <HighlightButton text="탈퇴" class="me-3" @click="openWithdrawModal" />
        <NormalButton text="취소"/>
      </div>
    </div>

    <!-- WithdrawModal 컴포넌트 -->
    <WithdrawModal :isOpen="isWithdrawModalOpen" />
  


</template>

<script setup>
import {ref, onMounted} from 'vue';
import TextHeader from '@/components/Common/TextHeader.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';
import WithdrawModal from '@/views/MyPage/WithdrawModal.vue';

const isWithdrawModalOpen = ref(false);

const openWithdrawModal = () => {
  isWithdrawModalOpen.value = true;
};

</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;

}

.content-wrapper {
  display: flex;

}

.image1 {
  width: 20px; 
  height: 20px;

}

.image2 {
  width: 10px; 
  height: 5px;

}

.check1 {
  font-weight: bold;
  margin: 0;
}

.box {
  border: 1px solid gainsboro;
  margin-top: 25px;
  padding: 20px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}


</style>