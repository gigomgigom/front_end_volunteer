<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <TextHeader title="회원가입"/>
  <div class="info-title-container">
    <div>
      <h4 id="title1">회원정보</h4>
    </div>
    <div class="d-flex align-items-end">
      <span style="color: red">⁕필수 입력 항목입니다.</span>
    </div>
  </div>
  <div class="info-container">
    <dl class="row info-row">
        <dt class="col-3">이름</dt>
        <dd class="col-9 d-flex align-items-center">
          <input type="text" class="form-control form-control-sm me-2 custom-input">
          
        </dd>
      </dl>
    <dl class="row info-row ">
        <dt class="col-3">성별</dt>
        <dd class="col-5">
          <div class="form-check d-flex align-items-center me-4 ms-4">
      <input class="form-check-input me-1" type="radio" name="phone-check" id="phone-yes" value="yes">
      <label class="form-check-label me-3" for="phone-yes">
        남성
      </label>
    </div>
   
    <div class="form-check d-flex align-items-center">
      <input class="form-check-input me-1" type="radio" name="phone-check" id="phone-no" value="no">
      <label class="form-check-label" for="phone-no">
        여성
      </label>
    </div>
        </dd>
      </dl>
   <dl class="row info-row">
        <dt class="col-3">생년월일</dt>
        <dd class="col-9 d-flex align-items-center">
          <input type="text" class="form-control form-control-sm me-2 custom-input">
          <span class="verification-text">본인 확인을 위한 자료로 이용합니다.</span>
        </dd>
      </dl>
      <dl class="row info-row">
        <dt class="col-3">아이디</dt>
        <dd class="col-9 d-flex align-items-center">
          <input type="text" class="form-control form-control-sm me-2">
          <button class="btn btn-danger btn-sm me-2">중복조회</button>
          <span class="verification-text">8자리 이상 16자리 이하로 입력</span>
        </dd>
      </dl>
      <dl class="row info-row">
        <dt class="col-3">비밀번호</dt>
        <dd class="col-9 d-flex align-items-center">
          <input type="text" class="form-control form-control-sm me-2 custom-input">
          <span class="verification-text">8자리 이상 16자리 이하로 입력</span>
        </dd>
      </dl>
      <dl class="row info-row">
        <dt class="col-3">비밀번호 확인</dt>
        <dd class="col-9 d-flex align-items-center">
          <input type="text" class="form-control form-control-sm me-2 custom-input">
         
        </dd>
      </dl>
      <dl class="row info-row">
  <dt class="col-3">주소</dt>
  <dd class="col-9 d-flex align-items-center border-0">
    <div class="d-flex justify-content-center align-items-center w-100">
      <input type="text" class="form-control form-control-sm me-2" id="sample4_postcode" placeholder="우편번호">
      <button class="btn btn-danger btn-sm me-2" >우편번호 찾기</button>
    </div>
    <span class="verification-text">8자리 이상 16자리 이하로 입력</span>
  </dd>
</dl>
<form>
  <dl class="row info-row">
  <dt class="col-3"></dt>
  <dd class="col-9 d-flex align-items-center">
    <input type="text" class="form-control form-control-sm me-2 custom-input " placeholder="상세 주소 입력">
  </dd>
</dl>
</form>


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
    <dt class="col-3">유선 전화번호</dt>
    <dd class="col-5 d-flex align-items-center">
      <select class="form-select me-2" aria-label="번호 선택">
        <option selected>02</option>
        <option value="1">031</option>
        <option value="2">032</option>
        <option value="3">033</option>
      </select>
      <input type="text" class="form-control form-control-sm me-2">
      <input type="text" class="form-control form-control-sm me-2">
    </dd>
  </dl>

    <dl class="row info-row">
      <dt class="col-3">이메일 주소</dt>
      <dd class="col-9">
        <input type="text" class="form-control form-control-sm me-2 custom-input"></dd>
    </dl>

    <dl class="row info-row">
  <dt class="col-3">수신동의 여부</dt>
  <dd class="col-9 d-flex align-items-center">
    <div class="d-flex align-items-center me-4">
      <span class="me-3" style="font-weight: bold">휴대전화·유선전화</span>
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
  </dd>
</dl>


<dl class="row info-row">
  <dt class="col-3"></dt>
  <dd class="col-9 d-flex align-items-center">
    <div class="d-flex align-items-center me-4">
      <span class="me-3" style="font-weight: bold">이메일</span>
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
  </dd>
</dl>


<!-- 여기서부터 회원정보 -->

<div class="info-title-container">
    <div>
      <h4 id="title1">회원정보</h4>
    </div>
    <div class="d-flex align-items-end">
      <span style="color: red">⁕필수 입력 항목입니다.</span>
    </div>
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
import TextHeader from '@/components/Common/TextHeader.vue';

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

.d-flex {
  display: flex;
}

.align-items-center {
  align-items: center !important;
}

.me-2 {
  margin-right: 0.5rem !important;
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
  white-space: nowrap; /*줄바꿈 없이 한줄로 나옴*/
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