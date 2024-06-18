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