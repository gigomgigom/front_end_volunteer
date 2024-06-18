<template>
  <div class="container">
    <!-- 필터 및 검색 부분 -->
    <div class="accordion" id="filterAccordion">
      <div class="accordion-item" style="border: none;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h6 class="all">
            [전체 <span class="highlight">{{ posts.length }}</span>건,
            현재페이지 <span class="highlight">{{ currentPage }}</span>/2]
          </h6>
          <div style="display: flex; align-items: center;">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                data-bs-toggle="dropdown" aria-expanded="false">
                제목
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">제목</a></li>
                <li><a class="dropdown-item" href="#">내용</a></li>
                <li><a class="dropdown-item" href="#">작성자</a></li>
              </ul>
            </div>
            <input class="form-control form-control-sm ms-2" type="text" aria-label=".form-control-sm example">
            <button class="btn btn-sm btn-primary ms-2" id="btn-sm1">검색</button>
          </div>
        </div>
        <div id="collapseFilter" class="accordion-collapse collapse" aria-labelledby="headingFilter">
          <div class="accordion-body">
            <form>
              <div class="mb-3">
                <label for="searchTitle" class="form-label">제목</label>
                <input type="text" class="form-control" id="searchTitle">
              </div>
              <div class="mb-3">
                <label for="searchContent" class="form-label">내용</label>
                <input type="text" class="form-control" id="searchContent">
              </div>
              <div class="mb-3">
                <label for="searchAuthor" class="form-label">작성자</label>
                <input type="text" class="form-control" id="searchAuthor">
              </div>
            </form>
          </div>
        </div>
      </div>
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
        <tr v-for="post in paginatedPosts" :key="post.id">
          <td class="col-num no-border-left text-center">{{ post.id }}</td>
          <td colspan="2">{{ post.title }}</td>
          <td class="col-author text-center">{{ post.author }}</td>
          <td class="col-date text-center">{{ post.date }}</td>
          <td class="col-views no-border-right text-center">{{ post.views }}</td>
        </tr>
      </tbody>
    </table>
  </div>


  <div class="d-flex justify-content-between align-items-center">
    <div class="flex-grow-1 d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center mb-4 ms-5">
          <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
            <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <HighlightButton text="글쓰기" @buttonClick="injecter.moveReviewForm()"/>
  </div>



</template>


<script setup>
import HighlightButton from './Common/HighlightButton.vue';
import { ref, computed, inject } from 'vue';

const posts = ref([
  { id: 1, title: "제목 1", author: "황세림", date: "2024-06-17", views: 100 },
  { id: 2, title: "제목 2", author: "황세림", date: "2024-06-17", views: 150 },
  { id: 3, title: "제목 3", author: "황세림", date: "2024-06-17", views: 120 },
  { id: 4, title: "제목 4", author: "황세림", date: "2024-06-17", views: 90 },
  { id: 5, title: "제목 5", author: "황세림", date: "2024-06-17", views: 80 },
  { id: 6, title: "제목 6", author: "황세림", date: "2024-06-17", views: 70 },
  { id: 7, title: "제목 7", author: "황세림", date: "2024-06-17", views: 60 },
  { id: 8, title: "제목 8", author: "황세림", date: "2024-06-17", views: 50 },
  { id: 9, title: "제목 9", author: "황세림", date: "2024-06-17", views: 40 },
  { id: 10, title: "제목 10", author: "황세림", date: "2024-06-17", views: 30 },
  { id: 1, title: "제목 11", author: "황세림", date: "2024-06-17", views: 100 },
  { id: 2, title: "제목 12", author: "황세림", date: "2024-06-17", views: 150 },
  { id: 3, title: "제목 13", author: "황세림", date: "2024-06-17", views: 120 },
  { id: 4, title: "제목 14", author: "황세림", date: "2024-06-17", views: 90 },
  { id: 5, title: "제목 15", author: "황세림", date: "2024-06-17", views: 80 },
  { id: 6, title: "제목 16", author: "황세림", date: "2024-06-17", views: 70 },
  { id: 7, title: "제목 17", author: "황세림", date: "2024-06-17", views: 60 },
  { id: 8, title: "제목 18", author: "황세림", date: "2024-06-17", views: 50 },
  { id: 9, title: "제목 19", author: "황세림", date: "2024-06-17", views: 40 },
  { id: 10, title: "제목 20", author: "황세림", date: "2024-06-17", views: 30 }
]);

const currentPage = ref(1);
const perPage = 10; // 페이지당 표시할 아이템 수

const paginatedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * perPage;
  return posts.value.slice(startIndex, startIndex + perPage);
});

const totalPages = computed(() => Math.ceil(posts.value.length / perPage));

function changePage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}

const injecter = inject('provideByReview');

</script>

<style scoped>
.dropdown-toggle {
  background-color: #ffffff;
  color: black;
  width: 70px;
  height: 30px;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  border-color: #ddd;
}

.dropdown-toggle:hover {
  background-color: #ffffff;
}

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
  background-color: #666;
  text-align: left;
  border: 1px solid black;
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
  /*누를 때마다 나오는 효과 없애기 */
}
</style>