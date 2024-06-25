<template>
  <TextHeader title="비밀번호 변경" />
  <div>
    <h5 class="changepw">비밀번호 변경</h5>
    <h6 class="mt-2">8자리 이상 15자리 미만으로, 영문, 숫자,특수문자 1자 이상 필수 입력<span class="highlight"> (예:aabb1234#)</span></h6>
    <div class="box">
      <div class="row align-items-center">
        <div class="col-4 text-end pe-3">기존 비밀번호</div>
        <div class="col">
          <input v-model="oldPassword" class="form-control form-control-sm custom-input" type="password"
            aria-label=".form-control-sm example">
        </div>
      </div>
      <div class="row mt-3 align-items-center">
        <div class="col-4 text-end pe-3">새 비밀번호</div>
        <div class="col">
          <input v-model="newPassword" class="form-control form-control-sm custom-input" type="password"
            aria-label=".form-control-sm example">
        </div>
        <div v-if="newPwErrorMsg" class="text-center mt-2 text-danger">
          {{ newPwErrorMsg }}
        </div>
      </div>
      <div class="row mt-3 align-items-center">
        <div class="col-4 text-end pe-3">새 비밀번호 확인</div>
        <div class="col">
          <input v-model="confirmPassword" class="form-control form-control-sm custom-input" type="password"
            aria-label=".form-control-sm example">
        </div>
        <div v-if="confirmPwErrorMsg" class="text-center mt-2 text-danger">
          {{ confirmPwErrorMsg }}
        </div>
      </div>
    </div>
    <div class="text-center mt-3 mb-4">
      <HighlightButton text="저장" @click="changePassword" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import TextHeader from '@/components/Common/TextHeader.vue';

// 상태 변수
const oldPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const newPwErrorMsg = ref('');
const confirmPwErrorMsg = ref('');

// 비밀번호 검증 함수
const validatePassword = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/;
  return regex.test(password);
};

// 비밀번호 변경 함수
const changePassword = async () => {
  // 초기화
  newPwErrorMsg.value = '';
  confirmPwErrorMsg.value = '';

  // 입력 값 검증
  if (!validatePassword(newPassword.value)) {
    newPwErrorMsg.value = '비밀번호는 8자리 이상 15자리 미만으로, 영문, 숫자, 특수문자 1자 이상 포함해야 합니다.';
    return;
  }
  if (newPassword.value !== confirmPassword.value) {
    confirmPwErrorMsg.value = '새 비밀번호와 비밀번호 확인이 일치하지 않습니다.';
    return;
  }

  try {
    // 비밀번호 변경 API 호출
    const response = await axios.post('/api/change-password', {
      oldPassword: oldPassword.value,
      newPassword: newPassword.value
    });

    alert('비밀번호가 성공적으로 변경되었습니다.');
  } catch (error) {
    if (error.response) {
      newPwErrorMsg.value = error.response.data.message || '비밀번호 변경에 실패했습니다.';
    } else {
      newPwErrorMsg.value = '서버와 통신 중 오류가 발생했습니다.';
    }
  }
};
</script>

<style scoped>
.changepw {
  font-weight: bold;
}

.box {
  border: 1px solid gainsboro;
  padding: 50px;
  margin-top: 25px;
}

.custom-input {
  width: 70%;
}

.highlight {
  color: red;
}

.text-center {
  text-align: center;
}

.text-danger {
  color: red;
}
</style>
