<template>
  <div class="container">
    <h5 class="title">{{ title }}</h5>

    <!-- Find by phone or email -->
    <div class="mb-3 find-by-options">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" v-model="findBy" value="phone" id="findByPhone">
        <label class="form-check-label" for="findByPhone">연락처로 찾기</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" v-model="findBy" value="email" id="findByEmail" >
        <label class="form-check-label" for="findByEmail" >이메일로 찾기</label>
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
      <small class="rewrite-msg text-muted">{{ field.hint }}</small>
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

    submitButtonText: { type: String, default: '확인' }
  },


  data() {
    return {
      findBy: 'phone'
    };
  },
  computed: {
    dynamicFields() {
      return this.findBy === 'phone' ? this.phoneFields : this.emailFields;
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', {
        findBy: this.findBy,
        fields: this.dynamicFields
      });
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