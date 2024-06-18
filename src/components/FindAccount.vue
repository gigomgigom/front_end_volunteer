<template>
    <div class="container">
      <h5 class="title">아이디 찾기 방식</h5>
  
      <!-- Find by phone or email -->
      <div class="mb-3 find-by-options">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" v-model="findBy" value="phone" id="findByPhone">
          <label class="form-check-label" for="findByPhone">휴대번호로 찾기</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" v-model="findBy" value="email" id="findByEmail">
          <label class="form-check-label" for="findByEmail">이메일로 찾기</label>
        </div>
      </div>
  
      <!-- Input for name -->
      <div class="mb-3">
        <label class="form-label" for="name">이름</label>
        <input class="form-control" type="text" v-model="name" placeholder="이름을 입력해 주세요" id="name">
        <small class="rewrite-msg text-muted">올바른 이름을 입력해 주세요</small>
      </div>
  
      <!-- Conditional input for phone -->
      <div class="mb-3" v-if="findBy === 'phone'">
        <label class="form-label" for="phone">휴대폰 번호</label>
        <input class="form-control" type="text" v-model="phone" placeholder="휴대폰 번호를 입력해 주세요" id="phone">
        <small class="rewrite-msg text-muted">올바른 휴대폰 번호를 입력해 주세요</small>
      </div>
  
      <!-- Conditional input for email -->
      <div class="mb-3" v-if="findBy === 'email'">
        <label class="form-label" for="email">이메일</label>
        <input class="form-control" type="email" v-model="email" placeholder="이메일을 입력해 주세요" id="email">
        <small class="rewrite-msg text-muted">올바른 이메일을 입력해 주세요</small>
      </div>
  
      <!-- Submit button -->
      <div class="mb-3">
        <button class="btn btn-primary btn-block" @click="findId">확인</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        findBy: 'phone',
        name: '',
        phone: '',
        email: ''
      };
    },
    methods: {
      findId() {
        if (this.findBy === 'phone') {
          alert(`이름: ${this.name}, 휴대번호: ${this.phone}`);
        } else {
          alert(`이름: ${this.name}, 이메일: ${this.email}`);
        }
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
  
  .find-by-options {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .find-by-options .form-check {
    margin-right: 10px;
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
    display: block;
    font-size: 12px;
    color: #999;
  }
  </style>
  