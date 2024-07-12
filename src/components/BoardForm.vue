<template>
  <div class="form-container mt-4">
    <form v-on:submit.prevent="handleSubmit">
      <table class="form-table">
        <tbody>
          <!-- 제목 입력 -->
          <tr class="form-row">
            <td class="label-cell">
              <label for="title">제목</label>
            </td>
            <td class="input-cell" colspan="3">
              <input id="title" type="text" v-model="board.title"  class="form-input"/>
              <span class="verification-text" ref="title_error" v-if="refsInitialized">제목을 입력해라 좀</span>
            </td>
          </tr>
          <!-- 작성자와 소속센터 -->
          <tr class="form-row">
            <td class="label-cell">
              <label for="center">작성자</label>
            </td>
            <td class="input-cell " colspan="1">{{memberInfo.memberId}}</td>

            <td class="label-cell">
              <label for="center">소속센터</label>
            </td>
            <td class="input-cell">{{findRegionByCountyNo(memberInfo.center)}}</td>
          </tr>

          <!-- 내용 입력 -->
          <tr class="form-row">
            <td class="label-cell">
              <label for="content">내용</label>
            </td>
            <td class="input-cell" colspan="3">
              <textarea id="content" v-model="board.content" class="form-textarea"></textarea>
              <span class="verification-text" ref="content_error" v-if="refsInitialized">내용을 입력해라 좀</span>
            </td>
          </tr>
          <!-- 첨부파일 -->
          <tr class="form-row">
            <td class="label-cell">
              <label for="image">이미지 업로드</label>
            </td>
            <td class="input-cell" colspan="3">
              <input id="image_input" type="file"/>
            </td>
          </tr>
          <tr class="form-row">
            <td class="label-cell">
              <label for="file">첨부파일</label>
            </td>
            <td class="input-cell" colspan="3">
              <input id="file_input" type="file" />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- 하단 버튼들 -->
      <div class="button-container mt-5">
        <HighlightButton  text="등록" class="me-2" />
        <NormalButton type="button" text="리셋" @click="resetForm" class="me-2" />
        <HighlightButton text="목록" type="button" @click="moveList" />
      </div>
    </form>
    <div style="height: 100px"></div>
  </div>
</template>


<script setup>
import router from '@/router';
import HighlightButton from './Common/HighlightButton.vue';
import { ref, onMounted, computed } from 'vue';
import NormalButton from './Common/NormalButton.vue';
import intergratedBoardAPI from '@/apis/intergratedBoardAPI';
import { inject } from 'vue';
import store from '@/store';
let moveList = inject("moveList");
let memberInfo = inject("memberInfo");
const title_error = ref(null);
const content_error = ref(null);
let boardDto = new FormData();
//첨부파일 input 객체
let battachInput = null;
//이미지파일 input 객체
let imageInput = null;
const errorElements = ref([]);
let ctg = inject("boardCtg");
//errorElements가 올바르게 초기화 되고 난 후에 v-if를 사용해서 span요소를 렌더링 하기 위해 선언
const refsInitialized = ref(false);

onMounted(() => {
  errorElements.value = [title_error, content_error];
  refsInitialized.value = true;
  battachInput = document.querySelector('#file_input');
  imageInput = document.querySelector('#image_input');
  console.log(memberInfo.value);
});

const board = ref({
  title: "",
  content: ""
})



async function handleSubmit() {
  let isDataOk = true;
  for(let element of errorElements.value) {
    element.value.classList.remove('userinfo_error');
  }
  
  if(board.value.title === ""){
    if (errorElements.value[0] && errorElements.value[0].value) {
      errorElements.value[0].value.classList.add('userinfo_error');
    }
    isDataOk = false;
  }else{
    boardDto.append('title', board.value.title);
  }
  if(board.value.content === ""){
    if (errorElements.value[1] && errorElements.value[1].value) {
      errorElements.value[1].value.classList.add('userinfo_error');
    }
    isDataOk = false;
  }else{
    boardDto.append('content', board.value.content);
  }
  boardDto.append('boardCtg', ctg);
  if(battachInput.files[0] != null){
    boardDto.append('battachFile', battachInput.files[0])
  }
  if(imageInput.files[0] != null){
    boardDto.append('battachImg', imageInput.files[0])
  }
 
  if (isDataOk) {
    creataeBoard(boardDto);
  }
}
async function creataeBoard(data){
  const response = await intergratedBoardAPI.createBoard(data);
  if(response){
    alert("게시글이 등록되었습니다.")
  }else{
    alert("게시글을 다시 등록해주세요.")
  }
  moveList();
}
                        

function submitForm() {
  alert('글 작성이 완료되었습니다.');
  moveList();
}

function resetForm() {
  board.value.title = '';
  board.value.content = '';
 
}

function findRegionByCountyNo(countyNo) {
  let regionStr = '없음';
  for (let city of store.state.regionCode.regionList) {
    for(let county of city.county) {
      if(county.countyCode === Number(countyNo)) {
        regionStr = city.cityName + ' ' + county.countyName;
      }
    }
  }
  return regionStr;
}


</script>


<style scoped>
.userinfo_error {
  display: block !important;
}
.verification-text {
  font-size: 0.875rem;
  color: red;
  margin-left: 5px;
  display: none;
}

.form-container {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.form-table {
  width: 100%;
  background-color: #ffffff;
  border-collapse: collapse;
  border-top: 2.5px solid #727272;
  border-bottom: 2.5px solid #727272;
}

.form-row {
  border-bottom: 1px solid #dddddd;
}

.label-cell {
  width: 120px;
  text-align: center;
  font-weight: bold;
  color: #333333;
  vertical-align: middle;
  border-right: 1px solid #dddddd;
}

.input-cell {
  width: calc(50% - 60px);
  padding: 10px;
  vertical-align: middle;
  align-content: center;
  border-left: 1px solid #dddddd;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  transition: border-color 0.2s ease-in-out;
  display: inline-block;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #727272;
}

.form-textarea {
  resize: vertical;
  min-height: 400px;
}

.form-input.focused,
.form-textarea.focused {
  border-color: #cccccc
}

.error-placeholder::placeholder {
  color: red;
}

.emoji {
  font-size: 1.2em;

}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.highlight-button {
  background-color: #4d90fe;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.highlight-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.normal-button {
  background-color: #ffffff;
  color: #4d90fe;
  padding: 8px 16px;
  border: 1px solid #4d90fe;
  border-radius: 4px;
  cursor: pointer;
}

.normal-button:hover {
  background-color: #f2f2f2;
}

.highlight-button:hover {
  background-color: #357ae8;
}
</style>