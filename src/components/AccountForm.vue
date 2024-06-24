<template>
    <div class="info-title-container">
    <div>
      <h4 id="title1">회원정보</h4>
    </div>
    <div class="d-flex align-items-end">
      <span style="color: red">⁕필수 입력 항목입니다.</span>
    </div>
  </div>
  <div class="info-container mb-5">
    <dl class="row info-row">
      <dt class="col-3">이름</dt>
      <dd class="col-9 d-flex align-items-center">
        <span>심영조</span>
      </dd>
    </dl>
    <dl class="row info-row ">
      <dt class="col-3">성별</dt>
      <dd class="col-5">
        <span>남성</span>
      </dd>
    </dl>
    <dl class="row info-row">
      <dt class="col-3">생년월일</dt>
      <dd class="col-9 d-flex align-items-center">
        <span>2000. 01. 07.</span>
      </dd>
    </dl>
    <dl class="row info-row">
      <dt class="col-3">아이디</dt>
      <dd class="col-9 d-flex align-items-center">
        <span>tlarlrma</span>
      </dd>
    </dl>
    <dl class="row info-row">
      <dt class="col-3" style="height: 120px;">주소</dt>
      <dd class="col-9" style="height: 120px;">
        <div>
          <div class="d-flex align-items-center mb-3">
            <div class="d-flex justify-content-center align-items-center w-100">
              <input type="text" class="form-control form-control-sm me-2" placeholder="우편번호">
              <button class="btn btn-danger btn-sm me-2">우편번호 찾기</button>
            </div>
            <span class="verification-text">8자리 이상 16자리 이하로 입력</span>
          </div>
          <div class="d-flex align-items-center">
            <input type="text" class="form-control form-control-sm me-2 custom-input " placeholder="주소 입력">
            <input type="text" class="form-control form-control-sm me-2 custom-input " placeholder="상세 주소 입력">
          </div>
        </div>
      </dd>
    </dl>
    <dl class="row info-row">
      <dt class="col-3">휴대폰번호</dt>
      <dd class="col-5 d-flex align-items-center">
        <select class="form-select me-2" aria-label="번호 선택">
          <option selected>010</option>
          <option value="1">011</option>
          <option value="2">016</option>
          <option value="3">013</option>
        </select>
        <input type="text" class="form-control form-control-sm me-2">
        <input type="text" class="form-control form-control-sm me-2">
      </dd>
    </dl>
    <dl class="row info-row">
      <dt class="col-3">이메일 주소</dt>
      <dd class="col-9">
        <input type="text" class="form-control form-control-sm me-2 custom-input">
      </dd>
    </dl>

    <dl class="row info-row">
      <dt class="col-3" style="height: 120px;">수신동의 여부</dt>
      <dd class="col-9" style="height: 120px;">
        <div class="d-flex flex-column">
          <div class="d-flex mb-3">
            <div class="d-flex align-items-center me-4">
              <span class="me-3" style="font-weight: bold">휴대폰</span>
            </div>
            <div class="form-check d-flex align-items-center me-4">
              <input class="form-check-input me-1" type="radio" name="phone-check" id="phone-yes" value="yes">
              <label class="form-check-label me-3" for="phone-yes">
                수신동의
              </label>
            </div>
            <div class="form-check d-flex align-items-center">
              <input class="form-check-input me-1" type="radio" name="phone-check" id="phone-no" value="no">
              <label class="form-check-label" for="phone-no">
                수신거부
              </label>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="d-flex align-items-center me-4">
              <span class="me-3" style="font-weight: bold">이메일</span>
            </div>
            <div class="form-check d-flex align-items-center me-4">
              <input class="form-check-input me-1" type="radio" name="email-check" id="email-yes" value="yes">
              <label class="form-check-label me-3" for="email-yes">
                수신동의
              </label>
            </div>
            <div class="form-check d-flex align-items-center">
              <input class="form-check-input me-1" type="radio" name="email-check" id="email-no" value="no">
              <label class="form-check-label" for="email-no">
                수신거부
              </label>
            </div>
          </div>
        </div>
      </dd>
    </dl>
  </div>
  <div class="info-title-container">
    <div>
      <h4 id="title1">회원 부가정보 입력</h4>
    </div>
  </div>
  <div class="info-container">
    <dl class="row info-row">
      <dt class="col-3">소속센터</dt>
      <dd class="col-5 d-flex align-items-center">
        <select class="form-select me-2" aria-label="시 선택">
          <option selected>시/군 선택</option>
          <option value="1">서울특별시</option>
          <option value="2">부산광역시</option>
          <option value="3">대구광역시</option>
        </select>
        <i class="fas fa-chevron-right me-2"></i>
        <select class="form-select" aria-label="군 선택">
          <option selected>선택</option>
          <option value="1">강남구</option>
          <option value="2">서초구</option>
          <option value="3">송파구</option>
        </select>
      </dd>
    </dl>

    <dl class="row info-row mb-3">
      <dt class="col-3">희망분야</dt>
      <dd class="col-5 d-flex align-items-center">
        <select class="form-select me-2" aria-label="시 선택">
          <option selected>선택</option>
          <option value="1">봉사1</option>
          <option value="2">봉사2</option>
          <option value="3">봉사3</option>
        </select>
        <i class="fas fa-chevron-right me-2"></i>
        <select class="form-select" aria-label="군 선택">
          <option selected>선택</option>
          <option value="1">봉사1</option>
          <option value="2">봉사2</option>
          <option value="3">봉사3</option>
        </select>
      </dd>
    </dl>
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
* {
  padding: 0;
  margin: 0;
}

.info-title-container {
  display: flex;
  justify-content: space-between;
}

#title1 {
  position: relative;
  padding: 10px 20px 20px;
  font-size: 24px;
  font-weight: 550;
  line-height: 100%;
  color: #333;
  letter-spacing: -0.025em;
}

#title1:after {
  content: '';
  display: block;
  position: absolute;
  width: 23px;
  height: 22px;
  top: 12px;
  left: 0;
  overflow: hidden;
  background: url("@/assets/lv2.png") 0 0 no-repeat;
}

.info-container {
  border-top: 2px solid black;
}

dl {
  display: flex;
}

.info-row {
  border-bottom: 1px solid silver;
}

dt {
  height: 60px;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(238, 238, 238);
  border-right: 2px solid silver;
}

dd {
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}

.form-control-sm {
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
}

.verification-text {
  font-size: 0.875rem;
  color: #6c757d;
}

.form-select {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn {
  white-space: nowrap;
}

.verification-text {
  white-space: nowrap;
  /*줄바꿈 없이 한줄로 나옴*/
}

.btn-sm {
  background-color: #6c757d;
  border-color: #6c757d;
  border-radius: 0 !important;
  padding: 5px;
}

.custom-input {
  width: 50%;
}
</style>
