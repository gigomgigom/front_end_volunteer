<template>
  <div>
    <p class="title">{{ title }}</p>
    <div class="container">

      <div class="mb-3" v-for="(field, index) in Fields" :key="index">
        <label class="form-label" :for="field.id">{{ field.label }}</label>
        <input class="form-control" :type="field.type" :id="field.id" v-model="field.value"
          :placeholder="field.placeholder" :maxlength="field.maxlength">
        <div v-if="errors[field.id]" class="text-danger">{{ errors[field.id] }}</div>
      </div>

      <!-- 제출 버튼 -->
      <div class="mb-3">
        <button class="btn btn-primary btn-block" @click="handleSubmit">{{ submitButtonText }}</button>
      </div>

      <!-- 모달 -->
      <div class="modal fade" id="customModal" tabindex="-1" aria-labelledby="customModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="customModalLabel">알림</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              {{ modalMessage }}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
              <button type="button" class="btn btn-login" @click="goToLogin">로그인하러 가기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
  props: {
    title: { type: String, default: '' },
    Fields: {
      type: Array,
      default: () => []
    },
    submitButtonText: { type: String, default: '확인' },
    errormsg: {
      type: Object, default: () => ({})
    },
    pageType: { type: String, default: 'findId' }
  },

  data() {
    return {
      errors: this.errormsg,
      modalMessage: ''
    };
  },

  watch: {
    errormsg: {
      handler(newValue) {
        this.errors = newValue;
      },
      deep: true
    }
  },

  methods: {
    validateFields() {
      const errors = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const idRegex = /^[a-z0-9]{5,12}$/;
      const nameRegex = /^[A-Za-z가-힣]{1,6}$/;

      this.Fields.forEach(field => {
        if (!field.value) {
          errors[field.id] = `${field.label}을(를) 입력해 주세요.`;
        } else {
          if (field.id === 'name' && !nameRegex.test(field.value)) {
            errors[field.id] = '이름을 올바르게 입력해 주세요.';
          }
          if (field.id === 'email' && !emailRegex.test(field.value)) {
            errors[field.id] = '유효한 이메일 주소를 입력해 주세요.';
          }
          if (field.id === 'uid' && !idRegex.test(field.value)) {
            errors[field.id] = '유효한 아이디를 입력해 주세요.';
          }
        }
      });
      return errors;
    },

    handleSubmit() {
      this.$emit('submit', {
        fields: this.Fields
      });
    },

    showModal() {
      const customModal = new Modal(document.getElementById('customModal'));
      customModal.show();
    },

    goToLogin() {
      this.$emit('go-to-login');
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Arial', sans-serif;
}

.title {
  margin-bottom: 20px;
  text-align: left;
  color: #7a7a7a;
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
  background-color: #ff7f0e;
  border-color: #ff7f0e;
}

.btn-primary:hover {
  background-color: #ff6300;
  border-color: #ff4500;
}

.btn-login {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
}

.btn-login:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.text-danger {
  color: red;
  font-size: 12px;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 1rem);
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

.modal-footer .btn {
  width: auto;
  margin-left: 10px;
}
</style>
