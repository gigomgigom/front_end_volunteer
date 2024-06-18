<template>
     <h4 class="d-flex justify-content-lg-center mt-5" id="text1">모집 중인 봉사</h4>
  <div class="card-container mt-3 d-flex justify-content-center">
      <div class="card custom-card ms-4">
        <img src="@/assets/MainPage/봉사 사진1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text1">
            서울시 어르신 봉사</p>
            <p class="card-text2">
                서울시 어르신 봉사</p>
        </div>
      </div>
      <div class="card custom-card">
        <img src="@/assets/MainPage//봉사 사진1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text1">
            서울시 어르신 봉사
          </p>
          <p class="card-text2">
            서울시 어르신 봉사</p>
        </div>
      </div>
      <div class="card custom-card">
        <img src="@/assets/MainPage//봉사 사진1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text1">
            서울시 어르신 봉사
          </p>
          <p class="card-text2">
            서울시 어르신 봉사</p>
        </div>
      </div>
      <div class="card custom-card me-4">
        <img src="@/assets/MainPage//봉사 사진1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text1">
            서울시 어르신 봉사
          </p>
          <p class="card-text2">
            서울시 어르신 봉사</p>
        </div>
      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.card-container {
  display: flex;
  gap: 1rem; 
  justify-content: center; 
  margin-top: 10px; 
}

.card {
  width: 14%; 
}

.custom-card {
  width: 16rem; 
}

#text1 {
    font-weight: bold;
}

.card-text1 {
    font-weight: bolder;
    font-size: large;
}


</style>