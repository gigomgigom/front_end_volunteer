<template>
  <TextHeader title="비밀번호 변경"/>
  <div>
    <h5 class="changepw">비밀번호 변경</h5>
    <h6 class="mt-2">8자리 이상 20자리 미만으로, 영문, 숫자,특수문자 1자 이상 필수 입력<span class="highlight"> (예:aabb1234#)</span></h6>
    <div class="box">
      <div class="row align-items-center">
        <div class="col-4 text-end pe-3">기존 비밀번호</div>
        <div class="col">
          <input class="form-control form-control-sm custom-input" type="text" aria-label=".form-control-sm example">
        </div>
      </div>
      <div class="row mt-3 align-items-center">
        <div class="col-4 text-end pe-3">새 비밀번호</div>
        <div class="col">
          <input class="form-control form-control-sm custom-input" type="text" aria-label=".form-control-sm example">
        </div>
      </div>
      <div class="row mt-3 align-items-center">
        <div class="col-4 text-end pe-3">새 비밀번호 확인</div>
        <div class="col">
          <input class="form-control form-control-sm custom-input" type="text" aria-label=".form-control-sm example">
        </div>
      </div>
    </div>
    <div class="text-center mt-3 mb-4">
      <HighlightButton text="저장"/>
    </div>
  </div>
</template>

<script setup>
import HighlightButton from '@/components/Common/HighlightButton.vue';
import TextHeader from '@/components/Common/TextHeader.vue';
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


</style>