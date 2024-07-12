<template>
  <!-- <div class="container"> -->
  <table class="post-table" style="">
    <thead style="">

      <tr style="font-size: 25px; ">
        <th colspan="2" class="title-line">
          <span>{{ boardDetail.title }}</span>
        </th>
      </tr>
      <tr>
        <th colspan="2" class="write-info">
          작성자: <span class="normal-text">{{ boardDetail.memberId }}</span>
          <span class="separator">|</span>
          작성일: <span class="normal-text">{{ boardDetail.boardDate }}</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="2" class="post-content">
          <div class="image-container">
            <img :src="`${axios.defaults.baseURL}/Board/download_board_img_file?boardNo=${boardDetail.boardNo}`">
          </div>
          <div style="margin-top: 10px;">
            <p class="content-text">{{ boardDetail.content }}</p>
          </div>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2" class="bottom-line">
          <div>
            <span>
              <span>첨부파일 : </span>
              <a :href="`http://localhost/Board/download_board_battach_file?boardNo=${boardDetail.boardNo}`"
                style="cursor: pointer"> {{ boardDetail.battachOname }}</a>
            </span>
          </div>

        </td>
      </tr>
    </tfoot>
  </table>
  <!-- </div> -->
</template>

<script setup>
import { inject } from 'vue';
import axios from 'axios';
const boardDetail = inject("boardDetail");
console.log(boardDetail);
</script>

<style scoped>
/* .container {
    max-width: 100%;
    margin: 20px auto;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow-x: auto;
  } */

.post-table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border-bottom: 1px solid #e0e0e0;
  padding: 11px 15px;
  text-align: left;
}

.top-line,
.bottom-line {
  border-bottom: 2px solid #757575;
}

.title-line {
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333333;
  /* background-color: silver; */
}

.write-info {
  font-size: 0.9em;
  color: #666666;
}

.separator {
  margin: 0 10px;
  font-weight: normal;
  color: #666666;
}

.attachedfile-text {
  font-weight: normal;
  font-size: 0.9em;
  color: #414141;
}

.normal-text {
  font-size: 0.9em;
  font-weight: normal;
}

.content-text {
  font-size: 1.0em;
  margin-left: 20px;
  font-weight: normal;
}

.post-content {
  padding: 10px 0;
}

.image-container {
  text-align: center;
  margin-top: 10px;
}

.image-container img {
  max-width: 100%;
  height: auto;
}
</style>