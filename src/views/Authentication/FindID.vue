<template>
  <div>
    <TextHeader class="mb-3" title="아이디 찾기" />
    <FindAccount
      title="가입하신 이메일로 회원님의 아이디를 전송해 드립니다."
      :Fields="Fields"
      submitButtonText="아이디 찾기"
      @submit="findId"
      @go-to-login="navigateToLogin"
      pageType="findId"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
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
    id: 'email',
    label: '이메일',
    type: 'email',
    value: '',
    placeholder: '이메일을 입력해 주세요',
    maxlength: 50
  }
]);

const router = useRouter();

const findId = (data) => {
  console.log(data);
  // 여기에 아이디 찾기 로직을 추가하세요.
};

const navigateToLogin = () => {
  router.push('/Details/Member/SignIn');
};
</script>
