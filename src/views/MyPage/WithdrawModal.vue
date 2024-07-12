<template>
  <div class="modal" v-if="isOpen">
    <loading :active="isLoading" :can-cancel="false"/>
    <div class="modal-content">
      <p>{{ modalMessage }}</p>
      <div class="modal-buttons">
        <button class="btn btn-small modal-confirm" @click="confirmAndDelete">확인</button>
        <button class="btn btn-small modal-cancel" @click="cancel">취소</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import memberAPI from '@/apis/memberAPI';

const isLoading = ref(false);
const modalMessage = ref('정말 탈퇴하시겠습니까...?');

const props = defineProps({
  isOpen: Boolean
});

const emit = defineEmits(['close', 'confirm']);

const confirmAndDelete = async () => {
  isLoading.value = true;
  try {
    const response = await memberAPI.deleteMember();
    if (response.data.result === 'success') {
      modalMessage.value = '회원 탈퇴가 완료되었습니다!';
    } else {
      modalMessage.value = '탈퇴 처리가 정상적으로 되지 않았습니다.';
    }
  } catch (error) {
    console.log('에러 발생: ', error);
    modalMessage.value = '오류가 발생했습니다. 잠시 후 다시 시도해 주세요!';
  } finally {
    isLoading.value = false;
  }
};

const cancel = () => {
  emit('close');
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
  text-align: center;
}

.modal-buttons {
  margin-top: 20px;
}

.modal-confirm {
  padding: 8px 16px;
  margin: 0 8px;
  cursor: pointer;
  background-color: coral;
  border-color: #fff;
  color: #fff;
}

.modal-cancel {
  padding: 8px 16px;
  margin: 0 8px;
  cursor: pointer;
  background-color: #666;
  border-color: #fff;
  color: #fff;
}
</style>
