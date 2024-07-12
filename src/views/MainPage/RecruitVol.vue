<template>
  <div>
    <h3 class="d-flex justify-content-lg-center mt-5" id="text1">모집 중인 봉사</h3>

    <div id="carouselExampleControls" class="carousel slide mt-3" data-bs-ride="carousel" data-bs-interval="3000">
      <div class="carousel-inner">
        <div v-for="(chunk, index) in chunkedPrograms" :key="index" :class="['carousel-item', { active: index === 0 }]">
          <div class="card-container d-flex justify-content-center">
            <div v-for="program in chunk" :key="program.programNo" class="card custom-card">
              <img :src="getImageUrl(program)" class="card-img-top" alt="..." style="height: 180px;">
              <router-link :to="'/Details/Participation/VolProgram/ViewVolProgramDetail/' + program.programNo" class="card-body no-underline">
                <p class="card-text1" >{{ program.programTitle }}</p>
                <p class="card-text2">▶️ 모집인원: n명 / {{ program.recruitCnt }}명</p>
                <p class="card-text2">▶️ 모집기간: {{ formatDate(program.recruitBgnDate) }} ~ {{ formatDate(program.recruitEndDate) }}</p>
                <p class="card-text2">▶️ 봉사기간: {{ formatDate(program.actBgnDate) }} ~ {{ formatDate(program.actEndDate) }}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">이전</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">다음</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { ref } from 'vue';
import volProgramAPI from '@/apis/volProgramAPI';


const props = defineProps({
  volPrograms: {
      type: Array,
      default: () => []
  }
});

const chunkedPrograms = computed(() => {
  const chunkSize = 4;
  const chunks = [];
  for (let i = 0; i < props.volPrograms.length; i += chunkSize) {
      chunks.push(props.volPrograms.slice(i, i + chunkSize));
  }
  return chunks;
});

function getImageUrl(program) {
  return `data:${program.imgType};base64,${program.imgData}`;
}

//날짜 형식 변환
function formatDate(date) {
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
</script>

<style scoped>
.carousel-control-prev,
.carousel-control-next {
  border-color: #dbdbdb; /* 원하는 색상으로 변경 */
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: white; /* 화살표 색상 */
}

.card-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 10px;
}

#text1 {
  font-weight: bold;
}

.card-text1 {
  font-weight: bolder;
  font-size: large;
}

.card-text2 {
  font-size: 13px;
  color: #666;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgb(164, 164, 164);
  border-radius: 100%;
}

.carousel-control-prev-icon::before,
.carousel-control-next-icon::before {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.carousel-control-prev {
  left: -130px;
}

.carousel-control-next {
  right: -130px;
}

.no-underline {
  text-decoration: none;
}

.no-underline:hover {
  text-decoration: none;
}

.custom-card {
  width: 300px; 
  border: 1px solid gainsboro;
  border-radius: 10px;
  padding: 10px;
  text-align: left;
}

.custom-card img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.custom-card p {
  margin-bottom: 5px;
}
</style>
