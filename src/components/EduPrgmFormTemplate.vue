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
                                      <input type="text" class="form-control" id="vol-title">
                                  </td>
                              </tr>
                              <tr>
                                  <td colspan="1">
                                      교육 기간
                                  </td>
                                  <td colspan="1">
                                      <VueDatePicker v-model="actDate" range :enable-time-picker="false" />
                                  </td>
                                  <td colspan="1">
                                      교육 시간
                                  </td>
                                  <td colspan="1">
                                      <VueDatePicker v-model="actTime" time-picker disable-time-range-validation range
                                          :show-minute="false" placeholder="Select Time" />
                                  </td>
                              </tr>
                              <tr>
                                  <td colspan="1">
                                      모집 기관
                                  </td>
                                  <td colspan="3">
                                      <div>
                                          <input type="text" class="form-control">
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td colspan="1">
                                      모집 기간
                                  </td>
                                  <td colspan="1">
                                      <VueDatePicker v-model="recruitDate" range :enable-time-picker="false" />
                                  </td>
                                  <td colspan="1">
                                      모집 인원
                                  </td>
                                  <td colspan="1">
                                      <input type="number" class="form-control" id="vol-title">
                                  </td>
                              </tr>
                              <tr>
                                  <td colspan="1">
                                      교육 센터
                                  </td>
                                  <td colspan="1">
                                      <select class="form-select" @change="selectCity($event)">
                                          <option selected>전체</option>
                                          <option v-for="(city, index) in regionList" :key="index"
                                              :value="city.cityCode">{{ city.cityName }}</option>
                                      </select>
                                  </td>
                                  <td colspan="2">
                                      <select id="county" class="form-select">
                                          <option selected>전체</option>
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
                                      <input type="text" class="form-control">
                                  </td>
                              </tr>
                              <tr>
                                  <td colspan="1">
                                      담당자명
                                  </td>
                                  <td colspan="1">
                                      <input type="text" class="form-control">
                                  </td>
                                  <td colspan="1">
                                      부서 연락처
                                  </td>
                                  <td colspan="1">
                                      <input type="text" class="form-control">
                                  </td>
                              </tr>
                              <tr>
                                  <td colspan="1" rowspan="3">
                                      내용
                                  </td>
                                  <td colspan="3" rowspan="3">
                                      <textarea class="form-control" id="exampleFormControlTextarea1"
                                          rows="3"></textarea>
                                  </td>
                              </tr>

                          </tbody>
                      </table>
                      <div class="mt-5">
                          <label for="formFile" class="form-label">첨부 파일</label>
                          <input class="form-control" type="file" id="formFile">
                      </div>
                      <div class="mt-3">
                          <label for="formFile" class="form-label">이미지 파일</label>
                          <input class="form-control" type="file" id="formFile">
                      </div>
                      <div class="mt-1 d-flex justify-content-center">
                          <img src="@/assets/home.png">
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
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

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
//봉사기간
const actDate = ref();
//모집기간
const recruitDate = ref();
//활동시간
const actTime = ref();
onMounted(() => {
  //봉사기간 초기화
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  actDate.value = [startDate, endDate];
  recruitDate.value = [startDate, endDate];
});
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