<template>
  <VolPrgmList class="mt-5">
    <template v-slot:body>
      <div class="row_container mt-3 mb-3" v-for="(vol, index) in volvol" :key="index">
        <div class="row">
          <div class="col-sm-12" style="padding: 0;">
            <span style="font-weight: bold; font-size: 18px;">
              제목 데이터
            </span>
          </div>
        </div>
        <div class="row" style="font-size: 14px;">
          <div class="col-sm-10 mt-1" style="padding: 0;">
            <span>[모집기간]
              <span style="color: gray;">
                모집기간 데이터
              </span>
            </span>
            <span class="ms-3">[봉사기간]
              <span style="color: gray;">
                봉사기간 데이터
              </span>
            </span>
            <span class="ms-3">[봉사시간]
              <span style="color: gray;">
                봉사시간 데이터
              </span>
            </span>
          </div>
          <div class="col-sm-2 ">
            <span>모집인원 : n명</span>
          </div>
        </div>
        <div class="row" style="font-size: 14px; ">
          <div class="col-sm-10 " style="padding: 0;">
            <span>[등록기관]
              <span style="color: gray;">
                등록기관 데이터
              </span>
            </span>
            <span class="ms-3">[모집기관]
              <span style="color: gray;">
                모집기관 데이터
              </span>
            </span>
          </div>
          <div class="col-sm-2">
            <span>신청인원 : n명</span>
          </div>
        </div>
        <div class="row" style="font-size: 14px; border-bottom: 1px solid gray; padding-bottom: 10px; ">
          <div class="col-sm-12" style="padding: 0; color: #4e76ad;">
            <span>[분류]
              <span>
                분류 명
              </span>
            </span>
          </div>
        </div>
      </div>
    </template>
  </VolPrgmList>
</template>

<script setup>
import VolPrgmList from '@/components/VolPrgmList.vue';
import { ref } from 'vue';
const volvol = ref([
    { no: 1, title: "서구치매안심센터 치매가족프로그램 활동 지원(치매안심센터 건담분소)", registerCenter: "asdf 수원시", recruitCenter: "인천서구육아종합지원센터", recruitDate: "2012.02.10 - 2012.02.11", volDate: "2012.03.12 - 2012.03.16", volTime: "13:00 - 17:00", classification: "생활편의지원 > 활동보조" },
    { no: 1, title: "서구치매안심센터 치매가족프로그램 활동 지원(치매안심센터 건담분소)", registerCenter: "asdf 수원시", recruitCenter: "인천서구육아종합지원센터", recruitDate: "2012.02.10 - 2012.02.11", volDate: "2012.03.12 - 2012.03.16", volTime: "13:00 - 17:00", classification: "생활편의지원 > 활동보조" },
    { no: 1, title: "서구치매안심센터 치매가족프로그램 활동 지원(치매안심센터 건담분소)", registerCenter: "asdf 수원시", recruitCenter: "인천서구육아종합지원센터", recruitDate: "2012.02.10 - 2012.02.11", volDate: "2012.03.12 - 2012.03.16", volTime: "13:00 - 17:00", classification: "생활편의지원 > 활동보조" },
    { no: 1, title: "서구치매안심센터 치매가족프로그램 활동 지원(치매안심센터 건담분소)", registerCenter: "asdf 수원시", recruitCenter: "인천서구육아종합지원센터", recruitDate: "2012.02.10 - 2012.02.11", volDate: "2012.03.12 - 2012.03.16", volTime: "13:00 - 17:00", classification: "생활편의지원 > 활동보조" },
    { no: 1, title: "서구치매안심센터 치매가족프로그램 활동 지원(치매안심센터 건담분소)", registerCenter: "asdf 수원시", recruitCenter: "인천서구육아종합지원센터", recruitDate: "2012.02.10 - 2012.02.11", volDate: "2012.03.12 - 2012.03.16", volTime: "13:00 - 17:00", classification: "생활편의지원 > 활동보조" },
]);
</script>

<style scoped></style>