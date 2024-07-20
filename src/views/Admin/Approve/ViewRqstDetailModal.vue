<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            봉사 실적 승인
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="d-flex flex-column align-items-center" style="overflow: auto">
            <table id="modalTable">
              <tbody>
                <tr>
                  <td colspan="1">
                    봉사 제목
                  </td>
                  <td colspan="3">
                    <input type="text" class="form-control" readonly v-model="providedData.volProgram.title">
                  </td>
                </tr>
                <tr>
                  <td colspan="1">
                    봉사 기간
                  </td>
                  <td colspan="1">
                    <input type="text" class="form-control" readonly v-model="providedData.volProgram.actDate">
                  </td>
                  <td colspan="1">
                    봉사 시간
                  </td>
                  <td colspan="1">
                    <input type="text" class="form-control" readonly v-model="providedData.volProgram.actTime">
                  </td>
                </tr>
                <tr>
                  <td colspan="1">
                    모집 기관
                  </td>
                  <td colspan="3">
                    <div>
                      <input type="text" class="form-control" readonly v-model="providedData.volProgram.recruitCenter">
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="1">
                    봉사 분야
                  </td>
                  <td colspan="1">
                    <input type="text" class="form-control" readonly v-model="providedData.volProgram.ctg.highCls">
                  </td>
                  <td colspan="2">
                    <input type="text" class="form-control" readonly v-model="providedData.volProgram.ctg.lowCls">
                  </td>
                </tr>
                <tr>
                  <td colspan="1">
                    봉사 지역
                  </td>
                  <td colspan="1">
                    <input type="text" class="form-control" readonly v-model="providedData.volProgram.region.cityName">
                  </td>
                  <td colspan="2">
                    <input type="text" class="form-control" readonly v-model="providedData.volProgram.region.countyName">
                  </td>
                </tr>
                <tr>
                  <td colspan="1">
                    봉사 장소
                  </td>
                  <td colspan="3">
                    <input type="text" class="form-control" readonly v-model="providedData.volProgram.actPlace">
                  </td>
                </tr>
                <tr>
                  <td colspan="1">
                    신청인 ID
                  </td>
                  <td colspan="1">
                    <input type="text" class="form-control" v-model="providedData.memberId" readonly>
                  </td>
                  <td colspan="1">
                    신청인 이름
                  </td>
                  <td colspan="1">
                    <input type="text" class="form-control" v-model="providedData.memberName" readonly>
                  </td>
                </tr>
                <tr>
                  <td colspan="1">
                    담당자명
                  </td>
                  <td colspan="1">
                    <input type="text" class="form-control" v-model="providedData.volProgram.mngName" readonly>
                  </td>
                  <td colspan="1">
                    부서 연락처
                  </td>
                  <td colspan="1">
                    <input type="text" class="form-control" readonly v-model="providedData.volProgram.mngTel">
                  </td>
                </tr>
                <tr>
                  <td colspan="1">
                    신청 내용
                  </td>
                  <td colspan="3">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" readonly v-model="providedData.rqstContent"></textarea>
                  </td>
                </tr>
                <tr>
                  <td colspan="1">
                    증명서류
                  </td>
                  <td colspan="3">
                    <NormalButton text="증명 서류가 없습니다." v-if="providedData.fileOName === ''"/>
                    <HighlightButton text="자원봉사_증명서류.pdf 다운로드" v-if="providedData.fileOName"/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <HighlightButton text="승인" data-bs-dismiss="modal"/>
          <NormalButton text="거부" data-bs-dismiss="modal"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';
import { inject } from 'vue';

const providedData = inject('providedData');
</script>

<style scoped></style>