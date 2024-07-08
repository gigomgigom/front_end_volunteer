<template>
  <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">실적 승인 요청</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="form-group mb-4">
                <label for="content" class="w-25">신청 내용:</label>
                <textarea class="w-75" id="content" rows="6" placeholder="신청내용 작성" v-model="content"></textarea>
            </div>
            <div class="form-group">
                <label for="file" class="w-25">첨부 파일:</label>
                <input type="file" class="w-75" id="file" ref="attachFile">
            </div>
        </div>
        <div class="modal-footer">
          <HighlightButton text="요청하기" @buttonClick="requestPerform()"/>
          <NormalButton text="닫기" data-bs-dismiss="modal"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';
import volParticipateAPI from '@/apis/volParticipateAPI';
import { ref, watch } from 'vue';
import router from '@/router';

const content = ref('');
const attachFile = ref(null);
let prop = defineProps(['targetProgramNo']);

//폼데이터 생성
async function requestPerform() {
  const formData = new FormData();
  formData.append("programNo", prop.targetProgramNo);
  formData.append("requestContent", content.value);

  if(attachFile.value.files.length != 0) {
    formData.append("battachFile", attachFile.value.files[0]);
  }
  try {
    //서버 통신
    const response = await volParticipateAPI.requestVolPerform(formData);
    if(response.data.result === 'success') {
      alert('성공적으로 요청하였습니다.');
      router.go('/Details/MyPage/VolApplDetails/ViewApplList');
    } else {
      alert('서버에서 오류가 발생했습니다. 잠시후 다시 요청해주십시오.');
    }
  } catch(error) {
    console.log('에러사유: ', error);
  }
}
//선택을 했을 때 input란에 입력한 내용을 초기화한다.
watch(prop.targetApplDetail, ()=> {
  console.log('타겟 변경 감지', prop.targetApplDetail.memberId);
  content.value = '';
  attachFile.value.value = '';
})

</script>

<style scoped>
.form-group {
  display: flex;
  width: 100%;
}
</style>