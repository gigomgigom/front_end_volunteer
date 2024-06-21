<template>
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
      <dd class="col-5"><input type="text" class="form-control"></dd>
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
</style>