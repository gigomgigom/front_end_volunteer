<template>
  <div>
    <TextHeader class="mb-3" title="아이디 찾기" />
    <FindAccount
      title="아이디 찾기 방식"
      :phoneFields="phoneFields"
      :emailFields="emailFields"
      submitButtonText="아이디 찾기"
      @submit="findId"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FindAccount from '@/components/FindAccount.vue';
import TextHeader from "@/components/Common/TextHeader.vue";

const phoneFields = ref([
  {
    id: 'name',
    label: '이름',
    type: 'text',
    value: '',
    placeholder: '이름을 입력해 주세요',
    hint: '올바른 이름을 입력해 주세요'
    
  },
  {
    id: 'phone',
    label: '휴대폰 번호',
    type: 'text',
    value: '',
    placeholder: '휴대폰 번호를 입력해 주세요',
    hint: '올바른 휴대폰 번호를 입력해 주세요'
  }
]);

const emailFields = ref([
  {
    id: 'name',
    label: '이름',
    type: 'text',
    value: '',
    placeholder: '이름을 입력해 주세요',
    hint: '올바른 이름을 입력해 주세요'
  },
  {
    id: 'email',
    label: '이메일',
    type: 'email',
    value: '',
    placeholder: '이메일을 입력해 주세요',
    hint: '올바른 이메일을 입력해 주세요'
  }
]);

const findId = (data) => {
  console.log(data);
  // 여기에 아이디 찾기 로직을 추가하세요.
};
</script>

<style scoped>
</style>
