<template>
   <div class="box1 mt-5">
    <div class="d-flex align-items-center justify-content-between w-100 inner-box">
      <div class="left-content">
        <div class="text-box">오늘의 참여현황</div>
        <div class="text-content main-text">여러분의 마음이 이만큼 모였어요🤗</div>
      </div>
      
      <div class="sub-text-box">
      <div class="sub-text">봉사 참여 5,080명</div>
   
  </div>
    </div>
  </div>
  
</template>

<script setup>

</script>

<style scoped>
.box1 {
  background-color: dimgrey !important;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  max-width: 2000px; 
  margin: 0 auto;
}

.inner-box {
  max-width: 800px; 
}

.left-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 40px; 
}

.text-box {
  border-radius: 40px; 
  margin-bottom: 5px;
  color: #666;
  background-color: #fff;
  border-color: lightsalmon;
  padding: 10px 18px; 
  font-size: 16px; 
  width: auto; 
  height: auto; 
  border-width: 2px; 
}

.text-content {
  margin-top: 10px; 
}

.sub-text {
  color:#fff;
  margin-left: auto; 
  font-size: 20px;
  
}

.main-text {
  font-weight: bold;
  color: #fff;
  font-size: 25px;
}

.sub-text-box {
  background-color: coral;
  padding: 10px 20px;
  margin-right: -50px; 
}





</style>