<template>
  <div class="container column justify-content-center">
    <div class="col-sm-12 text-center image-container">
 
        <div class="image-box">
          <img src="@/assets/good_like.png" class="image"/>
          <div class="caption">추천</div>
        </div>

    

        <div class="image-box">
          <img src="@/assets/dislike.png" class="image"/>
          <div class="caption">반대</div>
        </div>
    </div>
  </div>
</template>



<script setup>

</script>


<style scoped>
.container {
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer; 
  user-select: none; 
  margin: 0 55px; 
  transition: transform 0.3s; /*애니메이션 효과*/
}

.image-box:active {
  transform: scale(0.95); /*클릭 시 크기*/
}

.image {
  width: 50px; 
  height: 50px; 
}

.caption {
  margin-top: 5px; 
  font-size: 12px; 
  color: #757575; 
}



</style>