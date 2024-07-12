<template>
  <div>
    <loading :active="isLoading" :can-cancel="false" />
    <TextHeader class="mb-3" title="비밀번호 찾기" />
    <FindAccount
      title="가입하신 이메일로 회원님의 비밀번호를 전송해 드립니다."
      :Fields="Fields"
      submitButtonText="비밀번호 찾기"
      @submit="findPassword"
      ref="findAccount"
      pageType="findPw"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FindAccount from '@/components/FindAccount.vue';
import TextHeader from "@/components/Common/TextHeader.vue";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import memberAPI from '@/apis/memberAPI';
import { useRouter } from 'vue-router';

const isLoading = ref(false);

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

const findAccount = ref(null);
const router = useRouter();

async function findPassword(data) {
  console.log(data);
  let memberName = data.fields[0].value;
  let memberId = data.fields[1].value;
  let email = data.fields[2].value;
  let requestData = {
    memberName,
    memberId,
    email
  };
  let result = false;
  let message = '';

  isLoading.value = true; // 로딩 시작

  try {
    const response = await memberAPI.findPw(requestData);
    console.log('서버 통신 응답 받음', response);
    if (response.data.result === 'success') {
      result = true;
      message = '비밀번호가 이메일로 전송되었습니다.';
    } else {
      result = false;
      message = '입력하신 내용과 일치하는 정보가 없습니다.';
    }
  } catch (error) {
    console.log('에러발생:', error);
    result = false;
    message = '오류가 발생했습니다. 잠시 후 다시 시도해 주세요.';
  } finally {
    isLoading.value = false; // 로딩 종료
  }

  handleShowModal(message);

  if (result) {
    router.push('/Details/Member/SignIn');
  }
}

function handleShowModal(message) {
  if (findAccount.value) {
    findAccount.value.showModal(message);
  }
}
</script>

<style scoped>
</style>
