<template>
  <div class="form-container">
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
              <input id="center" type="text" v-model="center" maxlength="15" placeholder="소속센터를 입력하세요" class="form-input"
                @focus="onFocus" @blur="onBlur">
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
      <div class="button-container">
        <button class="submit-button" @click.prevent="submitForm">등록</button>
        <button class="cancel-button" @click.prevent="resetForm">리셋</button>
        <button btn-primary class="list-button" @click.prevent="goToList">목록</button>
      </div>

    </form>
  </div>
</template>

<script>
import router from '@/router';

export default {
  data() {
    return {
      title: '',
      author: '',
      center: '',
      email: '',
      phone: '',
      content: '',
      file: null
    };
  },
  methods: {
    onFileChange(event) {
      this.file = event.target.files[0];
    },

    deleteFile() {
      this.file = null;
      let input = this.$refs.fileInput;
      if (input) {
        input.value = '';
      }
    },

    submitForm() {
      //폼 제출
      router.push('')
      alert('폼이 제출되었습니다!');
    },

    //폼 작성 초기화
    resetForm() {
      this.title = '';
      this.author = '';
      this.center = '';
      this.email = '';
      this.phone = '';
      this.content = '';
      this.file = null;
      let input = this.$refs.fileInput;
      if (input) {
        input.value = '';
      }
    },

    goToList() {

      alert('목록으로 이동합니다!');
    },


    onFocus(event) {
      event.target.classList.add('focused');
    },


    onBlur(event) {
      event.target.classList.remove('focused');
    }
  }
};
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

.submit-button {
  margin: 5px;
  padding: 10px 15px;
  background-color: #4d90fe;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

button {
  margin: 5px;
  padding: 10px 15px;
  background-color: #918f8f;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  background-color: #357ae8;
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
