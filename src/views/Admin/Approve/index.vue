<template>
  <div>
    <TextHeader title="실적 승인" />
    <div class="d-flex">
      <div>
        <h6 class="all">
          [전체 <span class="highlight">{{ requestList.length }}</span>건,
          현재페이지 <span class="highlight">1</span>/2]
        </h6>
      </div>
    </div>
    <div>
      <table class="table caption-top mt-2">
        <thead class="table-primary">
          <tr class="tablehead">
            <th scope="col" class="no-border-left text-center" style="background-color: gainsboro;">승인 여부</th>
            <th scope="col" class="text-center" style="background-color: gainsboro;" colspan="2">프로그램명</th>
            <th scope="col" class="text-center" style="background-color: gainsboro;">사용자ID</th>
            <th scope="col" class="text-center" style="background-color: gainsboro;">이름</th>
            <th scope="col" class="text-center" style="background-color: gainsboro;">휴대폰번호</th>
            <th scope="col" class="no-border-right text-center" style="background-color: gainsboro;">요청일자</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rqst, index) in requestList" :key="index">
            <td class="no-border-left text-center">{{ rqst.rqstStts }}</td>
            <td colspan="2">{{ rqst.programName }}</td>
            <td class="text-center">{{ rqst.userID }}</td>
            <td class="text-center">{{ rqst.userName }}</td>
            <td class="text-center">{{ rqst.tel }}</td>
            <td class="no-border-right text-center">{{ rqst.rqstDate }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="d-flex justify-content-between align-items-center">
      <div class="flex-grow-1 d-flex justify-content-center">
          <ul class="pagination justify-content-center mb-4 ms-5">
            <li class="page-item" v-for="n in 5" :key="n">
              <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
            </li>
          </ul>
      </div>
      <HighlightButton text="글쓰기" @buttonClick="injecter.moveReviewForm()" />
    </div>
  </div>
</template>

<script setup>
import ViewRqstDetailModal from './ViewRqstDetailModal.vue';
import TextHeader from '@/components/Common/TextHeader.vue';

const requestList = [
  {
    rqstStts: '요청',
    programName: '브레이크가 고장난',
    userID: '8ton truck',
    userName: '심영조',
    tel: '01028104870',
    rqstDate: '2024.05.11'
  },
  {
    rqstStts: '요청',
    programName: '브레이크가 고장난',
    userID: '8ton truck',
    userName: '심영조',
    tel: '01028104870',
    rqstDate: '2024.05.11'
  },
  {
    rqstStts: '요청',
    programName: '브레이크가 고장난',
    userID: '8ton truck',
    userName: '심영조',
    tel: '01028104870',
    rqstDate: '2024.05.11'
  },
  {
    rqstStts: '요청',
    programName: '브레이크가 고장난',
    userID: '8ton truck',
    userName: '심영조',
    tel: '01028104870',
    rqstDate: '2024.05.11'
  },
  {
    rqstStts: '요청',
    programName: '브레이크가 고장난',
    userID: '8ton truck',
    userName: '심영조',
    tel: '01028104870',
    rqstDate: '2024.05.11'
  },
  {
    rqstStts: '요청',
    programName: '브레이크가 고장난',
    userID: '8ton truck',
    userName: '심영조',
    tel: '01028104870',
    rqstDate: '2024.05.11'
  },
  {
    rqstStts: '요청',
    programName: '브레이크가 고장난',
    userID: '8ton truck',
    userName: '심영조',
    tel: '01028104870',
    rqstDate: '2024.05.11'
  },
  {
    rqstStts: '요청',
    programName: '브레이크가 고장난',
    userID: '8ton truck',
    userName: '심영조',
    tel: '01028104870',
    rqstDate: '2024.05.11'
  },
  {
    rqstStts: '요청',
    programName: '브레이크가 고장난',
    userID: '8ton truck',
    userName: '심영조',
    tel: '01028104870',
    rqstDate: '2024.05.11'
  },
  {
    rqstStts: '요청',
    programName: '브레이크가 고장난',
    userID: '8ton truck',
    userName: '심영조',
    tel: '01028104870',
    rqstDate: '2024.05.11'
  },
]

</script>

<style scoped>
table {
  table-layout: fixed;
  width: 100%;

}

thead th {
  background-color: #666;
  text-align: left;
  border: 1px solid black;
}

td,
th {
  word-wrap: break-word;
  white-space: normal;
  padding: 12px 8px;
  vertical-align: middle;
  text-align: left;
  border: 1px solid #ddd;
}

.no-border-right {
  border-right: none;
}

.no-border-left {
  border-left: none;
}

.highlight {
  color: coral;
  font-weight: bolder;
}
</style>