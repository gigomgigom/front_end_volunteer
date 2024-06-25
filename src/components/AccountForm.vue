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
        <span>{{ member.name }}</span>
      </dd>
    </dl>
    <dl class="row info-row ">
      <dt class="col-3">성별</dt>
      <dd class="col-5">
        <span>{{ member.sex }}</span>
      </dd>
    </dl>
    <dl class="row info-row">
      <dt class="col-3">생년월일</dt>
      <dd class="col-9 d-flex align-items-center">
        <span>{{ member.birthdate }}</span>
      </dd>
    </dl>
    <dl class="row info-row">
      <dt class="col-3">아이디</dt>
      <dd class="col-9 d-flex align-items-center">
        <span>{{ member.id }}</span>
      </dd>
    </dl>
    <dl class="row info-row">
      <dt class="col-3" style="height: 120px;">주소<span class="verification-text" ref="addr_error">주소를 입력해주세요.</span></dt>
      <dd class="col-9" style="height: 120px;">
        <div class="w-100">
          <div class="d-flex align-items-center mb-3 w-50">
            <div class="d-flex justify-content-center align-items-center w-100">
              <input type="text" class="form-control form-control-sm me-2" placeholder="우편번호"
                v-model="member.zipCode">
              <button class="btn btn-danger btn-sm me-2" @click="sample6_execDaumPostcode">우편번호 찾기</button>
            </div>
          </div>
          <div class="d-flex align-items-center w-100">
            <input type="text" style="width: 45%" class="form-control form-control-sm me-2 custom-input"
              v-model="member.address" placeholder="주소 입력">
            <input ref="addrDetailInput" type="text" style="width: 45%"
              class="form-control form-control-sm me-2 custom-input" v-model="member.detailAddress"
              placeholder="상세 주소 입력">
          </div>
        </div>
      </dd>
    </dl>
    <dl class="row info-row">
      <dt class="col-3">휴대폰번호<span class="verification-text" ref="tel_error">올바르게 입력해주세요.</span></dt>
      <dd class="col-5 d-flex align-items-center">
        <select v-model="member.mobileFirst" class="form-select me-2" aria-label="번호 선택">
          <option value="010">010</option>
          <option value="011">011</option>
          <option value="016">016</option>
          <option value="013">013</option>
        </select>
        <input v-model="member.mobileSecond" type="text" class="form-control form-control-sm me-2">
        <input v-model="member.mobileThird" type="text" class="form-control form-control-sm me-2">
      </dd>
    </dl>
    <dl class="row info-row">
      <dt class="col-3">이메일 주소<span ref="email_error" class="verification-text">올바르게 입력해주세요.</span></dt>
      <dd class="col-9">
        <input v-model="member.email" type="text" class="form-control form-control-sm me-2 custom-input">
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
      <dt class="col-3">소속센터<span ref="region_error" class="verification-text">상세 지역을 선택해주세요.</span></dt>
      <dd class="col-8 d-flex align-items-center">
        <select class="form-select me-2" aria-label="시 선택" v-model="member.city" @change="changeCountyList">
          <option :value="0">없음</option>
          <option v-for="(city, index) in cityList" :key="index" :value="city.cityCode">{{ city.cityName }}</option>
        </select>
        <i class="fas fa-chevron-right me-2"></i>
        <select class="form-select" aria-label="군 선택" v-model="member.county">
          <option :value="0">지역을 선택해주세요</option>
          <option v-for="(county, index) in countyList" :key="index" :value="county.countyCode">{{ county.countyName }}
          </option>
        </select>
      </dd>
    </dl>

    <dl class="row info-row mb-3">
      <dt class="col-3">희망분야<span ref="ctg_error" class="verification-text">하위 분야를 선택해주세요.</span></dt>
      <dd class="col-8 d-flex align-items-center">
        <select class="form-select me-2" aria-label="시 선택" v-model="member.highCls" @change="changeLowClsList">
          <option :value="0">없음</option>
          <option v-for="(highCls, index) in highClsList" :key="index" :value="highCls.highClsCode">{{
            highCls.highClsName }}</option>
        </select>
        <i class="fas fa-chevron-right me-2"></i>
        <select class="form-select" v-model="member.lowCls" aria-label="군 선택">
          <option :value="0">분류를 선택해주세요</option>
          <option v-for="(lowCls, index) in lowClsList" :key="index" :value="lowCls.lowClsCode">{{ lowCls.lowClsName }}
          </option>
        </select>
      </dd>
    </dl>
  </div>
  <div class="d-flex justify-content-center my-5">
    <HighlightButton text="수정하기" class="me-4" @buttonClick="handleSubmit" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import HighlightButton from './Common/HighlightButton.vue';

const store = useStore();

const cityList = store.state.regionCode.regionList;
const countyList = ref([]);
const highClsList = store.state.categoryCode.categoryList;
const lowClsList = ref([]);
const addrDetailInput = ref(null);

const addr_error = ref(null);
const tel_error = ref(null);
const email_error = ref(null);
const region_error = ref(null);
const ctg_error = ref(null);

let errorElements = [addr_error, tel_error, email_error, region_error, ctg_error];

const member = ref({
  id: '',
  name: '',
  birthdate: '',
  zipCode: '',
  address: '',
  detailAddress: '',
  mobileFirst: '',
  mobileSecond: '',
  mobileThird: '',
  email: '',
  sex: '',
  city: 0,
  county: 0,
  highCls: '',
  lowCls: ''
});
let originalData = null;
onMounted(() => {
  if (!window.daum) {
    loadScript();
  }
  const dbMember = {
    id: 'tlarlrma17',
    name: '심영조',
    birthdate: '2000.01.07',
    zipCode: '30543',
    address: '인천광역시 서구 청라라임로 131',
    detailAddress: '263동 403호',
    mobileFirst: '010',
    mobileSecond: '2810',
    mobileThird: '4870',
    email: 'tlarlrma@naver.com',
    sex: '남성',
    city: 6110000,
    county: 3000000,
    highCls: '0100',
    lowCls: '0101'
  }
  for (let city of cityList) {
    if (city.cityCode === dbMember.city) {
      countyList.value = city.county;
    }
  }
  for (let highCls of highClsList) {
    if (highCls.highClsCode === dbMember.highCls) {
      lowClsList.value = highCls.lowClsList;
    }
  }
  member.value = dbMember;
});

function changeCountyList() {
  let selectedCity = member.value.city;
  countyList.value = [];
  member.value.county = 0;
  for (let city of cityList) {
    if (city.cityCode === selectedCity) {
      countyList.value = city.county;
    }
  }
}

function changeLowClsList() {
  let selectedHighCls = member.value.highCls;
  lowClsList.value = [];
  member.value.lowCls = 0;
  for (let highCls of highClsList) {
    if (highCls.highClsCode === selectedHighCls) {
      lowClsList.value = highCls.lowClsList;
    }
  }
}
const handleSubmit = () => {
  //데이터의 유효성검사 결과를 기본값으로 true로 주게 된다.
  //만약 유효성 검사에서 단 하나라도 걸리지 않는다면 DB통신 실행문이 담긴 조건식에 까지 true값이 그대로 넘어가게 된다.
  let isDataOk = true;

  //이메일과 전화번호 정규표현식
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;

  //유효성 검사에 적합하지 않을 경우 출력되는 메세지를 모두 가려둔다.
  for(let element of errorElements) {
    element.value.classList.remove('userinfo_error');
  }

  let formData = {}; //DB에 데이터 전송을 위한 객체 생성
  let makeTel = []; //전화번호를 만들기 위한 배열 생성
  //전화번호 조각을 순서에 맞춰 배열에 넣어준다.
  makeTel.push(member.value.mobileFirst);
  makeTel.push(member.value.mobileSecond);
  makeTel.push(member.value.mobileThird);
  //전화번호 조각들이 담긴 배열에서 각 요소를 '-'구분자를 사이에 두고 합치게 된다. (리턴값 : 문자열)
  formData.tel = makeTel.join('-');

  //상태데이터에 저장되어있는 값을 formData 속성값에 넣어준다(동적속성으로 추가)
  formData.id = member.value.id;
  formData.zipCode = member.value.zipCode;
  formData.address = member.value.address;
  formData.email = member.value.email;

  //봉사 센터 유효성(시/도를 선택했는데 군/구가 선택되지않았을 경우 유효성 비적합)
  if (member.value.city) {
    if (member.value.county) {
      formData.city = member.value.city;
      formData.county = member.value.county;
    } else {
      errorElements[3].value.classList.add('userinfo_error');
      isDataOk = false;
    }
  }
  //희망 분류 유효성(상위 코드를 선택했는데 하위 코드가 선택되지않았을 경우 유효성 비적합)
  if (member.value.highCls) {
    if (member.value.lowCls) {
      formData.highCls = member.value.highCls;
      formData.lowCls = member.value.lowCls;
    } else {
      errorElements[4].value.classList.add('userinfo_error');
      isDataOk = false;
    }
  }
  //주소 공백 체크 유효성
  if (formData.zipCode === '' || formData.address === '') {
    errorElements[0].value.classList.add('userinfo_error');
    isDataOk = false;
  }
  //전화번호 유효성 검사
  if (!phoneRegex.test(formData.tel)) {
    errorElements[1].value.classList.add('userinfo_error');
    isDataOk = false;
  }
  //이메일 유효성 검사
  if (!emailRegex.test(formData.email)) {
    errorElements[2].value.classList.add('userinfo_error');
    isDataOk = false;
  }

  console.log('유효성 검사 결과 : ',isDataOk);
  //만약 유효성 검사에 단 하나도 걸리지 않았다면 isDataOk가 true값이 넘어오게 된다.
  if(isDataOk) {
  //formData 객체를 JSON으로 변환한 후 DB에 통신해야함 ㅇㅇ
  }
};

function loadScript() {
  const script = document.createElement("script");
  script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  script.onload = () => { };
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
      member.value.zipCode = data.zonecode;
      member.value.address = addr;
      // 커서를 상세주소 필드로 이동한다.
      addrDetailInput.value.focus();
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
  flex-direction: column;
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
  color: red;
  display: none;
}

.userinfo_error {
  display: block;
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
