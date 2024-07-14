<template>
    <div>
        <slot name="createInfo">
                    <!--봉사제안, QNA 소개-->
        </slot>

        <div class="row">
            <div class="col-sm-10">
                [전체 <span class="highlight">{{ data.pager.totalCount }}</span>건,
                현재페이지 <span class="highlight">{{ data.pager.pageNo }}</span>/{{ data.pager.totalPage }}]
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
                    <tbody v-for="(notice, index) in data.noticeList" :key="index">
                        <tr>
                            <td>{{ notice.no }}</td>
                            <td @click="moveDetail(notice.no)" style="cursor: pointer;" class="hover-bold">{{notice.title}}</td>
                            <td>{{ notice.writer }}</td>
                            <td>{{ notice.date }}</td>
                            <td>{{ (notice.adminReply != null) ? "완료" : "미완료"}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import {  ref } from 'vue';
const emit = defineEmits(["moveDetail"]);
import { inject } from "vue";

const moveDetail = inject('moveDetail');
const data = inject('responseData');






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
.propose_board{
    font-family: 'Noto Sans Korean', '돋움', Arial, sans-serif;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    border-spacing: 0;
    border-top: 2px solid #333;
    border-bottom: 1px solid #333;
}
.propose_board th{
    padding: 13px 15px;
   border: 1px solid #333;
    border-bottom: 1px solid #333;
    background: #eee;
    color: #333;
    font-size: 15px;
    text-align: center;
    font-weight: 500;
}
.propose_board td{
    padding: 13px 15px;
    border: 1px solid #333;
    background: #fff;
    color: #757575;
    font-size: 15px;
    text-align: center;
    font-weight: 400;
    letter-spacing: -0.025em;
    word-break: break-all;
}
.hover-bold{
    font-weight: normal;
    transition: font-weight 0.3s; 
}
</style>