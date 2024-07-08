<template>
  <div class="search-form">
    <p>※ 기간 선택 후 검색하시기 바랍니다.</p>
    <div class="form-container">
      <div class="d-flex flex-row mb-2">
        <div class="period-selection">
          <span class="bb">기간</span>
          <VueDatePicker v-model="searchIndex.actDate" range :partial-range="false" :enable-time-picker="false" />
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
          <input type="text" id="volunteerName" v-model="searchIndex.keyword" />
        </div>
        <div class="col-sm-6 input-container">
          <span class="bb">모집기관</span>
          <input type="text" id="requestName" v-model="searchIndex.recruitCenter" />
        </div>
      </div>
      <div class="buttons">
        <HighlightButton text="검색" class="me-3" @buttonClick="submitSearchIndex"/>
        <NormalButton text="초기화" @buttonClick="resetForm" />
      </div>
    </div>
  </div>
</template>

<script setup>
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';
import { inject, ref, watch } from 'vue';

const period = ref('');

const searchIndex = inject('searchIndex');


//검색란 초기화
function resetForm() {
  period.value = '전체';
  searchIndex.value.actDate.length = 0;
  searchIndex.value.keyword = '';
  searchIndex.value.recruitCenter = '';
}

function submitSearchIndex() {
  searchIndex.value.searchBySearchIndex();
}
//라디오 버튼 클릭시 그에 맞는 기간으로 세팅해주기
watch(period, (newPeriod, oldPeriod) => {
  let endDate = new Date();
  let startDate = new Date();
  if(searchIndex.value.actDate.length) {
        searchIndex.value.actDate.length = 0;
  }
  switch (newPeriod) {
    case '3개월':
      startDate.setMonth(startDate.getMonth() - 3);
      searchIndex.value.actDate.push(startDate);
      searchIndex.value.actDate.push(endDate);
      break;
    case '6개월':
      startDate.setMonth(startDate.getMonth() - 6);
      searchIndex.value.actDate.push(startDate);
      searchIndex.value.actDate.push(endDate);
      break;
    case '1년':
      startDate.setFullYear(startDate.getFullYear() - 1);
      searchIndex.value.actDate.push(startDate);
      searchIndex.value.actDate.push(endDate);
      break;
    case '3년':
      startDate.setFullYear(startDate.getFullYear() - 3);
      searchIndex.value.actDate.push(startDate);
      searchIndex.value.actDate.push(endDate);
      break;
    case '5년':
      startDate.setFullYear(startDate.getFullYear() - 5);
      searchIndex.value.actDate.push(startDate);
      searchIndex.value.actDate.push(endDate);
      break;
    case '전체':
      break;
  }
})
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