<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">회원 상세정보</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="d-flex justify-content-center">
            <table>
              <tbody>
                <tr>
                  <td colspan="1">
                    <span>사용자ID</span>
                  </td>
                  <td colspan="3">
                    <input type="text" class="form-control" value="tlarlrma" readonly>
                  </td>
                </tr>
                <tr>
                  <td colspan="1">
                    <span>이름</span>
                  </td>
                  <td colspan="3">
                    <input type="text" class="form-control" value="심영조" readonly>
                  </td>
                </tr>
                <tr>
                  <td colspan="1">
                    <span>생년월일</span>
                  </td>
                  <td colspan="3">
                    <input type="text" class="form-control" value="2000.01.07" readonly>
                  </td>
                </tr>
                <tr>
                  <td colspan="1">
                    <span>휴대폰번호</span>
                  </td>
                  <td colspan="3">
                    <input type="text" class="form-control" value="01028104870" readonly>
                  </td>
                </tr>
                <tr>
                  <td colspan="1">
                    <span>E-mail</span>
                  </td>
                  <td colspan="3">
                    <input type="text" class="form-control" value="tlarlrma@naver.com" readonly>
                  </td>
                </tr>
                <tr>
                  <td colspan="1">
                    <span>소속센터</span>
                  </td>
                  <td colspan="3">
                    <input type="text" class="form-control" value="인천광역시 서구 자원봉사센터" readonly>
                  </td>
                </tr>
                <tr>
                  <td colspan="1">
                    <span>희망분야</span>
                  </td>
                  <td colspan="1">
                    <input type="text" class="form-control" value="국제협력.해외봉사" readonly>
                  </td>
                  <td colspan="2">
                    <input type="text" class="form-control" value="자원봉사기타교육.관리자교육" readonly>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <HighlightButton text="닫기" data-bs-dismiss="modal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HighlightButton from '@/components/Common/HighlightButton.vue';

</script>

<style scoped>
table {
  width: 80%;
}

input {
  text-align: center;
}
</style>