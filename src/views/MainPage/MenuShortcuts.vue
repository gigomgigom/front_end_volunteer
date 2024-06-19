<template>
   <div class="image-container mt-5">
      <div class="icon-text">
        <img src="@/assets/MainPage/search.png" class="small-image" />
        <h5 class="icon-label mt-4">바로가기</h5>
      </div>
      <div class="icon-text">
        <img src="@/assets/MainPage/introduction.png" class="small-image" />
        <h5 class="icon-label mt-4">Social Pulse 소개</h5>
      </div>
      <div class="icon-text">
        <img src="@/assets/MainPage/reviews.png" class="small-image" />
        <h5 class="icon-label mt-4">봉사 후기</h5>
      </div>
      <div class="icon-text">
        <img src="@/assets/MainPage/qa.png" class="small-image" />
        <h5 class="icon-label mt-4">질문과 답변</h5>
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
  gap: 170px; 
}

.icon-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.small-image {
  width: 70px;
  height: 70px;
}


</style>