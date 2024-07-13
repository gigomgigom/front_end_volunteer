<template>
  <RequireReplyBoard>
    <template v-slot:createInfo>
        <div class="row" style="border: 1px solid black; width: 100%; margin:auto; margin-bottom: 30px;"><!--슬롯으로 뺄 예정-->
            <div class="col-sm-12" style="font-size: 14px; color: #666; padding-top: 14px; padding-bottom: 14px;">
                <div class="cc">
                    <span class="bb"> 이곳은 기업·단체가 희망하는 자원봉사활동을 제안하는 곳입니다. (기업·단체 자원봉사활성화를 위해 게시판 신설)</span>
                </div>
                <div class="cc">
                    <span class="bb"> 기업·단체 자원봉사활동 상황을 고려하여 해당 게시판은 임시 운영될 수 있습니다. 양해부탁드립니다.</span>
                </div>
                <div class="cc">
                    <span class="bb"> 해당 게시판을 통해 제안하신 내용은 본인만 열람 가능합니다.</span>
                </div>
                <div class="cc">
                    <span class="bb"> 기타 자원봉사관련 문의는
                        <RouterLink to=""><span style="color: #0064ff; font-weight: bold;">질문과답변</span></RouterLink>이나
                        <RouterLink to=""><span style="color: #0064ff; font-weight: bold;">자주하는질문</span></RouterLink> 게시판을 이용하여 주시기 바랍니다.
                    </span>
                </div>
            </div>
        </div>
    </template>
    <template v-slot:createButton>
        <HighlightButton @buttonClick="writeBoard" text="봉사제안" style="font-size: 15px; padding: 5px 20px; width: 100%; margin-bottom: 5px;"/>
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
  router.push("/Details/Participation/VolProposal/WriteProposal")
}
function moveDetail(data) {
  router.push(`/Details/Participation/VolProposal/ViewVolProposalDetail?boardNo=${data}`);
}


</script>

<style scoped>
.bb {
    padding: 0 0 0 12px;
    
    background: url("@/assets/ico_search.png") center left no-repeat;
}
.cc{
    margin-bottom: 5px;
}
</style>