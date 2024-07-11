<template>
  <div class="modal" tabindex="-1">
      <div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">
                      <!-- slot -->
                      <slot name="header">슬롯 제목</slot>
                  </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <div class="d-flex flex-column align-items-center" style="overflow: auto">
                      <table id="modalTable">
                          <tbody>
                              <tr>
                                  <td colspan="1">
                                      교육 제목
                                  </td>
                                  <td colspan="3">
                                      <input type="text" v-model="providedData.title" class="form-control">
                                  </td>
                              </tr>
                              <tr>
                                  <td colspan="1">
                                      교육 기간
                                  </td>
                                  <td colspan="1">
                                      <VueDatePicker range :enable-time-picker="false" v-model="providedData.eduDate"/>
                                  </td>
                                  <td colspan="1">
                                      교육 시간
                                  </td>
                                  <td colspan="1">
                                      <VueDatePicker time-picker disable-time-range-validation range
                                          :show-minute="false" placeholder="Select Time" v-model="providedData.eduTime"/>
                                  </td>
                              </tr>
                              <tr>
                                  <td colspan="1">
                                      모집 기관
                                  </td>
                                  <td colspan="3">
                                      <div>
                                          <input type="text" class="form-control" v-model="providedData.recruitCenter">
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td colspan="1">
                                      모집 기간
                                  </td>
                                  <td colspan="1">
                                      <VueDatePicker range :enable-time-picker="false" v-model="providedData.recruitDate"/>
                                  </td>
                                  <td colspan="1">
                                      모집 인원
                                  </td>
                                  <td colspan="1">
                                      <input type="number" class="form-control" id="vol-title" v-model="providedData.recruitCnt">
                                  </td>
                              </tr>
                              <tr>
                                  <td colspan="1">
                                      교육 센터
                                  </td>
                                  <td colspan="1">
                                      <select class="form-select" v-model="providedData.city">
                                          <option :value="0">전체</option>
                                          <option v-for="(city, index) in regionList" :key="index"
                                              :value="city.cityCode">{{ city.cityName }}</option>
                                      </select>
                                  </td>
                                  <td colspan="2">
                                      <select id="county" class="form-select" v-model="providedData.county">
                                          <option :value="0">전체</option>
                                          <option v-for="(county, index) in countyList" :key="index"
                                              :value="county.countyCode">{{ county.countyName }}</option>
                                      </select>
                                  </td>
                              </tr>
                              <tr>
                                  <td colspan="1">
                                      교육 장소
                                  </td>
                                  <td colspan="3">
                                      <input type="text" class="form-control" v-model="providedData.eduPlace">
                                  </td>
                              </tr>
                              <tr>
                                  <td colspan="1">
                                      주소
                                  </td>
                                  <td colspan="3">
                                      <input type="text" class="form-control" v-model="providedData.location">
                                  </td>
                              </tr>
                              <tr>
                                  <td colspan="1">
                                      담당자명
                                  </td>
                                  <td colspan="1">
                                      <input type="text" class="form-control" v-model="providedData.mngName">
                                  </td>
                                  <td colspan="1">
                                      부서 연락처
                                  </td>
                                  <td colspan="1">
                                      <input type="text" class="form-control" v-model="providedData.mngTel">
                                  </td>
                              </tr>
                              <tr>
                                  <td colspan="1" rowspan="3">
                                      내용
                                  </td>
                                  <td colspan="3" rowspan="3">
                                      <textarea class="form-control" v-model="providedData.content"
                                          rows="3"></textarea>
                                  </td>
                              </tr>

                          </tbody>
                      </table>
                      <div class="mt-5">
                          <label for="formFile" class="form-label">첨부 파일</label>
                          <input class="form-control" type="file" id="battachInput" @change="battachValidate($event)">
                      </div>
                      <div class="mt-3">
                          <label for="formFile" class="form-label">이미지 파일</label>
                          <input class="form-control" type="file" id="imageInput" accept="image/*"
                                @change="imageValidate($event)">
                      </div>
                      <div class="mt-1 d-flex justify-content-center">
                          <img class="w-100" src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" id="thumbnailImg">
                      </div>
                  </div>
              </div>
              <div class="modal-footer">
                  <slot name="footer">
                      <!-- slot -->
                      <button type="button" class="btn btn-info btn-sm" data-bs-dismiss="modal">확인</button>
                      <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">닫기</button>
                  </slot>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import { inject, watch, ref } from 'vue';
import { useStore } from 'vuex';

const providedData = inject('providedData');

const store = useStore();
const regionList = store.state.regionCode.regionList;
const countyList = ref([]);
// 도시 분야 선택시 호출
function selectCity(event) {
  const cityCode = Number(event.target.value);
  countyList.value = findCounty(cityCode);
  document.getElementById("county").selectedIndex = 0;
}
// 하위 분야 리스트를 찾아오기
function findCounty(cityCode) {
  for (let city of regionList) {
      if (city.cityCode === cityCode) {
          return city.county;
      }
  }
  return [];
}

//이미지 파일 유효성 검사
function imageValidate(event) {
    const file = event.target.files[0];
    if (file) {
        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (event.target.files.length > 1) {
            alert('파일은 한개만 선택가능합니다.');
            event.target.value = '';
        } else if (!validImageTypes.includes(file.type)) {
            alert('이미지 파일만 업로드 가능합니다.');
            event.target.value = '';
        } else {
            console.log(event.target.result);
            var reader = new FileReader();
            reader.onload = function (event) {
                document.getElementById('thumbnailImg').setAttribute("src", event.target.result);
            };
            reader.readAsDataURL(file);
        }
    }
}
//첨부 파일 유효성 검사
function battachValidate(event) {
    const file = event.target.files[0];
    if(file) {
        if(event.target.files.length > 1) {
            alert('파일은 한개만 선택가능합니다.');
            event.target.value = '';
        }
    }
}

watch(() => providedData.value.city, (newCity, oldCity) => {
    countyList.value = findCounty(newCity);
    if(providedData.value.isExternal) {
        providedData.value.isExternal = false;
    } else {
        providedData.value.county = 0;
    }
})

</script>

<style scoped>
.modal-body>div>div {
  width: 90%;
}
table {
  width: 90%;
}
td {
  text-align: center;
}
.modal-dialog {
  overflow-y: initial !important
}
</style>