<template>
  <div style="display: flex; justify-content: space-between; align-items: center;" class="mt-4">
    <h6 class="all">
      [전체 <span class="highlight">{{ data.pager.totalCount }}</span>건,
      현재페이지 <span class="highlight">{{ data.pager.pageNo }}</span>/{{ data.pager.totalPage }}]
    </h6>
    <div style="display: flex; align-items: center;">
      <select class="form-select form-select-sm custom-select-width" aria-label="Small select example" v-model="searchIndex.keywordIndex">
        <option value="1">제목</option>
        <option value="2">작성자</option>
        <option value="3">내용</option>
      </select>
      <input class="form-control form-control-sm ms-2 no-margin1" type="text" aria-label=".form-control-sm example" v-model="searchIndex.keyword">
      <button class="btn btn-sm btn-primary ms-2 no-margin2" id="btn-sm1" type="button" @click="submitSearchIndex">검색</button>
    </div>
  </div>



  <!-- 게시물 목록 -->
  <div>
    <table class="table caption-top mt-2">
      <thead class="table-primary">
        <tr class="tablehead">
          <th scope="col" class="col-num no-border-left text-center" style="background-color: gainsboro;">번호</th>
          <th scope="col" class="col-title text-center" style="background-color: gainsboro;" colspan="2">제목</th>
          <th scope="col" class="col-author text-center" style="background-color: gainsboro;">작성자</th>
          <th scope="col" class="col-date text-center" style="background-color: gainsboro;">작성일</th>
          <th scope="col" class="col-views no-border-right text-center" style="background-color: gainsboro;">조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(notice, index) in data.noticeList" :key="index">
          <td class="col-num no-border-left text-center">{{ notice.no }}</td>
          <td colspan="2"><span @click="moveDetail(notice.no)" style="cursor: pointer;">{{ notice.title }}</span></td>
          <td class="col-author text-center">{{ notice.writer }}</td>
          <td class="col-date text-center">{{ notice.date }}</td>
          <td class="col-views no-border-right text-center">{{ notice.hitCnt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="d-flex justify-content-end">
    <slot name="createButton">
      <!--글 작성하기 버튼 생성-->
    </slot>
  </div>




</template>


<script setup>
import router from '@/router';
import { ref, computed } from 'vue';
import { inject } from "vue";

const moveDetail = inject('moveDetail');
const data = inject('responseData');
const searchIndex = inject('searchIndex');

function submitSearchIndex() {
  searchIndex.value.searchBySearchIndex();
}
</script>

<style scoped>
.form-label {
  z-index: 999;
}

input.form-control.form-control-sm {
  width: 150px;
}

#btn-sm1 {
  background-color: #666;
  border-color: #ffffff;
}

#btn-sm2 {
  background-color: darkorange;
  border-color: #ffffff;
}

table {
  table-layout: fixed;
  width: 100%;

}

thead th {
  font-family: 'Noto Sans Korean', '돋움', Arial, sans-serif;
  background-color: #eee;
  text-align: left;
  border: 1px solid #6c757d;
  font-weight: normal;
}

td,
th {
  word-wrap: break-word;
  white-space: normal;
  padding: 12px 8px;
  vertical-align: middle;
  text-align: left;
  border: 1px solid #ddd;
}

.no-border-right {
  border-right: none;
}

.no-border-left {
  border-left: none;
}

.col-num {
  width: 10%;
}

.col-title {
  width: 50%;
}

.col-author {
  width: 15%;
}

.col-date {
  width: 15%;
}

.col-views {
  width: 15%;
}

.pagination .page-link {
  background-color: #ffffff;
  border-color: #ffffff;
  border: 1px solid #ddd;
  margin: 0 3px;
  border: 1px solid #ddd;
}

.pagination .page-link:hover {
  background-color: #666;
  border-color: #ffffff;


}

.pagination .page-item.active .page-link {
  background-color: #666;
  border-color: #ffffff;

}

.pagination .page-item.disabled .page-link {
  background-color: #666;
  border-color: #ffffff;

}

.highlight {
  color: coral;
  font-weight: bolder;
}

.pagination {
  display: flex;
  justify-content: center;
}

.page-item.disabled .page-link {
  pointer-events: none;
  color: #6c757d;
  background-color: #fff;
  border-color: #dee2e6;
}

.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #ffffff;
  border-color: #ffffff;
}

.page-link {
  position: relative;
  display: block;
  color: black;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid black;
  line-height: 1.25;
  border-radius: 0 0 !important;
  /* 모서리를 각지게 만드는데, !important 속성을 활용해서 css 우선순위 높임 */

}

.page-link:hover,
.page-link:focus,
.page-link:active {
  z-index: 2;
  color: black;
  text-decoration: none;
  background-color: #e9ecef;
  border-color: #dee2e6;
  outline: none;
  box-shadow: none;

}

.custom-select-width {
  width: 90px;
  box-shadow: none;
}

.ms-2 {
  margin-left: 8px;
  /*기본 마진 제거*/
}


.no-margin1 {
  margin-left: 0;
  box-shadow: none;
}

.no-margin2 {
  margin-left: 0;
}
</style>