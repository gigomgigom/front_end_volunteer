<template>
    <div class="info-container">
        <div class="row info-wrapper">
            <dl class="col-md-6">
                <dt>교육기간</dt>
                <dd>2024.03.25 ~ 2024.06.25</dd>
            </dl>
            <dl class="col-md-6">
                <dt>교육시간</dt>
                <dd>14시 0분 ~ 17시 0분</dd>
            </dl>
        </div>
        <div class="row info-wrapper">
            <dl class="col-md-6">
                <dt>모집인원</dt>
                <dd>1 명 / 일</dd>
            </dl>
            <dl class="col-md-6">
                <dt>신청인원</dt>
                <dd>6명</dd>
            </dl>
        </div>
        <div class="row info-wrapper">
            <dl class="col-md-6">
                <dt>모집기간</dt>
                <dd>2024.03.06 ~ 2024.06.20</dd>
            </dl>
            <dl class="col-md-6">
                <dt>모집기관</dt>
                <dd>양평서부청소년문화의집</dd>
            </dl>
        </div>
        <div class="row info-wrapper">
            <dl class="col-md-6">
                <dt>교육센터</dt>
                <dd>전북특별자치도 양평군</dd>
            </dl>
        </div>
        <div class="row info-wrapper">
            <dl class="col-md-12">
                <dt style="width: 15%;">교육장소</dt>
                <dd style="width: 85%;"><span>양평서부청소년문화의집 2층 유스피크닉</span></dd>
            </dl>
        </div>
        <div class="row info-wrapper">
            <dl class="col-md-6">
                <dt>담당자 이름</dt>
                <dd>시맹조</dd>
            </dl>
            <dl class="col-md-6">
                <dt>담당자 연락처</dt>
                <dd>010-2810-4870</dd>
            </dl>
        </div>
        <div class="row info-wrapper">
            <dl class="col-md-12">
                <dt style="width: 15%;">첨부파일</dt>
                <dd style="width: 85%;"><span>양평서부청소년문화의집 2층 유스피크닉오는길.pdf</span></dd>
            </dl>
        </div>
    </div>
    <div class="board-body">
        <div class="body-text">
            <pre>
8세-19세의 청소년이 자유롭게 이용할 수 있는 놀이와 휴식의 공간 유스피크닉에서
청소년 자원봉사자를 모집합니다.

기간 : 2024년 3월 ~ 2024년 12월
*매월 2회씩 진행
시간 : 평일 14시-17시
*시간 및 요일은 개인 별 조율이 가능합니다.
대상 : 13세~19세 청소년

봉사 주요 내용
1) 청소년 여가 공간 이용 안내
 - 이용 시설 안내(닌텐도, 스팀, 노래방, 오락기 등)
 - 움직이는 작업장 이용 안내
 - 와이스낵(탕비실) 이용 안내
 - 월 1회 이벤트 보조 등
      </pre>
        </div>
        <KakaoMap />
    </div>
</template>

<script setup>
import KakaoMap from './KakaoMap.vue';
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.info-container {
  border-top: 2px solid black;
  border-left: 2px solid silver;
  border-right: 2px solid silver;
}

.info-wrapper {
  border-bottom: 1px solid silver;
}

.board-body {
  border-left: 2px solid silver;
  border-right: 2px solid silver;
  border-bottom: 2px solid black;
}

dl {
  display: flex;
  border-bottom: 1px solid silver;
}

dt {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 40px;
  background-color: rgb(238, 238, 238);
  border-right: 2px solid silver;
}

dd {
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 15px;
  width: 70%;
}

pre {
  padding-left: 30px;
  padding-top: 20px;
}
</style>