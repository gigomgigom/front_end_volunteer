<template>
  <div>
    <TextHeader title="회원 관리"/>
    <div class="d-flex">
      <div>
        <h6 class="all">
          [전체 <span class="highlight">{{ memberList.length }}</span>건,
          현재페이지 <span class="highlight">1</span>/2]
        </h6>
      </div>
    </div>
    <div>
      <table class="table caption-top mt-2">
        <thead class="table-primary">
          <tr class="tablehead">
            <th scope="col" class="no-border-left text-center" style="background-color: gainsboro;">아이디</th>
            <th scope="col" class="text-center" style="background-color: gainsboro;">이름</th>
            <th scope="col" class="text-center" style="background-color: gainsboro;" colspan="2">이메일</th>
            <th scope="col" class="text-center" style="background-color: gainsboro;">전화번호</th>
            <th scope="col" class="no-border-right text-center" style="background-color: gainsboro;">가입일자</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, index) in memberList" :key="index" @click="viewMemberDetailModal.show()">
            <td class="no-border-left text-center">{{ member.ID }}</td>
            <td class="text-center">{{ member.name }}</td>
            <td class="text-center" colspan="2">{{ member.email }}</td>
            <td class="text-center">{{ member.tel }}</td>
            <td class="no-border-right text-center">{{ member.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <ViewMemberDetailModal id="viewMemberDetailModal"/>
  </div>
</template>

<script setup>
import TextHeader from '@/components/Common/TextHeader.vue';
import { onMounted, ref } from 'vue';
import ViewMemberDetailModal from './ViewMemberDetailModal.vue';
import { Modal } from 'bootstrap';

let viewMemberDetailModal = null;

onMounted(() => {
  viewMemberDetailModal = new Modal(document.querySelector('#viewMemberDetailModal'));
})

const memberList = ref([
  {
    ID: 'tlarlrma',
    name: '심영조',
    email: 'tlarlrma@naver.com',
    tel: '010-2810-4870',
    date: '2022. 02. 03'
  },
  {
    ID: 'tlarlrma',
    name: '심영조',
    email: 'tlarlrma@naver.com',
    tel: '010-2810-4870',
    date: '2022. 02. 03'
  },
  {
    ID: 'tlarlrma',
    name: '심영조',
    email: 'tlarlrma@naver.com',
    tel: '010-2810-4870',
    date: '2022. 02. 03'
  },
  {
    ID: 'tlarlrma',
    name: '심영조',
    email: 'tlarlrma@naver.com',
    tel: '010-2810-4870',
    date: '2022. 02. 03'
  },
  {
    ID: 'tlarlrma',
    name: '심영조',
    email: 'tlarlrma@naver.com',
    tel: '010-2810-4870',
    date: '2022. 02. 03'
  },
  {
    ID: 'tlarlrma',
    name: '심영조',
    email: 'tlarlrma@naver.com',
    tel: '010-2810-4870',
    date: '2022. 02. 03'
  },
  {
    ID: 'tlarlrma',
    name: '심영조',
    email: 'tlarlrma@naver.com',
    tel: '010-2810-4870',
    date: '2022. 02. 03'
  },
  {
    ID: 'tlarlrma',
    name: '심영조',
    email: 'tlarlrma@naver.com',
    tel: '010-2810-4870',
    date: '2022. 02. 03'
  },
  {
    ID: 'tlarlrma',
    name: '심영조',
    email: 'tlarlrma@naver.com',
    tel: '010-2810-4870',
    date: '2022. 02. 03'
  },
  {
    ID: 'tlarlrma',
    name: '심영조',
    email: 'tlarlrma@naver.com',
    tel: '010-2810-4870',
    date: '2022. 02. 03'
  },
]);

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