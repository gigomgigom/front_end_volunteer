<template>
    <TextHeader class="mb-3" title="이용 방법" />
    <div class="container" style="padding: 0;">
        <h3 class="first_text">1365와 함게하는 행복한 나눔 생활의 시작</h3>
        <div class="qna">
            <div class="qna_inner_box">
                <ul>
                    <li class="qna_list">
                        1365 자원봉사 포털은 그 동안 개별적으로 이루어지던 전국의 자원봉사 정보를 한곳에 모아
                        다양한 자원봉사 정보 검색은 물론 신청부터 실적 확인까지 원스톱으로 제공해 드리고 있습니다.
                        1365 자원봉사 포털에 가입하면 전국단위 자원봉사 정보 및 조회 - 신청 - 실적 확인이 가능하며
                        연계기관의 연계를 통한 실적 확인 및 확인서를 직접 발급 받으실 수 있는 서비스를 제공합니다.
                    </li>
                </ul>
            </div>
        </div>
        <h3 class="second_text">회원가입</h3>
        <div class="guide_list">
            <ul>
                <li>
                    <img src="" alt="">
                    <span class="num">1</span>
                    <span class="tx">약관 및 개인정보보호 정책 동의</span>
                </li>
                <li>
                    <img src="" alt="">
                    <span class="num">2</span>
                    <span class="tx">봉사실적 연계를 위한 주민등록처리 동의<br><span> (선택사항)</span></span>
                </li>
                <li>
                    <img src="" alt="">
                    <span class="num">3</span>
                    <span class="tx">본인인증<br>- 세가지 인증수단 중 하나를 선택하여 인증<br><span>(만 14세 미만은 보호자 동의 필수)</span></span>
                </li>
                <li>
                    <img src="" alt="">
                    <span class="num">4</span>
                    <span class="tx">회원정보 입력</span>
                </li>
                <li>
                    <img src="" alt="">
                    <span class="num">5</span>
                    <span class="tx">첫 화면의 주민등록처리동의를 선택한 경우 <br>실명인증. 저장 버튼 클릭 시 회원가입 완료되며, <br>선택사항 입력 버튼 클릭 시 부가정보
                        입력으로 이동</span>
                </li>
                <li>
                    <img src="" alt="">
                    <span class="num">6</span>
                    <span class="tx">자원봉사활동을 위한 부가정보 입력<span>(선택)</span><br>저장 버튼 클릭 시 회원가입 완료</span>
                </li>
            </ul>
        </div>
        <h3 class="third_text">봉사조회 및 신청</h3>
        <div class="guide_list">
            <ul>
                <li>
                    <img src="" alt="">
                    <span class="num">1</span>
                    <span class="tx">개인봉사참여 메뉴에서 원하는<br>지역/분야/대상을 선택하여 조건별 검색</span>
                </li>
                <li>
                    <img src="" alt="">
                    <span class="num">2</span>
                    <span class="tx">제목을 클릭하여 상세페이지 이동</span>
                </li>
                <li>
                    <img src="" alt="">
                    <span class="num">3</span>
                    <span class="tx">자원봉사활동 내용을 확인 후<br>신청하기 클릭</span>
                </li>
                <li>
                    <img src="" alt="">
                    <span class="num">4</span>
                    <span class="tx">달력에서 원하는 날짜를 선택 후<br>자원봉사활동 신청</span>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script setup>
import TextHeader from "@/components/Common/TextHeader.vue";
</script>

<style scoped>
.first_text {
    position: relative;
    padding: 10px 20px 20px;
    font-size: 24px;
    font-weight: 550;
    line-height: 100%;
    color: #333;
    letter-spacing: -0.025em;
}

.first_text:after {
    content: '';
    display: block;
    position: absolute;
    width: 23px;
    height: 22px;
    top: 12px;
    left: 0;
    overflow: hidden;
    background: url("@/assets/lv2.png") 0 0 no-repeat;
}

.second_text {
    position: relative;
    padding: 10px 20px 20px;
    font-size: 24px;
    font-weight: 550;
    line-height: 100%;
    color: #333;
    letter-spacing: -0.025em;
}

.second_text::after {
    content: '';
    display: block;
    position: absolute;
    width: 23px;
    height: 22px;
    top: 12px;
    left: 0;
    overflow: hidden;
    background: url("@/assets/lv2.png") 0 0 no-repeat;
}

.qna_inner_box {
    width: 100%;
    position: relative;
    margin-bottom: 15px;
    padding: 20px 10px 20px 0px;
    border: 1px solid #dee3eb;
    background: #fff;

}

.qna_list {
    list-style: none;
    line-height: 22px;
    color: #666;
    font-family: 'Noto Sans Korean', '돋움', Arial, sans-serif;
    font-size: 14px;
}

.qna_list::after {
    content: '';
    display: block;
    position: absolute;
    width: 12px;
    height: 6px;
    top: 28px;
    left: 20px;
    overflow: hidden;
    background: url("@/assets/qna_list.png") 0 0 no-repeat;
}

.guide_list li:nth-child(1n-1) {
    margin-right: 2%;
}

.guide_list li {
    position: relative;
    float: left;
    width: 31%;
    list-style: none;
}

.guide_list li img {
    display: inline-block;
    width: 100%;
    max-width: 270px;
    height: 185px;
    /* min-width: 185px; */
    border: 1px solid #dee3eb;
    border-radius: 10px;
    background: #ccc;
}

.guide_list li .num {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 27px;
    height: 27px;
    line-height: 27px;
    /* margin: 0 13px 0 3px; */
    border-radius: 14px;
    text-align: center;
    font-size: 14px;
    background: #666;
    color: #fff;
}

.guide_list li span {
    display: inline-block;
    vertical-align: top;
    color: #333;
}

.guide_list li .tx {
    display: block;
    margin: 10px 0;
    text-align: center;
    letter-spacing: -0.060em;
    font-family: 'Noto Sans Korean', '돋움', Arial, sans-serif;
    font-size: 12px;

}

.guide_list li span {
    display: inline-block;
    vertical-align: top;
    color: #333;
}

.third_text {
    position: relative;
    padding: 10px 20px 20px;
    font-size: 24px;
    font-weight: 550;
    line-height: 100%;
    color: #333;
    letter-spacing: -0.025em;
}

.third_text::after {
    content: '';
    display: block;
    position: absolute;
    width: 23px;
    height: 22px;
    top: 12px;
    left: 0;
    overflow: hidden;
    background: url("@/assets/lv2.png") 0 0 no-repeat;
}

.guide_list::after {
    clear: both;
    display: block;
    content: '';
}

</style>