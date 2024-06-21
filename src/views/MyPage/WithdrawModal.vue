<template>
   <div class="modal" v-if="isOpen">
    <div class="modal-content">
      <p>개인정보가 삭제됩니다. 그래도 탈퇴하시겠습니까?</p>
      <div class="modal-buttons">
        <button class="modal-confirm" @click="handleConfirm">확인</button>
        <button class="modal-cancel" @click="handleCancel">취소</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};

const handleConfirm = () => {
  console.log("탈퇴 처리가 완료되었습니다.");
  isOpen.value = false;
};

const handleCancel = () => {
  isOpen.value = false;
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

.modal-confirm, .modal-cancel {
  padding: 8px 16px;
  margin: 0 8px;
  cursor: pointer;
}
</style>