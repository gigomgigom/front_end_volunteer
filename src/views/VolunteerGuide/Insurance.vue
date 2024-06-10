<template>
    <div class="body">
        <h2 class="main-title"><b>{{ maintitle }}</b></h2>
        <hr>
        <h5 class="subtitle">{{ subtitle }}</h5>
        <p></p>
        <section class="what-is-insurance">
            <span style="margin-bottom: 50px;">
                <b>자원봉사 보험이란,</b>
                자원봉사활동기본법, 사회복지사업법, 청소년활동진흥법, 재난 및 안전관리기본법 등에 근거하여
                “자원봉사활동 중” 발생할 수 있는 사고위험으로부터 자원봉사자를 보호하기 위해 한국사회복지협의회(VMS), 한국청소년활동진흥원(DOVOL)에서 자원봉사자분들에게 제공하는 보험제도입니다.
            </span>
            <div class="video-wrap">
                <iframe style="margin-bottom: 30px; margin-top: 30px;" width="560" height="315" src="https://www.youtube.com/embed/fQfskAT60gE?si=d1NHqyZTxCMvRlnv"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>

        <section class="coverage-details">
            <ul class="ul-procedure">
                <li>
                    <img src="@/assets/Insurance/next-bold.png" width="12px" class="li-img" />
                    <strong>적용 대상: </strong> 보장기간 내 SOCIAL PULSE, VMS, DOVOL 사이트를 통해 봉사활동에 참여한 자원봉사자
                </li>
                <li>
                    <img src="@/assets/Insurance/next-bold.png" width="12px" class="li-img" />
                    <strong>보장 대상: </strong> 상기 자원봉사 포털 사이트를 통해 참여한 자원봉사활동 중 발생한 사고에 대해 보장
                </li>
                <li> <img src="@/assets/Insurance/next-bold.png" width="12px" class="li-img" />
                    사고발생으로부터 2년 이내 청구가능, 매년 보장범위 및 금액은 상이할 수 있음. 1차 청구(치료) 완료 후 추가치료 발생 시 재청구 가능
                </li>
            </ul>
        </section>

        <section class="claim-procedure">
            <h3 style="margin-bottom: 20px;"><b>보험금 청구 진행 절차</b></h3>
            <ul class="ul-procedure">
                <li>
                    <img src="@/assets/Insurance/next-bold.png" width="12px" class="li-img" />
                    자원 봉사자: 해당기관으로 사고사실 전달. 보험 청구 서류준비 *3대필수서류, 해당 담보 필요서류
                </li>
                <li>
                    <img src="@/assets/Insurance/next-bold.png" width="12px" class="li-img" />
                    보험담당자 : 접수서류 및 추가서류 확인
                </li>
                <li>
                    <img src="@/assets/Insurance/next-bold.png" width="12px" class="li-img" />
                    보험사 : 보험금 신청 접수 및 보험금 지급 안내(자원봉사자, 각 기관 보험업무담당자)
                </li>
            </ul>
        </section>

        <div class="insurance-images">
            <img src="@/assets/Insurance/insurance1.jpg" alt="Image 1" width="350px" style="margin: 50px;">
            <img src="@/assets/Insurance/insurance2.jpg" alt="Image 2" width="350px">
        </div>
    </div>
</template>
  
<script setup>
import NavDetailRow from "@/components/NavDetailRow.vue";
import NavDetailCol from "@/components/NavDetailCol.vue";

const maintitle = '자원봉사 종합보험';
const subtitle = '자원봉사자 분들에게 제공되는 종합 보험 안내입니다.'



</script>
  
<style scoped>
.subtitle {
    margin-bottom: 25px;
    font-weight: bold;
}

img:hover {
    transform: scale(1.09);
    /* 이미지 확대 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    /* 그림자 효과 */
}

/* insurance-images:hover로 하면 두개가 동시에 확대됨 */

.video-container {
    position: relative;
    height: 0;
    padding-bottom: 56.25%;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}


.content-title {
    font-weight: bold;
    font-size: 25px;
    color: black;
}

.body {
    width: 845px;
    padding: 60px 0 60px 40px;
}

.ul-introduction {
    list-style: none;
}

.ul-procedure {
    list-style: none;
    /* 기본 점 없애기 */
    padding: 0;
    margin: 0;
    margin-bottom: 50px;
}

.ul-procedure li {
    display: flex;
    align-items: center;
    /* 이미지와 텍스트를 수평으로 정렬 */
    margin-bottom: 10px;
    /* 항목 사이에 여백 추가 */
}


.ul-procedure li img {
    margin-right: 10px;
    /* 이미지와 텍스트 사이에 여백 추가 */
    margin-left: 20px;
}


.insurance-images {
    float: left;
}

.item-image {
    max-width: 280px;
    margin-right: 30px;
    /* 이미지와 텍스트 사이 여백 */
    transition: transform 0.3s, box-shadow 0.3s;
    /* 호버 효과에 대한 부드러운 전환 */
}

.item-image:hover {
    transform: scale(1.08);
    /* 이미지 확대 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    /* 그림자 효과 */
}

.content-link {
    text-decoration: none;
    /* 밑줄 제거 */
}

.text {
    flex: 1;
    /* 텍스트가 남은 공간을 채우도록 함 */
}



.coverage-details {
    margin-bottom: 100px;
}</style>
  