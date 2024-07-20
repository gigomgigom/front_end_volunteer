<template>
  <div>  
    <TextHeader title="찾아오는 길"></TextHeader>
    <div>
      <h5><b>지도</b></h5>
      <KakaoMap/>
    </div>

    <div class="info-container">
      <section class="contact-info">
        <h3>
          <b> 주소 / 연락처</b>
        </h3>
        <div class="indented">
          <div class="info-item">
            <img src="@/assets/Insurance/next-bold.png" class="li-img" />
            <strong>주소</strong>
          </div>
          <p>서울특별시 송파구 중대로 135 (가락동)</p>
          <div class="info-item">
            <img src="@/assets/Insurance/next-bold.png" class="li-img" />
            <strong>연락처</strong>
          </div>
          <p>Tel: 02-713-0080 / Fax: 02-711-0887</p>
        </div>
      </section>

      <section class="directions">
        <h4>
          <b>오시는 방법</b>
        </h4>
        <div class="indented">
          <div class="info-item">
            <img src="@/assets/Insurance/next-bold.png" class="li-img" />
            <strong>지하철</strong>
          </div>
          <p>경찰병원역 3번 출구로 나와 20m 직진하시면 됩니다.</p>
          <div class="info-item">
            <img src="@/assets/Insurance/next-bold.png" class="li-img" />
            <strong>버스</strong>
          </div>
          <div class="bus-info">
            <p>
              <img src="@/assets/Map/bus01.png" class="li-img-bus" />
              <span>간선 버스: 370, 470, 471, 600, 601, 602, 702, 703, 705, 706, 720</span>
            </p>
            <p>
              <img src="@/assets/Map/bus03.png" class="li-img-bus" />
              <span>지선 버스: 7023, 7019</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TextHeader from '@/components/Common/TextHeader.vue';
import KakaoMap from '@/components/KakaoMap.vue';
import { provide, ref } from 'vue';

const data = ref({
  location: '서울특별시 송파구 중대로 135'
});
provide("detail", data);
</script>

<style scoped>
.info-container {
  margin-top: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.contact-info, .directions {
  margin-bottom: 20px;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h3 {
  margin-bottom: 10px;
}

h4 {
  margin-bottom: 10px;
}

.indented {
  padding-left: 20px; /* Adjust this value to set the desired level of indentation */
}

.info-item {
  display: flex;
  align-items: center; /* Vertically center the items */
  margin-bottom: 5px;
}

.info-item img.li-img {
  margin-right: 5px;
  width: 12px; /* Set appropriate size */
  height: 10px;
}

.bus-info p {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.bus-info img.li-img-bus {
  margin-right: 10px;
  width: 24px; /* Set appropriate size for bus icons */
  height: 24px;
}
</style>
