<template>
    <div class="search-form">
      <p>※ 기간 선택 후 검색하시기 바랍니다.</p>
      <div class="form-container">
        <div class="d-flex flex-row">
          <div class="period-selection">
            <span class="bb">기간</span>
            <input type="date" id="startDate" v-model="startDate" />
            ~
            <input type="date" id="endDate" v-model="endDate" />
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
        <div class="row input-fields">
          <div class="col-sm-6 input-container">
            <span class="bb">봉사명</span>
            <input type="text" id="volunteerName" v-model="volunteerName" />
          </div>
          <div class="col-sm-6 input-container">
            <span class="bb">수요처명</span>
            <input type="text" id="requestName" v-model="requestName" />
          </div>
        </div>
        <div class="buttons">
          <button @click="search">검색</button>
          <button @click="reset">초기화</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        startDate: '',
        endDate: '',
        period: '전체',
        volunteerName: '',
        requestName: ''
      };
    },
    methods: {
      search() {
        // Implement search functionality here
        console.log('Searching with:', {
          startDate: this.startDate,
          endDate: this.endDate,
          period: this.period,
          volunteerName: this.volunteerName,
          requestName: this.requestName
        });
      },
      
      reset() {
        this.startDate = '';
        this.endDate = '';
        this.period = '전체';
        this.volunteerName = '';
        this.requestName = '';
      }
    }
  };
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
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  button {
    padding: 5px 10px;
    background-color: rgb(255, 133, 77);
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:nth-child(2) {
    background-color: #ccc;
    color: black;
  }
  
  .bb {
    min-width: 60px; /* Adjust this width as needed */
    padding: 0 0 0 12px;
    background: url("@/assets/ico_search.png") center left no-repeat;
  }
  </style>
  