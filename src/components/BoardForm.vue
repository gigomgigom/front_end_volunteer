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
              <input
                id="title"
                type="text"
                v-model="title"
                maxlength="30"
                :placeholder="titleTouched && !titleValid ? '제목을 입력하세요' : '제목을 입력하세요'"
                class="form-input"
                :class="{ 'error-placeholder': titleTouched && !titleValid }"
                @focus="onFocus"
                @blur="validateTitle"
                required
              />
            </td>
          </tr>
          <!-- 작성자와 소속센터 -->
          <tr class="form-row">
            <td class="label-cell">
              <label for="center">작성자</label>
            </td>
            <td class="input-cell "  colspan="1">serim1997</td>
           
            <td class="label-cell">
              <label for="center">소속센터</label>
            </td>
            <td class="input-cell">인천광역시 서구</td>
          </tr>

          <!-- 내용 입력 -->
          <tr class="form-row">
            <td class="label-cell">
              <label for="content">내용</label>
            </td>
            <td class="input-cell" colspan="3">
              <textarea
                id="content"
                v-model="content"
                :placeholder="contentTouched && !contentValid ? '내용을 입력하세요' : '내용을 입력하세요'"
                class="form-textarea"
                :class="{ 'error-placeholder': contentTouched && !contentValid }"
                @focus="onFocus"
                @blur="validateContent"
                required
              ></textarea>
            </td>
          </tr>
          <!-- 첨부파일 -->
          <tr class="form-row">
            <td class="label-cell">
              <label for="image">이미지 업로드</label>
            </td>
            <td class="input-cell" colspan="3">
              <input id="image" type="file" ref="imageInput" @change="onFileChange" />
              <span v-if="file">
                <img src="@/assets/trashcan.png" alt="trashcan-img" style="height: 20px; cursor: pointer;" @click="deleteFile" />
              </span>
            </td>
          </tr>
          <tr class="form-row">
            <td class="label-cell">
              <label for="file">첨부파일</label>
            </td>
            <td class="input-cell" colspan="3">
              <input id="file" type="file" ref="fileInput" @change="onFileChange" />
              <span v-if="file">
                <img src="@/assets/trashcan.png" alt="trashcan-img" style="height: 20px; cursor: pointer;" @click="deleteFile" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- 하단 버튼들 -->
      <div class="button-container mt-5">
        <HighlightButton :disabled="!isFormValid" text="등록" @click="handleSubmit" class="me-2" />
        <NormalButton text="리셋" @click="resetForm" class="me-2" />
        <HighlightButton text="목록" @click="goToList" />
      </div>
    </form>
    <div style="height: 100px"></div>
  </div>
</template>


<script setup>
import router from '@/router';
import HighlightButton from './Common/HighlightButton.vue';
import { ref, computed } from 'vue';
import NormalButton from './Common/NormalButton.vue';

const title = ref('');
const author = ref('');
const content = ref('');
const file = ref(null);

const imageInput = ref(null);
const fileInput = ref(null);

const titleTouched = ref(false);
const contentTouched = ref(false);

/*제목, 내용, 전체 폼 유효성 검사*/
const titleValid = computed(() => title.value.trim() !== '');
const contentValid = computed(() => content.value.trim() !== '');
const isFormValid = computed(() => titleValid.value && contentValid.value);

function onFileChange(event) {
  file.value = event.target.files[0];
}

function deleteFile() {
  file.value = null;
  const input = fileInput.value;
  if (input) {
    input.value = '';
  }
}

function handleSubmit() {
 
  titleValid.value = true;
  contentValid.value = true;
  if (!isFormValid.value) {
    alert('제목과 내용을 입력해주세요.');
  } else {
    submitForm();
  }
}


function submitForm() {
  alert('글 작성이 완료되었습니다.');
  router.push('/Details/Information/Review/ViewReviewList');
}

function resetForm() {
  title.value = '';
  author.value = '';
  content.value = '';
  file.value = null;
  titleTouched.value = false;
  contentTouched.value = false;
  const input = fileInput.value;
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


function validateTitle() {
  titleTouched.value = true;
}

function validateContent() {
  contentTouched.value = true;
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
  border-color: #727272;
}

.form-textarea {
  resize: vertical;
  min-height: 400px;
}

.form-input.focused,
.form-textarea.focused {
  border-color:#cccccc
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