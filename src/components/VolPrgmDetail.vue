<template>
  <div class="info-container">
    <div class="row info-wrapper">
      <dl class="col-md-6">
        <dt>봉사기간</dt>
        <dd>{{ volDetail.actDate }}</dd>
      </dl>
      <dl class="col-md-6">
        <dt>봉사시간</dt>
        <dd>{{ volDetail.actTime }}</dd>
      </dl>
    </div>
    <div class="row info-wrapper">
      <dl class="col-md-6">
        <dt>모집인원</dt>
        <dd>{{ volDetail.recruitCnt }}명</dd>
      </dl>
      <dl class="col-md-6">
        <dt>신청인원</dt>
        <dd>{{ volDetail.applyCnt }}명</dd>
      </dl>
    </div>
    <div class="row info-wrapper">
      <dl class="col-md-6">
        <dt>모집기간</dt>
        <dd>{{ volDetail.recruitDate }}</dd>
      </dl>
      <dl class="col-md-6">
        <dt>모집기관</dt>
        <dd>{{ volDetail.recruitCenter }}</dd>
      </dl>
    </div>
    <div class="row info-wrapper">
      <dl class="col-md-6">
        <dt>봉사지역</dt>
        <dd>{{ volDetail.region }}</dd>
      </dl>
    </div>
    <div class="row info-wrapper">
      <dl class="col-md-12">
        <dt style="width: 15%;">봉사장소</dt>
        <dd style="width: 85%;"><span>{{ volDetail.actPlace }}</span></dd>
      </dl>
    </div>
    <div class="row info-wrapper">
      <dl class="col-md-6">
        <dt>봉사분야</dt>
        <dd>{{ volDetail.ctg }}</dd>
      </dl>
      <dl class="col-md-6">
        <dt>봉사자 유형</dt>
        <dd>{{ volDetail.adultTeen }}</dd>
      </dl>
    </div>
    <div class="row info-wrapper">
      <dl class="col-md-6">
        <dt>담당자 이름</dt>
        <dd>{{ volDetail.mngName }}</dd>
      </dl>
      <dl class="col-md-6">
        <dt>담당자 연락처</dt>
        <dd>{{ volDetail.mngTel }}</dd>
      </dl>
    </div>
    <div class="row info-wrapper">
      <dl class="col-md-12">
        <dt style="width: 15%;">첨부파일</dt>
        <dd style="width: 85%;"><span>{{ volDetail.fileName }}</span></dd>
      </dl>
    </div>
  </div>
  <div class="board-body">
    <div class="body-text">
      <img style="width: 100%" :src="`${axios.defaults.baseURL}/VolProgram/download_vol_pgrm_img_file?programNo=${volDetail.no}`">
      <pre>
        {{ volDetail.content }}
      </pre>
    </div>
    <KakaoMap :locationData="volDetail" v-if="volDetail.isDataLoaded"/>
  </div>
</template>

<script setup>
import KakaoMap from './KakaoMap.vue';
import { inject } from 'vue';
import axios from 'axios';

const volDetail = inject('detail');
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.info-container {
  border-top: 2px solid black;
  border-left: 2px solid silver;
  border-right: 2px solid silver;
}

.info-wrapper {
  border-bottom: 1px solid silver;
}

.board-body {
  border-left: 2px solid silver;
  border-right: 2px solid silver;
  border-bottom: 2px solid black;
}

dl {
  display: flex;
  border-bottom: 1px solid silver;
}

dt {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 40px;
  background-color: rgb(238, 238, 238);
  border-right: 2px solid silver;
}

dd {
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 15px;
  width: 70%;
}

pre {
  padding-left: 30px;
  padding-top: 20px;
}
</style>