<template>
 <div class="modal" v-if="isOpen">
    <div class="modal-content">
      <p>
        모든 개인정보가 삭제됩니다.<br> 그래도 탈퇴하시겠습니까?
      </p>
      <div class="modal-buttons">
        <button class="btn btn-small modal-confirm" @click="confirm">확인</button>
        <button class="btn btn-small modal-cancel" @click="cancel">취소</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: Boolean
});

const emit = defineEmits(['close', 'confirm']);

const confirm = () => {
  emit('confirm');
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

.modal-confirm{
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