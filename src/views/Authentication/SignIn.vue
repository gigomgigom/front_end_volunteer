<template>
  <div class="container">
    <h5 class="title">로그인</h5>

    <div class="mb-3">
      <label class="form-label" for="id">아이디</label>
      <input class="form-control" type="text" v-model="id" placeholder="아이디를 입력해 주세요" id="id">
      <small class="rewrite-msg text-muted">올바른 아이디를 입력해 주세요</small>
    </div>

    <div class="mb-3">
      <label class="form-label" for="password">비밀번호</label>
      <input class="form-control" type="password" v-model="password" placeholder="비밀번호를 입력해 주세요" id="password">
      <small class="rewrite-msg text-muted">올바른 비밀번호를 입력해 주세요</small>
    </div>

    <!-- Remember ID checkbox -->
    <div class="mb-3 form-check">
      <input class="form-check-input" type="checkbox" v-model="rememberId" id="rememberId">
      <label class="form-check-label" for="rememberId">아이디 저장하기</label>
    </div>

    <!-- Submit button -->
    <div class="mb-3">
      <button class="btn btn-primary btn-block" @click="login">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      password: '',
      rememberId: false // 아이디 저장 여부를 나타내는 데이터 속성
    };
  },
  methods: {
    login() {
      if (this.rememberId) {
        localStorage.setItem('savedId', this.id);
      } else {
        localStorage.removeItem('savedId');
      }

      // 로그인 로직 구현
      // 예를 들어, 서버로 로그인 정보를 전송하는 API 호출
      alert(`아이디: ${this.id}, 비밀번호: ${this.password}`);
    }
  },
  mounted() {
    // 페이지가 로드될 때 저장된 아이디를 불러옵니다.
    if (localStorage.getItem('savedId')) {
      this.id = localStorage.getItem('savedId');
      this.rememberId = true;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

.title {
  margin-bottom: 20px;
  text-align: center;
  color: #333;
  font-weight: bold;
}

.form-label {
  font-weight: bold;
  color: #555;
}

.form-control {
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  font-weight: bold;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

.rewrite-msg {
  font-size: 12px;
  color: #999;
}

.form-check-input {
  margin-top: 0.3em;
}

.form-check-label {
  font-size: 13px;
}
</style>
