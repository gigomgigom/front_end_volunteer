<template>
    <div>
        <slot name="createInfo">
                    <!--봉사제안, QNA 소개-->
        </slot>
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

        <div class="row">
            <div class="col-sm-10" style="">
                [전체 <span class="highlight">25</span>건,
                현재페이지 <span class="highlight">1</span>/3]
            </div>
            <div class="col-sm-2">
                <slot name="createButton">
                    <!--생성버튼 추가-->
                </slot>
            </div>
        </div>
        <div class="row" style="margin-bottom: 30px;">
            <div class="col-sm-12">
                <table class="propose_board">
                    <thead>
                        <tr>
                            <th style="width: 10%;">번호</th>
                            <th style="width: 45%;">제목</th>
                            <th style="width: 15%;">작성자</th>
                            <th style="width: 15%;">작성일</th>
                            <th style="width: 15%;">처리현황</th>
                        </tr>
                    </thead>
                    <tbody v-for="(pro) in proposeList" :key="pro.no">
                        <tr>
                            <td>{{pro.no}}</td>
                            <td>{{pro.title}}</td>
                            <td>{{pro.writer}}</td>
                            <td>{{pro.date}}</td>
                            <td>{{pro.Complete}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import {  ref } from 'vue';

const proposeList = ref([
    { no: 1, title: "서구치매안심센터 치매가족프로그램 활동 지원", writer: "홍길동", date: "2012.02.10", Complete: "미완료" },
    { no: 2, title: "서구치매안심센터 치매가족프로그램 활동 지원", writer: "임걱정", date: "2012.02.10", Complete: "미완료" },
    { no: 3, title: "서구치매안심센터 치매가족프로그램 활동 지원", writer: "주윤발", date: "2012.02.10", Complete: "미완료" },
    { no: 4, title: "서구치매안심센터 치매가족프로그램 활동 지원", writer: "금나라", date: "2012.02.10", Complete: "미완료" },
    { no: 5, title: "서구치매안심센터 치매가족프로그램 활동 지원", writer: "배나라", date: "2012.02.10", Complete: "미완료" },
    
]);

</script>

<style scoped>
.highlight {
    color: coral;
    font-weight: bolder;
}
.bb {
    padding: 0 0 0 12px;
    
    background: url("@/assets/ico_search.png") center left no-repeat;
}
.cc{
    margin-bottom: 5px;
}
.propose_board{
    font-family: 'Noto Sans Korean', '돋움', Arial, sans-serif;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    border-spacing: 0;
    border: 0;
    border-top: 2px solid #333;
    border-bottom: 1px solid #333;
}
.propose_board th{
    padding: 13px 15px;
   
    border-bottom: 1px solid #333;
    background: #eee;
    color: #333;
    font-size: 15px;
    text-align: center;
    font-weight: 500;
}
.propose_board td{
    padding: 13px 15px;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background: #fff;
    color: #757575;
    font-size: 15px;
    text-align: center;
    font-weight: 400;
    letter-spacing: -0.025em;
    word-break: break-all;
}
</style>