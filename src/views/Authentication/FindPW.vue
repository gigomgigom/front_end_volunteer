<template>
  <div>
    <TextHeader class="mb-3" title="비밀번호 찾기" />
    <FindAccount
      title="가입하신 이메일로 회원님의 비밀번호를 전송해 드립니다."
      :Fields="Fields"
      submitButtonText="비밀번호 찾기"
      @submit="findPassword"
      pageType="findPw"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FindAccount from '@/components/FindAccount.vue';
import TextHeader from "@/components/Common/TextHeader.vue";

const Fields = ref([
  {
    id: 'name',
    label: '이름',
    type: 'text',
    value: '',
    placeholder: '이름을 입력해 주세요',
    maxlength: 50
  },
  {
    id: 'uid',
    label: '아이디',
    type: 'text',
    value: '',
    placeholder: '아이디를 입력해 주세요',
    maxlength: 12
  },
  {
    id: 'email',
    label: '이메일',
    type: 'email',
    value: '',
    placeholder: '이메일을 입력해 주세요',
    maxlength: 50
  }
]);

const findPassword = (data) => {
  console.log(data);
  // 여기에 비밀번호 찾기 로직을 추가하세요.
};
</script>

<style scoped>
</style>
