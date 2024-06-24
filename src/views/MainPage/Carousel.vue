<template>
 <div id="carouselExample" class="carousel slide custom-carousel" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/MainPage/메인페이지 1.png" class="d-block w-100" alt="Slide 1">
      </div>
      <div class="carousel-item">
        <img src="@/assets/MainPage/메인페이지 2.png" class="d-block w-100" alt="Slide 2">
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



</template>

<script setup>

</script>

<style scoped>

.carousel-inner {
  width: 100%;
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

.custom-carousel {
  position: relative;
}

.carousel-control-prev,
.carousel-control-next {
  color: #333 !important; 
  background-color: transparent !important; 
  border: none; 
  width: 50px; 
  height: 50px; 
  position: absolute; 
  top: 50%; 
  transform: translateY(-50%); 
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: transparent !important; 
}

.carousel-control-prev {
  left: 40px; 
}

.carousel-control-next {
  right: 40px; 
}

.carousel-control-prev-icon::before,
.carousel-control-next-icon::before {
  background-color: #333;
}

</style>