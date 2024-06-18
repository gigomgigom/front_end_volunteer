<template>
   <div class="image-container mt-5">
      <div class="icon-text">
        <img src="@/assets/MainPage/자원봉사 2.png" class="small-image" />
        <h6 class="icon-label">바로가기</h6>
      </div>
      <div class="icon-text">
        <img src="@/assets/MainPage/자원봉사 3.png" class="small-image" />
        <h6 class="icon-label">Social Pulse 소개</h6>
      </div>
      <div class="icon-text">
        <img src="@/assets/MainPage/자원봉사 5.png" class="small-image" />
        <h6 class="icon-label">봉사 후기</h6>
      </div>
      <div class="icon-text">
        <img src="@/assets/MainPage/자원봉사 1.png" class="small-image" />
        <h6 class="icon-label">질문과 답변</h6>
      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px; 
}

.icon-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.small-image {
  width: 100px;
  height: 90px;
}

</style>