<template>
    <TextHeader class="mb-3" title="1365 자원봉사포털 소개" />
    <div>
        <h4 class="ms-2 mb-3"><b> 🔶자원봉사란?</b></h4>
        <h6 class="ms-3">라틴어 voluntas에서 유래</h6>
        <h6 class="row ms-3">volo(의지)</h6>
        <h6 class="row ms-3">1) 영어의 will</h6>
        <h6 class="row ms-3">2) voluntus라는 말 생성</h6>
        <h6 class="row ms-3 mb-3">3) 의미: 자발적인 것, 자주적 · 임의적 자유의</h6>
        <h6 class="row ms-3">자원봉사 활동</h6>
        <h6 class="row ms-3">개인 또는 단체가 지역사회·국가 및 인류사회를 위하여 대가 없이 자발적으로 시간과 노력을 제공하는 행위</h6>
    </div>

    <div>
        <h4 class="ms-2 mb-3 mt-4"><b> 🔶자원봉사의 특성</b></h4>
        <div style="border :1px solid gray; padding-right: 30px; margin-left: 10px;  padding-left: 10px;">
            <h6 class="row mt-2"><b>▪️ 자발성: 자신의 의사로써 시간과 재능, 경험을 도움이 필요한 이웃과 지역사회 공동체 형성에 
                아무런 대가 없이 활동하는 것</b></h6>
            <h6 class="row"><b>▪️ 무보수성: 경제적 보상과 관련되는 것으로 자원봉사활동에 대해 금전적 대가를 받지 않는 것</b></h6>
            <h6 class="row"><b>▪️ 공익성 : 이웃과 지역사회 내에 산재하고 있는 문제를 해결하여 삶의 질을 향상시키기 위하여 활동하는 것</b></h6>
            <h6 class="row"><b>▪️ 지속성: 자원봉사활동에 참여하게 되면 일정기간 동안 지속성과 정기적으로 봉사활동에 참여하는 것</b></h6>
        </div>
        
    </div>

    <div>
        <h4 class="ms-2 mb-3 mt-4"><b> 🔶봉사자의 자세</b></h4>
        <h6 class="row ms-3">· 자원봉사 활동을 하는 목적을 분명히 알고 처음의 순수함을 돌아보는 자세를 갖습니다.</h6>
        <h6 class="row ms-3">· 매사에 긍정적인 생각을 가지고 타인에게 모범을 보일 수 있는 성품을 지닐 수 있도록 노력합니다.</h6>
        <h6 class="row ms-3">· 다른 사람들을 보살피고 맡은 바 직책을 충실히 이행합니다.</h6>
        <h6 class="row ms-3">· 자신의 말이나 행동이 어떠한 영향을 미치는지 항상 생각하고 신중한 자세로 임합니다.</h6>
        <h6 class="row ms-3 mb-3">· 활동에 대한 책임감을 가지고 봉사활동을 시작합니다.</h6>
        <h6 class="row ms-3">· 활동은 성실히 하며, 활동 시간에 대한 약속을 꼭 지킵니다.</h6>
        <h6 class="row ms-3">· 자원봉사자는 양심적이어야 합니다.</h6>
        <h6 class="row ms-3">· 자원봉사자는 끊임없이 공부하며 배우는 자세를 가져야 합니다.</h6>
    </div>

    <div>
        <h4 class="ms-2 mb-3 mt-4"><b> 🔶봉사 참여 과정</b></h4>
        <img src="@/assets/봉사활동 이미지1.png">
        <h5><b>1️⃣www.1365.go.kr에 접속 </b></h5>
        <h5><b>2️⃣지역, 분야 등 자신의 조건에 맞는 자원봉사를 조회 </b></h5>
        <div class="volunteer-step">
        <h5 class="mb-0 me-5"><b>3️⃣ 자원봉사 상세정보를 꼼꼼히 확인하여 자원봉사 신청</b></h5>
        <button class="btn btn-m ms-3 text-white ms-auto"  style="background-color: orange;"> 
        이용 방법 바로가기</button>
    </div>
    </div>
    <hr/>

    <div style="text-align: center;">
        <h4><b>늘 마음뿐이던 자원봉사!</b></h4>
        <h4><b>이제 1365와 함께 자원봉사의 주인공이 되어보세요!</b></h4>
        <h6 class="row ms-3 mt-3">·내게 꼭 맞는 ‘맞춤형 자원봉사’를 검색할 수 있습니다.</h6>
        <h6 class="row ms-3">·자원봉사 실적관리에서 확인서 발급까지 한번에 해결할 수 있습니다.</h6>
        <h6 class="row ms-3">·자원봉사종합보험을 통해 자원봉사 활동 중 발생할 수 있는 사고위험으로부터 자원봉사자를 보호합니다.</h6>
        </div>
</template>

<script setup>
import TextHeader from "@/components/Common/TextHeader.vue";

</script>

<style scoped>
.row {
    color: dimgray;
}
.volunteer-step {
    display: flex;
    align-items: center;
}


</style>