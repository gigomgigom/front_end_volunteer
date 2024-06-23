<template>
    <div class="image-container mt-5">
    <div class="icon-text">
      <router-link to="/Details/Participation/VolProgram/ViewVolProgramDetail" class="no-underline">
        <img src="@/assets/MainPage/search.png" class="small-image" />
        <h5 class="icon-label mt-4">바로가기</h5>
      </router-link>
    </div>
    <div class="icon-text">
      <router-link to="/Details/VolunteerGuide/Introduce" class="no-underline">
        <img src="@/assets/MainPage/introduction.png" class="small-image" />
        <h5 class="icon-label mt-4">Social Pulse 소개</h5>
      </router-link>
    </div>
    <div class="icon-text">
      <router-link to="/Details/Information/Review/ViewReviewList" class="no-underline">
        <img src="@/assets/MainPage/reviews.png" class="small-image" />
        <h5 class="icon-label mt-4">봉사 후기</h5>
      </router-link>
    </div>
    <div class="icon-text">
      <router-link to="/Details/ServiceCenter/QNA/ViewQnaList" class="no-underline">
        <img src="@/assets/MainPage/qa.png" class="small-image" />
        <h5 class="icon-label mt-4">질문과 답변</h5>
      </router-link>
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
  gap: 220px; 
}

.icon-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
}

.small-image {
  width: 80px;
  height: 80px;
  margin-bottom: 10px; 
}

.no-underline {
  text-decoration: none;
  color: black;
}

.no-underline:hover {
  text-decoration: none;
  color: black;
}

.icon-label {
  margin-top: 10px; 
}


</style>