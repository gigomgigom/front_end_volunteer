<template>
    <nav aria-label="Page navigation example" class="d-flex justify-content-center my-5">
        <ul class="pagination justify-content-center align-items-center">
            <li class="page-item mx-2">
                <button class="btn text_button" @click="changePageNo(1)">처음</button>
            </li>
            <li class="page-item me-4">
                <button class="btn text_button"
                    @click="changePageNo(responseData.pager.startPageNo - 1)">이전</button>
            </li>
            <li class="page-item mx-1" v-for="n in responseData.pager.pageNoList" :key="n">
                <button class="btn number_button" @click="changePageNo(n)"
                    :class="responseData.pager.pageNo === n ? 'selected_button' : ''">{{ n }}</button>
            </li>
            <li class="page-item ms-4">
                <button class="btn text_button"
                    @click="changePageNo(responseData.pager.endPageNo + 1)">다음</button>
            </li>
            <li class="page-item mx-2">
                <button class="btn text_button" @click="changePageNo(responseData.pager.totalPage)">맨끝</button>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { inject } from 'vue';

const responseData = inject('responseData');
const changePageNo = inject('changePageNo');
</script>

<style scoped>
.text_button {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: rgb(240, 103, 4);
  color: white;
  font-weight: bold;
}

.number_button:hover {
  border: 2px solid rgb(240, 103, 4);
  background-color: rgb(240, 103, 4);
  color: white;
}

.number_button.selected_button {
  border: 2px solid rgb(240, 103, 4);
  background-color: rgb(240, 103, 4);
  color: white;
}

.number_button {
  padding-left: 10px;
  padding-right: 10px;
  border: 2px solid gray;
  font-weight: bold;
}
</style>