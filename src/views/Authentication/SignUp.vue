<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<TextHeader title="회원가입" />
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
      <input type="text" class="form-control form-control-sm me-2 custom-input" id="usernm">
    </dd>
  </dl>
  <dl class="row info-row ">
    <dt class="col-3">성별</dt>
    <dd class="col-5">
      <div class="form-check d-flex align-items-center me-4 ms-4">
        <input class="form-check-input me-1" type="radio" name="sex-check" id="man" value="yes">
        <label class="form-check-label me-3" for="man">
          남성
        </label>
      </div>
      <div class="form-check d-flex align-items-center">
        <input class="form-check-input me-1" type="radio" name="sex-check" id="woman" value="no">
        <label class="form-check-label" for="woman">
          여성
        </label>
      </div>
    </dd>
  </dl>
  <dl class="row info-row">
    <dt class="col-3">생년월일</dt>
    <dd class="col-9 d-flex align-items-center">
      <VueDatePicker v-model="birthDate" :enable-time-picker="false" class="custom-input me-2" />
      <span class="verification-text">본인 확인을 위한 자료로 이용합니다.</span>
    </dd>
  </dl>
  <dl class="row info-row">
    <dt class="col-3">아이디</dt>
    <dd class="col-9 d-flex align-items-center">
      <input type="text" class="form-control form-control-sm me-2" id="userid">
      <button class="btn btn-danger btn-sm me-2">중복조회</button>
      <span class="verification-text">8자리 이상 16자리 이하로 입력</span>
    </dd>
  </dl>
  <dl class="row info-row">
    <dt class="col-3">비밀번호</dt>
    <dd class="col-9 d-flex align-items-center">
      <input type="password" class="form-control form-control-sm me-2 custom-input" id="userpw">
      <span class="verification-text">8자리 이상 16자리 이하로 입력</span>
    </dd>
  </dl>
  <dl class="row info-row">
    <dt class="col-3">비밀번호 확인</dt>
    <dd class="col-9 d-flex align-items-center">
      <input type="password" class="form-control form-control-sm me-2 custom-input" id="userpw2">
    </dd>
  </dl>
  <dl class="row info-row">
    <dt class="col-3" style="height: 120px;">주소</dt>
    <dd class="col-9" style="height: 120px;">
      <div>
        <div class="d-flex align-items-center mb-3">
          <div class="d-flex justify-content-center align-items-center w-100">
            <input type="text" class="form-control form-control-sm me-2"
            id="sample6_postcode" placeholder="우편번호">
            <button class="btn btn-danger btn-sm me-2"  @click="sample6_execDaumPostcode()"
            >우편번호 찾기</button>
          </div>
          <span class="verification-text"></span>
        </div>
        <div class="d-flex align-items-center">
          <input type="text" class="form-control form-control-sm me-2 custom-input "  id="sample6_address" placeholder="주소 입력">
          <input type="text" class="form-control form-control-sm me-2 custom-input " id="sample6_detailAddress" placeholder="상세 주소 입력">
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
      <input type="text" class="form-control form-control-sm me-2 custom-input" id="useremail">
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
        <option value="1">기획</option>
        <option value="2">디자인</option>
        <option value="3">개발</option>
      </select>
    </dd>
  </dl>
 
</div>
<div class="btn-container d-flex justify-content-end mt-4 mb-4">
  <HighlightButton text="회원가입"/>

</div>
 
</template>

<script setup>
import TextHeader from '@/components/Common/TextHeader.vue';
import { ref, onMounted } from "vue";
import HighlightButton from '@/components/Common/HighlightButton.vue';

const birthDate = ref(null);

onMounted(() => {
    if (!window.daum) {
        loadScript();
    }
});

function loadScript() {
    const script = document.createElement("script");
    script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.onload = () => {};

    document.head.appendChild(script);
}

function sample6_execDaumPostcode() {
    new window.daum.Postcode({
        oncomplete: function (data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ""; // 주소 변수
            var extraAddr = ""; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === "R") {
                // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else {
                // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if (data.userSelectedType === "R") {
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if (data.buildingName !== "" && data.apartment === "Y") {
                    extraAddr += extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if (extraAddr !== "") {
                    extraAddr = " (" + extraAddr + ")";
                }
                 // 조합된 참고항목을 해당 필드에 넣는다.
                 const extraAddressElement = document.getElementById("sample6_extraAddress");
                        if (extraAddressElement) {
                            extraAddressElement.value = extraAddr;
                        }
          
                      }
            

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById("sample6_postcode").value = data.zonecode;
            document.getElementById("sample6_address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("sample6_detailAddress").focus();
        },
    }).open();
}


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