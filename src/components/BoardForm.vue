<template>
  <div class="form-container mt-4">
    <form @submit.prevent="handleSubmit">
      <table class="form-table">
        <tbody>
          <!-- 제목 입력 -->
          <tr class="form-row">
            <td class="label-cell">
              <label for="title">제목</label>
            </td>
            <td class="input-cell" colspan="3">
              <input id="title" type="text" v-model="title" maxlength="30" placeholder="제목을 입력하세요" class="form-input" @focus="onFocus"
                @blur="onBlur" required>
            </td>
          </tr>
          <!-- 작성자와 소속센터 -->
          <tr class="form-row">
            <td class="label-cell">
              <label for="author" >작성자</label>
            </td>
            <td class="input-cell">
              <input id="author" type="text" v-model="author" maxlength="15" placeholder="작성자를 입력하세요" class="form-input" @focus="onFocus"
                @blur="onBlur">
            </td>
            <td class="label-cell">
              <label for="center">소속센터</label>
            </td>
            <td class="input-cell">
              인천광역시 서구
            </td>
          </tr>

          <!-- 내용 입력 -->
          <tr class="form-row">
            <td class="label-cell">
              <label for="content">내용</label>
            </td>
            <td class="input-cell" colspan="3">
              <textarea id="content" v-model="content" placeholder="내용을 입력하세요" class="form-textarea" @focus="onFocus"
                @blur="onBlur"></textarea>
            </td>
          </tr>
          <!-- 첨부파일 -->
          <tr class="form-row">
            <td class="label-cell">
              <label for="file">이미지 업로드</label>
            </td>
            <td class="input-cell" colspan="3">
              <input id="file" type="file" ref="imageInput" @change="onFileChange">
              <span v-if="file">
                <img src="@/assets/trashcan.png" alt="trashcan-img" style="height: 20px; cursor: pointer;"
                  @click="deleteFile">
              </span>
            </td>
          </tr>
          <tr class="form-row">
            <td class="label-cell">
              <label for="file">첨부파일</label>
            </td>
            <td class="input-cell" colspan="3">
              <input id="file" type="file" ref="fileInput" @change="onFileChange">
              <span v-if="file">
                <img src="@/assets/trashcan.png" alt="trashcan-img" style="height: 20px; cursor: pointer;"
                  @click="deleteFile">
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- 하단 버튼들 -->
      <div class="button-container mt-5">
        <HighlightButton text="등록" @click="submitForm" class="me-2"/>
        <NormalButton text="리셋" @click="resetForm" class="me-2"/>
        <HighlightButton text="목록" @buttonClick="goToList"/>
      </div>

    </form>
    <div style="height: 100px"></div>
  </div>
</template>

<script setup>
import router from '@/router';
import HighlightButton from './Common/HighlightButton.vue';
import { ref } from 'vue';
import NormalButton from './Common/NormalButton.vue';

const title = ref('');
const author = ref('');
const center = ref('');
const email = ref('');
const phone = ref('');
const content = ref('');
const file = ref(null);

const imageInput = ref(null);
const fileInput = ref(null);

function onFileChange(event) {
  file.value = event.target.files[0];
}

function deleteFile() {
  file.value = null;
  let input = fileInput.value;
  if(input) {
    input.value = '';
  }
}

function submitForm() {
  alert('글 작성이 완료되었습니다.');
  router.push('/Details/Information/Review/ViewReviewList');
}

function resetForm() {
  title.value = '';
  author.value = '';
  center.value = '';
  email.value = '';
  phone.value = '';
  content.value = '';
  file.value = null;
  let input = fileInput;
  if (input) {
    input.value = '';
  }
}

function goToList() {
  router.push('/Details/Information/Review/ViewReviewList');
}

function onFocus(event) {
  event.target.classList.add('focused');
}

function onBlur(event) {
  event.target.classList.remove('focused');
}
</script>

<style scoped>
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
  border-color: #4d90fe;
}

.form-textarea {
  resize: vertical;
  min-height: 400px;
}

.form-input.focused,
.form-textarea.focused {
  border-color: #4d90fe;
}

.emoji {
  font-size: 1.2em;
  /* 이모지 크기 조정 */
}

.button-container{
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
