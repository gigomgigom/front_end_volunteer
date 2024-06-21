<template>
   
    <div class="button-container">

      <div class="btn btn-dark btn-small rounded-btn move-right">#마을 공동체 활동</div>
      <div class="btn btn-dark btn-small rounded-btn move-left">#급식 지원하기</div>
      <div class="btn btn-dark btn-small rounded-btn move-right">#상담 봉사활동</div>
      <div class="btn btn-dark btn-small rounded-btn ">#학습 지도 봉사활동</div>

  </div>
</template>

<script setup>

</script>

<style scoped>

#text1 {
  font-weight: bold;
  color: black;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 160px; 
  margin-top: 80px;
  margin-bottom: 80px;
}

.rounded-btn {
  border-radius: 40px;
  margin: 10px 0;
  color: #fff;
  background-color: forestgreen;
  border-color: forestgreen;
  padding: 12px 24px;
  font-size: 18px;
  width: auto;
  height: auto;
  border-width: 2px;
}

</style>