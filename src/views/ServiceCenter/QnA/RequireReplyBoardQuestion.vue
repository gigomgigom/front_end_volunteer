<template>
  <RequireReplyBoard>
    <template v-slot:createInfo>
      <div class="row" style="border: 1px solid black; width: 100%; margin:auto; margin-bottom: 30px;"><!--슬롯으로 뺄 예정-->
        <div class="col-sm-12" style="font-size: 14px; color: #666; padding-top: 14px; padding-bottom: 14px;">
          <div class="cc">
            <span class="bb" style="font-weight: bold;">이곳은 자원봉사자의 궁금한 사항을 문의를 하는 곳 입니다.</span>
            <div style="padding-left: 12px; font-weight: bold;">글쓰기 전에 먼저 자주하는질문 게시판을 보시면 빠르게 확인하실 수 있습니다.</div>
          </div>
          <div class="cc">
            <span class="bb"> 자원봉사 센터관리자의 업무관련 문의는 관리자 전용 업무시스템을 이용해 문의 해주시기바랍니다.</span>
          </div>
          <div class="cc">
            <span class="bb"> Social Pulse는 실적등록기관이 아닙니다. 자원봉사 실적관련문의는 해당 자원봉사센터에 문의하시기 바랍니다.</span>
          </div>
          <div class="cc">
            <span class="bb">
              자원봉사 질문과답변에 관련없거나 목적에 맞지 않는 내용의 게시물은 예고 없이 삭제되니 이점 양지하시길 바랍니다.
            </span>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:createButton>
      <HighlightButton @buttonClick="writeBoard" text="질문하기"
        style="font-size: 15px; padding: 5px 20px; width: 100%; margin-bottom: 5px;" />
    </template>
  </RequireReplyBoard>
</template>

<script setup>
import RequireReplyBoard from '@/components/RequireReplyBoard.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import { useRouter } from 'vue-router';
import { provide } from 'vue';
const router = useRouter();

provide("moveDetail", moveDetail);
function writeBoard() {
  router.push("/Details/ServiceCenter/QNA/WriteQna")
}
function moveDetail(data) {
  router.push(`/Details/ServiceCenter/QNA/ViewQnaDetail?boardNo=${data}`);
}

</script>

<style scoped>
.bb {
  padding: 0 0 0 12px;

  background: url("@/assets/ico_search.png") center left no-repeat;
}

.cc {
  margin-bottom: 5px;
}
</style>