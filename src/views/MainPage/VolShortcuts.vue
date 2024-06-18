<template>
     <div class="button-container">
    <div class="btn btn-dark btn-small rounded-btn">#마을 공동체 활동</div>
    <div class="btn btn-dark btn-small rounded-btn">#급식 지원하기</div>
    <div class="btn btn-dark btn-small rounded-btn">#상담 봉사활동</div>
    <div class="btn btn-dark btn-small rounded-btn">#학습 지도 봉사활동</div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;


}

.rounded-btn {
  border-radius: 40px; 
  margin: 10px 0; 
  color: #666;
  background-color: #fff;
  border-color: coral;
  padding: 12px 24px; 
  font-size: 16px; 
  width: auto; 
  height: auto; 
  border-style: dashed;
  border-width: 2px; 
}


</style>