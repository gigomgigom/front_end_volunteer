<template>
  <div class="volCnt_container">
    <div class="volCnt_title mb-3">
      오늘의 참여현황
    </div>
    <div class="volCntInfo_container">
      <div class="d-flex me-4">
        <img src="@/assets/Volunteer_icon.jpg" width="80px" />
        <div class="d-flex align-items-center volCnt">
          <h1 class="me-3">5,048</h1><span>명</span>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <span style="font-size: 1em;">여러분들의 마음이 모였어요!</span>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.volCnt_container {
  height: 200px;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
  border-radius: 10px;
}

.volCnt_title {
  font-size: 1.5em;
  font-weight: bolder;
  color: rgb(240, 103, 4);
}

.volCntInfo_container {
  display: flex;
}

.volCntInfo_container>img {
  margin-right: 30px;
}

.volCnt>span {
  font-size: 1.3em;
}
</style>