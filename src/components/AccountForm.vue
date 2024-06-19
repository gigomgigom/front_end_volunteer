<template>
  <div class="account-form">
    <h2>회원정보</h2>
    <form @submit.prevent="handleSubmit">
        
      <table>
        <tr>
          <th colspan="2" class="top-line"></th>
        </tr>
        <tr>
          <th>아이디</th>
          <td><input type="text" v-model="formData.id" readonly /></td>
        </tr>
        <tr>
          <th>회원번호</th>
          <td><input type="text" v-model="formData.memberNumber" readonly /></td>
        </tr>
        <tr class="name-row">
          <th>성명</th>
          <td>
            <div class="name-group">
              <input type="text" v-model="formData.name" readonly />
              <!-- <button type="button" @click="changeName" class="btn-secondary">이름 변경</button> -->
            </div>
          </td>
        </tr>
        <tr>
          <th>생년월일</th>
          <td><input type="date" v-model="formData.birthDate" /></td>
        </tr>
        <tr>
          <th>주소</th>
          <td>
            <div class="address-group">
              <input type="text" v-model="formData.zipCode" />
              <button type="button" @click="findZipCode" class="btn-secondary">우편번호 찾기</button>
            </div>
            <input type="text" v-model="formData.address" placeholder="주소 입력" />
          </td>
        </tr>
        <tr>
          <th>휴대폰 번호</th>
          <td>
            <div class="phone-group">
              <select v-model="formData.mobileCarrier">
                <option value="010">010</option>
                <!-- 다른 옵션들 추가 -->
              </select>
              <input type="text" v-model="formData.mobileNumber" maxlength="8" />
            </div>
          </td>
        </tr>
        <tr>
          <th>이메일 주소</th>
          <td>
            <div class="email-group">
              <input type="text" v-model="formData.emailLocal" /> @
              <select v-model="formData.emailDomain">
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="">직접 입력</option>
              </select>
              <input type="text" v-model="formData.customEmailDomain" v-if="formData.emailDomain === ''" placeholder="이메일 도메인 입력" />
              <div class="noemail">   
                <label class="no-email-label"><input type="checkbox" v-model="formData.noEmail" /> 없음</label>            </div>
            </div>
          </td>
        </tr>
        <tr>
          <th>소속센터</th>
          <td>
            <div class="center-group">
              <select v-model="formData.center">
                <option value="서울특별시">서울특별시</option>
                <option value="부산광역시">부산광역시</option>
                <!-- 다른 옵션들 추가 -->
              </select>
              <select v-model="formData.subCenter">
                <option value="">선택</option>
                <!-- 다른 옵션들 추가 -->
              </select>
            </div>
          </td>
        </tr>
        <tr>
          <th>희망분야 (시간인증봉사)</th>
          <td>
            <div class="field-group">
              <select v-model="formData.desiredField">
                <option value="">선택</option>
                <!-- 다른 옵션들 추가 -->
              </select>
              <select v-model="formData.subField">
                <option value="">선택</option>
                <!-- 다른 옵션들 추가 -->
              </select>
            </div>
          </td>
        </tr>
        <tr>
          <th colspan="2" class="bottom-line"></th>
        </tr>
      </table>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const formData = reactive({
  id: 'wwuup1111',
  memberNumber: '26641728',
  name: '김봉봉',
  birthDate: '',
  zipCode: '',
  address: '',
  mobileCarrier: '010',
  mobileNumber: '12345678',
  emailLocal: 'aa11',
  emailDomain: 'naver.com',
  customEmailDomain: '',
  noEmail: false,
  center: '',
  subCenter: '',
  desiredField: '',
  subField: '',
  mobileConsent: false,
  emailConsent: false,
});

const handleSubmit = () => {
  console.log('Form submitted:', formData);
};

const handleCancel = () => {
  console.log('Form cancelled');
};

const changeName = () => {
  // 이름 변경 로직
};

const findZipCode = () => {
  // 우편번호 찾기 로직
};
</script>

<style scoped>
.top-line, .bottom-line {
  border-bottom: 2px solid #757575;
}

.noemail{
    align-content: center;
}

.account-form {
  max-width: 800px;
  margin: auto;
  background-color: #f9f9f9;
  padding-top: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h2 {
  text-align: left;
  color: #333;
  font-size: 24px;
  font-weight: 700;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

th {
  background-color: #f4f4f4;
  text-align: left;
  font-weight: 600;
  font-size: 16px;
}

input, select {
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
}

.address-group, .name-group, .phone-group, .email-group {
  display: flex;
  align-items: center;
}

.address-group input, .phone-group input, .email-group input, .email-group select {
  flex: 1;
}

.address-group button, .phone-group label, .email-group label {
  margin-left: 10px;
}

.phone-group select {
  flex: 0 0 100px;
  margin-right: 5px;
}

.center-group, .field-group {
  display: flex;
  gap: 10px;
}

.name-group {
  display: flex;
  gap: 10px;
}

.name-group button {
  height: 100%;
  white-space: nowrap;
}

.btn-primary, .btn-secondary {
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.5;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.form-actions {
  display: flex;
  justify-content: center;
}

.button-group {
  display: flex;
  gap: 10px;
}


.no-email-label {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

/* .consent-group {
  display: flex;
  flex-direction: column;
}

.consent-group label {
  margin-bottom: 10px;
} */
</style>
