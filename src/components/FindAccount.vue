<template>
  <div class="container">
    <h5 class="title">{{ title }}</h5>

    <!-- Find by phone or email -->
    <div class="mb-3 find-by-options">
      <div class="form-check form-check-inline">
        <input class="form-check-input custom-radio" type="radio" v-model="findBy" value="phone" id="findByPhone">
        <label class="form-check-label" for="findByPhone">연락처로 찾기</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input custom-radio" type="radio" v-model="findBy" value="email" id="findByEmail">
        <label class="form-check-label" for="findByEmail">이메일로 찾기</label>
      </div>
    </div>

    <!-- Customizable input fields -->
    <div class="mb-3" v-for="(field, index) in dynamicFields" :key="index">
      <label class="form-label" :for="field.id">{{ field.label }}</label>
      <input
        class="form-control"
        :type="field.type"
        :id="field.id"
        v-model="field.value"
        :placeholder="field.placeholder"
        :maxlength="field.maxlength"
      >
      <div v-if="errors[field.id]" class="text-danger">{{ errors[field.id] }}</div>
    </div>

    <!-- Submit button -->
    <div class="mb-3">
      <button class="btn btn-primary btn-block" @click="handleSubmit">{{ submitButtonText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '아이디 찾기 방식' },
    phoneFields: {
      type: Array,
      default: () => []
    },
    emailFields: {
      type: Array,
      default: () => []
    },
    submitButtonText: { type: String, default: '확인' },
    errormsg: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      findBy: 'phone', // 사용자가 선택한 찾기 방식을 저장하는 변수. 기본값은 phone
      errors: this.errormsg //현재 입력 필드의 오류 메시지를 저장하는 객체. 기본값은 errormsg prop.
    };
  },

  watch: {
    errormsg: {
      handler(newValue) {
        this.errors = newValue;
      },
      deep: true
    },

    findBy() {
      // findBy 값이 변경될 때 errors 객체 초기화
      this.errors = {};
    }
  },

  computed: {
    dynamicFields() {
      return this.findBy === 'phone' ? this.phoneFields : this.emailFields;
    }
  },

  methods: {
    validateFields() {
      const errors = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10,11}$/;
      const idRegex = /^[a-z0-9]{5,12}$/;
      const nameRegex = /^[A-Za-z가-힣]{1,6}$/;

      this.dynamicFields.forEach(field => {
        if (!field.value) {
          // 입력칸에 아무것도 입력되지 않았을 때
          errors[field.id] = `${field.label}을(를) 입력해 주세요.`;
        } else {
          if (field.id === 'name' && !nameRegex.test(field.value)) {
            errors[field.id] = '이름을 올바르게 입력해 주세요.';
          }
          if (field.id === 'email' && !emailRegex.test(field.value)) {
            errors[field.id] = '유효한 이메일 주소를 입력해 주세요.';
          }
          if (field.id === 'phone' && !phoneRegex.test(field.value)) {
            errors[field.id] = '유효한 휴대폰 번호를 입력해 주세요.';
          }
          if (field.id === 'uid' && !idRegex.test(field.value)) {
            errors[field.id] = '유효한 아이디를 입력해 주세요.';
          }
        }
      });
      return errors;
    },

    handleSubmit() {
      this.errors = this.validateFields();
      if (Object.keys(this.errors).length === 0) {
        this.$emit('submit', {
          findBy: this.findBy,
          fields: this.dynamicFields
        });
      } else {
        this.$emit('update:errormsg', this.errors);
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
  border-radius: 8px;
  font-family: 'Arial', sans-serif;
}

.title {
  margin-bottom: 20px;
  text-align: left;
  color: #333;
  font-weight: bold;
}

.find-by-options {
  display: flex;
  justify-content: left;
  margin-bottom: 20px;
}

.find-by-options .form-check {
  margin-right: 10px;
}

.find-by-options .form-check-input:checked {
  background-color: #ff7f0e;
  border-color: #ff7f0e;
}

.find-by-options .form-check-input:focus {
  border-color: #ff7f0e;
  box-shadow: 0 0 0 0.2rem rgba(255, 127, 14, 0.25);
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

.text-danger {
  color: red;
  font-size: 12px;
}
</style>
