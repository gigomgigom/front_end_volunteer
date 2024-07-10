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
  <form v-on:submit.prevent="handleSubmit">
    <div class="info-container mb-5">
      <dl class="row info-row">
        <dt class="col-3">이름<span class="verification-text2" ref="name_error">이름을 입력해주세요.</span></dt>
        <dd class="col-9 d-flex align-items-center">
          <input type="text" class="form-control form-control-sm me-2 custom-input" v-model="member.name">
        </dd>
      </dl>
      <dl class="row info-row ">
        <dt class="col-3">성별<span class="verification-text2" ref="sex_error">성별을 선택해주세요.</span></dt>
        <dd class="col-5">
          <div class="form-check d-flex align-items-center me-4 ms-4">
            <input class="form-check-input me-1" type="radio" name="sex-check" v-model="member.sex" value="men">
            <label class="form-check-label me-3" for="man">
              남성
            </label>
          </div>
          <div class="form-check d-flex align-items-center">
            <input class="form-check-input me-1" type="radio" name="sex-check" v-model="member.sex" value="women">
            <label class="form-check-label" for="woman">
              여성
            </label>
          </div>
        </dd>
      </dl>
      <dl class="row info-row">
        <dt class="col-3">생년월일<span class="verification-text2" ref="birth_error">생년월일을 선택해주세요.</span></dt>
        <dd class="col-9 d-flex align-items-center">
          <VueDatePicker v-model="member.birthDate" :enable-time-picker="false" class="custom-input me-2"/>
          <span class="verification-text" id="birthError" style="font-size: 12px;">본인 확인을 위한 자료로 이용합니다.</span>
        </dd>
      </dl>
      <dl class="row info-row">
        <dt class="col-3">아이디
          <span class="verification-text2" ref="id_error">아이디를 입력해주세요.</span>
          <span class="verification-text2" ref="idRegex_error">형식에 맞게 입력해주세요.</span>
        </dt>
        <dd class="col-9 d-flex align-items-center">
          <input type="text" class="form-control form-control-sm me-2" v-model="member.id">
          <button class="btn btn-danger btn-sm me-2" type="button">중복조회</button>
          <span class="verification-text" id="memberIdError" style="font-size: 12px;">영어(소문자), 숫자로 5자리 이상 12자리 이하로 입력</span>
        </dd>
      </dl>
      <dl class="row info-row">
        <dt class="col-3">비밀번호
          <span class="verification-text2" ref="password_error">비밀번호를 입력해주세요.</span>
          <span class="verification-text2" ref="passwordRegex_error">형식에 맞게 입력해주세요.</span>
        </dt>
        <dd class="col-9 d-flex align-items-center" style="">
          <input type="password" class="form-control form-control-sm me-2" style="width: 35%;"  v-model="member.password">
          <span class="verification-text" id="passwordError" style="font-size: 12px;">영어(대/소문자), 숫자, 특수문자로 8자리 이상 15자리 이하로 입력</span>
        </dd>
      </dl>
      <dl class="row info-row">
        <dt class="col-3">비밀번호 확인<span class="verification-text2" ref="passwordCheck_error">비밀번호 확인을 입력해주세요.</span>
          <span class="verification-text2" ref="passwordCheck_error2">입력한 비밀번호가 다릅니다.</span></dt>
        <dd class="col-9 d-flex align-items-center">
          <input type="password" class="form-control form-control-sm me-2" style="width: 35%;" v-model="member.passwordCheck">
  
        </dd>
      </dl>
      <dl class="row info-row">
        <dt class="col-3" style="height: 120px;">주소<span class="verification-text2" ref="adress_error">주소를 입력해주세요.</span></dt>
        <dd class="col-9" style="height: 120px;">
          <div>
            <div class="d-flex align-items-center mb-3">
              <div class="d-flex justify-content-center align-items-center w-100">
                <input type="text" class="form-control form-control-sm me-2" id="sample6_postcode" placeholder="우편번호" v-model="member.postCode">
                <button  type="button" class="btn btn-danger btn-sm me-2" @click="sample6_execDaumPostcode()">우편번호 찾기</button>
              </div>
              
            </div>
            <div class="d-flex align-items-center">
              <input type="text" class="form-control form-control-sm me-2 custom-input " id="sample6_address"
                placeholder="주소 입력" v-model="member.address">
              <input type="text"  ref="detailAddress" class="form-control form-control-sm me-2 custom-input" id="sample6_detailAddress"
                placeholder="상세 주소 입력" v-model="member.detailAddress"> 
            </div>
            
          </div>
        </dd>
      </dl>
      <dl class="row info-row">
        <dt class="col-3">휴대폰번호<span class="verification-text2" ref="tel_error">전화번호를 입력해주세요.</span></dt>
        <dd class="col-5 d-flex align-items-center">
          <select class="form-select me-2" aria-label="번호 선택" v-model="member.num1">
            <option selected>010</option>
            <option>011</option>
            <option>016</option>
            <option>013</option>
          </select>
          <input type="text" class="form-control form-control-sm me-2" v-model="member.num2">
          <input type="text" class="form-control form-control-sm me-2" v-model="member.num3">
        </dd>
      </dl>
      <dl class="row info-row">
        <dt class="col-3">이메일 주소<span class="verification-text2" ref="email_error">이메일 주소를 입력해주세요.</span></dt>
        <dd class="col-9">
          <input type="text" class="form-control form-control-sm me-2 custom-input" v-model="member.email">
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
        <dt class="col-3">소속센터 <span class="verification-text2" ref="center_error">상세 지역을 선택해주세요.</span></dt>
        <dd class="col-5 d-flex align-items-center">
          <select class="form-select me-2" @change="selectCity($event)" v-model="member.center1">
            <option selected>전체</option>
            <option v-for="(city, index) in regionList" :key="index" :value="city.cityCode">{{ city.cityName }}</option>
          </select>
          <i class="fas fa-chevron-right me-2"></i>
          <select id="county" class="form-select" v-model="member.center2">
            <option selected>전체</option>
            <option v-for="(county, index) in countyList" :key="index" :value="county.countyCode">{{ county.countyName
              }}</option>
          </select>
        </dd>
      </dl>

      <dl class="row info-row mb-3">
        <dt class="col-3">희망분야 <span class="verification-text2" ref="interest_error">하위 분야를 입력해주세요.</span></dt>
        <dd class="col-5 d-flex align-items-center">
          <select class="form-select me-2" @change="selectHighCls($event)" v-model="member.interest1">
            <option selected>전체</option>
            <option v-for="(highCls, index) in categoryList" :key="index" :value="highCls.highClsCode">{{
              highCls.highClsName }}</option>
          </select>
          <i class="fas fa-chevron-right me-2"></i>
          <select id="lowCls" class="form-select" v-model="member.interest2">
            <option selected>전체</option>
            <option v-for="(lowCls, index) in lowClsList" :key="index" :value="lowCls.lowClsCode">{{ lowCls.lowClsName
              }}</option>
          </select>
        </dd>
      </dl>

    </div>
    <div class="btn-container d-flex justify-content-end mt-4 mb-4">
      <HighlightButton text="회원가입" />
    </div>
  </form>

</template>

<script setup>
import { ref, onMounted} from "vue";
import { useStore } from 'vuex';
import TextHeader from '@/components/Common/TextHeader.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';

const store = useStore();
const regionList = store.state.regionCode.regionList;
const countyList = ref([]);
const categoryList = store.state.categoryCode.categoryList;
const lowClsList = ref([]);

const name_error = ref(null);
const sex_error = ref(null);
const birth_error = ref(null);
const id_error = ref(null);
const password_error = ref(null);
const passwordCheck_error = ref(null);
const passwordCheck_error2 = ref(null);
const adress_error = ref(null);
const tel_error = ref(null);
const email_error = ref(null);
const center_error = ref(null);
const interest_error = ref(null);
const detailAddress = ref(null);
const idRegex_error = ref(null);
const passwordRegex_error = ref(null);
let errorElements = [name_error, sex_error, birth_error, id_error,
  password_error, passwordCheck_error, passwordCheck_error2, adress_error, tel_error, email_error,
  center_error, interest_error, idRegex_error, passwordRegex_error]


// 도시 분야 선택시 호출
function selectCity(event) {
  const cityCode = Number(event.target.value);
  countyList.value = findCounty(cityCode);
  document.getElementById("county").selectedIndex = 0;
}
// 하위 분야 리스트를 찾아오기
function findCounty(cityCode) {
  for (let city of regionList) {
    if (city.cityCode === cityCode) {
      return city.county;
    }
  }
  return [];
}
// 상위 분야 선택시 호출
function selectHighCls(event) {
    const highClsCode = event.target.value;
    //하위 분류 리스트(상태데이터) 수정
    lowClsList.value = findLowCls(highClsCode);
    //군/구 리스트에서 기본값(전체)로 selected되도록 함.
    document.getElementById("lowCls").selectedIndex = 0;
}
// 하위 분야 리스트를 찾아오기
function findLowCls(highClsCode) {
    for (let highCls of categoryList) {
        if (highCls.highClsCode === highClsCode) {
            return highCls.lowClsList;
        }
    }
    return [];
}


//유효성 검사
let member = ref({
  name: "",
  sex: "",
  birthDate: "",
  id: "",
  password: "",
  passwordCheck: "",
  postCode: "",
  address: "",
  detailAddress: "",
  email: "",
  num1: "",
  num2: "",
  num3:"",
  center1:"",
  center2:"",
  interest1:"",
  interest2:""
});

function handleSubmit() {
  const tel = member.value.num1 + "-" + member.value.num2 + "-" + member.value.num3;
  let isDataOk = true;
  let formData = {}; //DB에 데이터 전송을 위한 객체 생성
  //이메일과 전화번호 정규표현식 (아이디와 비밀번호 정규식도 만들어야함)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
  const idRegex = /^[a-z0-9]{5,12}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;

   //유효성 검사에 적합하지 않을 경우 출력되는 메세지를 모두 가려둔다.
   for(let element of errorElements) {
    element.value.classList.remove('userinfo_error');
  }
  
  //유효성 검사
  if(member.value.name === ""){
    errorElements[0].value.classList.add('userinfo_error');
    isDataOk = false;
  }else{
    formData.name = member.value.name;
  }
  if(member.value.sex === ""){
    errorElements[1].value.classList.add('userinfo_error');
    isDataOk = false;
  }else {
    formData.sex = member.value.sex;
  }
  if(member.value.birthDate === ""){
    errorElements[2].value.classList.add('userinfo_error');
    isDataOk = false;
  }else{
    formData.birthDate = member.value.birthDate
  }
  if(member.value.id === ""){
    errorElements[3].value.classList.add('userinfo_error');
    isDataOk = false;
  }else if(!idRegex.test(member.value.id)){
     errorElements[12].value.classList.add('userinfo_error');
     isDataOk = false;
  }
  else{
    formData.id = member.value.id
  }
  if(member.value.password === ""){
    errorElements[4].value.classList.add('userinfo_error');
    isDataOk = false;
  }
  else if(!passwordRegex.test(member.value.password)){
     errorElements[13].value.classList.add('userinfo_error');
     isDataOk = false;
  }
  if(member.value.passwordCheck === ""){
    errorElements[5].value.classList.add('userinfo_error')
    isDataOk = false;
  }else if(member.value.password != member.value.passwordCheck){
    errorElements[6].value.classList.add('userinfo_error');
    isDataOk = false;
  }else{
    formData.password = member.value.password;
  }
  if(member.value.postCode === "" || member.value.address === ""){
    errorElements[7].value.classList.add('userinfo_error')
    isDataOk = false;
  }else{
    formData.postCode = member.value.postCode;
    formData.address = member.value.address;
    formData.detailAddress = member.value.detailAddress;
  }if(!phoneRegex.test(tel)){
    errorElements[8].value.classList.add('userinfo_error')
    isDataOk = false;
  }else{
    formData.tel = tel;
  }if(!emailRegex.test(member.value.email)){
    errorElements[9].value.classList.add('userinfo_error');
    isDataOk = false;
  }else{
    formData.email = member.value.email;
  }if(member.value.center1){
    if(member.value.center2){
      formData.city = member.value.center1;
      formData.county = member.value.center2;
    }else{
      errorElements[10].value.classList.add('userinfo_error');
      isDataOk = false;
    }
  }if(member.value.interest1){
    if(member.value.interest2){
      formData.highCls = member.value.interest1;
      formData.lowCls = member.value.interest2;
    }else{
      errorElements[11].value.classList.add('userinfo_error');
      isDataOk = false;
    }
  }
  console.log(JSON.parse(JSON.stringify(member.value)));
  console.log(JSON.parse(JSON.stringify(formData)));
  console.log('유효성 검사 결과 : ',isDataOk);
  //만약 유효성 검사에 단 하나도 걸리지 않았다면 isDataOk가 true값이 넘어오게 된다.
  if(isDataOk) {
  //formData 객체를 JSON으로 변환한 후 DB에 통신해야함 ㅇㅇ
  }
}

//도로명 주소 스크립트
onMounted(() => {
  if (!window.daum) {
    loadScript();
  }
});
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
      member.value.postCode = data.zonecode;
      member.value.address = addr;
      // 커서를 상세주소 필드로 이동한다.
      detailAddress.value.focus();
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
  color: #6c757d;
}
.verification-text2 {
  font-size: 0.875rem;
  color: red;
  display: none;
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
.userinfo_error {
  display: block;
}
</style>