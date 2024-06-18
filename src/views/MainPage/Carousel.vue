<template>
<div id="carouselExample" class="carousel slide custom-carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/MainPage/메인페이지 1.png" class="d-block w-100" >
    </div>
    <div class="carousel-item">
      <img src="@/assets/MainPage/메인페이지 2.png" class="d-block w-100" >
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
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

    <div class="button-container">
    <div class="btn btn-dark btn-small rounded-btn">#마을 공동체 활동</div>
    <div class="btn btn-dark btn-small rounded-btn">#급식 지원하기</div>
    <div class="btn btn-dark btn-small rounded-btn">#상담 봉사활동</div>
    <div class="btn btn-dark btn-small rounded-btn">#학습 지도 봉사활동</div>
  </div>

  <h5 class="d-flex justify-content-lg-center mt-5" id="text1">모집 중인 봉사</h5>
  <div class="card-container mt-3 d-flex justify-content-center">
      <div class="card custom-card ms-4">
        <img src="@/assets/MainPage/자원봉사 1.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card custom-card">
        <img src="@/assets/MainPage/자원봉사 1.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card custom-card">
        <img src="@/assets/MainPage/자원봉사 1.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card custom-card me-4">
        <img src="@/assets/MainPage/자원봉사 1.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
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

.icon-label {
  margin-top: 10px; 
  color: #666;
}

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


</style>