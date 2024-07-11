<template>
    <div class="info-container">
        <div class="row info-wrapper">
            <dl class="col-md-6">
                <dt>교육기간</dt>
                <dd>{{ detailData.eduDate }}</dd>
            </dl>
            <dl class="col-md-6">
                <dt>교육시간</dt>
                <dd>{{ detailData.eduTime }}</dd>
            </dl>
        </div>
        <div class="row info-wrapper">
            <dl class="col-md-6">
                <dt>모집인원</dt>
                <dd>{{ detailData.recruitCnt+'명' }}</dd>
            </dl>
            <dl class="col-md-6">
                <dt>신청인원</dt>
                <dd>{{ detailData.applyCnt+'명' }}</dd>
            </dl>
        </div>
        <div class="row info-wrapper">
            <dl class="col-md-6">
                <dt>모집기간</dt>
                <dd>{{ detailData.recruitDate }}</dd>
            </dl>
            <dl class="col-md-6">
                <dt>모집기관</dt>
                <dd>{{ detailData.recruitCenter }}</dd>
            </dl>
        </div>
        <div class="row info-wrapper">
            <dl class="col-md-6">
                <dt>교육센터</dt>
                <dd>{{ detailData.region }}</dd>
            </dl>
        </div>
        <div class="row info-wrapper">
            <dl class="col-md-12">
                <dt style="width: 15%;">교육장소</dt>
                <dd style="width: 85%;"><span>{{ detailData.actPlace }}</span></dd>
            </dl>
        </div>
        <div class="row info-wrapper">
            <dl class="col-md-6">
                <dt>담당자 이름</dt>
                <dd>{{ detailData.mngName }}</dd>
            </dl>
            <dl class="col-md-6">
                <dt>담당자 연락처</dt>
                <dd>{{ detailData.mngTel }}</dd>
            </dl>
        </div>
        <div class="row info-wrapper">
            <dl class="col-md-12">
                <dt style="width: 15%;">첨부파일</dt>
                <dd style="width: 85%;"><span>{{ detailData.fileName }}</span></dd>
            </dl>
        </div>
    </div>
    <div class="board-body">
        <div class="body-text">
            <pre>
{{ detailData.content }}
            </pre>
        </div>
        <KakaoMap v-if="detailData.isDataLoaded"/>
    </div>
</template>

<script setup>
import KakaoMap from './KakaoMap.vue';
import { inject } from 'vue';

const detailData = inject('detail');
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
    margin-bottom: 100px;
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