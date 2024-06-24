<template>
  <div class="search-form">
    <p>※ 기간 선택 후 검색하시기 바랍니다.</p>
    <div class="form-container">
      <div class="d-flex flex-row mb-2">
        <div class="period-selection">
          <span class="bb">기간</span>
          <VueDatePicker v-model="actDate" range :partial-range="false" :enable-time-picker="false"/>
        </div>
        <div class="radio-selection">
          <label>
            <input type="radio" value="3개월" v-model="period" /> 3개월
          </label>
          <label>
            <input type="radio" value="6개월" v-model="period" /> 6개월
          </label>
          <label>
            <input type="radio" value="1년" v-model="period" /> 1년
          </label>
          <label>
            <input type="radio" value="3년" v-model="period" /> 3년
          </label>
          <label>
            <input type="radio" value="5년" v-model="period" /> 5년
          </label>
          <label>
            <input type="radio" value="전체" v-model="period" /> 전체
          </label>
        </div>
      </div>
      <div class="row input-fields mb-5">
        <div class="col-sm-6 input-container">
          <span class="bb">봉사명</span>
          <input type="text" id="volunteerName" v-model="volunteerName" />
        </div>
        <div class="col-sm-6 input-container">
          <span class="bb">모집기관</span>
          <input type="text" id="requestName" v-model="requestName" />
        </div>
      </div>
      <div class="buttons">
        <HighlightButton text="검색" class="me-3"/>
        <NormalButton text="초기화"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';
import { ref } from 'vue';

const startDate = ref('');
const endDate = ref('');
const period = ref('');
const volunteerName = ref('');
const requestName = ref('');
const actDate = ref(null);
</script>

<style scoped>

.search-form {
  margin: 0 auto;
}

.form-container {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
}

.period-selection,
.radio-selection,
.buttons {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.period-selection input,
.input-fields input {
  margin-left: 10px;
  margin-right: 5px;
}

.radio-selection {
  margin-left: 20px;
  font-size: 0.9em;
}

.radio-selection label {
  margin-right: 15px;
}

.input-fields {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.input-container {
  display: flex;
  align-items: center;
}

.input-container input[type="text"] {
  flex-grow: 1;
  margin-left: 10px;
  border-radius: 2px;
  border: 1px solid #ccc;
}

.buttons {
  justify-content: center;
}

.bb {
  min-width: 60px;
  /* Adjust this width as needed */
  padding: 0 0 0 12px;
  background: url("@/assets/ico_search.png") center left no-repeat;
}
</style>