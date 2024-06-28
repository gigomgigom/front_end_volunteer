<template>
  <TextHeader title="봉사 신청내역"/>
  <Search/>
  <ViewApplList/>
</template>

<script setup>
import TextHeader from '@/components/Common/TextHeader.vue';
import ViewApplList from './ViewApplList.vue';
import Search from './Search.vue';
import { ref, provide } from 'vue';

 const responseData = ref({
    programList: [],
    pager: {
        numOfRows: 0, //페이지당 결과 수
        pageNo: 0, //현재 페이지번호
        totalCount: 0, //검색결과 총 갯수
        totalPage: 0, //페이지 총 갯수
        pageCntPerGroup: 0, //그룹당 페이지 갯수
        groupNo: 0, //현재 그룹번호
        groupCount: 0, //총 그룹 갯수
        startPageNo: 0, //현재 첫 페이지번호
        endPageNo: 0, //현재 끝 페이지번호
        pageNoList: []
    }
});
provide('responseData', responseData);
</script>

<style scoped>

</style>