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
import memberAPI from '@/apis/memberAPI';
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

async function findId(data) {
  //data.fields => 배열 (1번째: 이름, 2번째: 이메일) 이름.value, 이메일.value
  let memberName = data.fields[0].value;
  let email = data.fields[1].value;
  let requestData = {
    memberName,
    email
  }
  let result = false;
  console.log('서버 통신 시작');
  try {
    const response = await memberAPI.findId(requestData);
    console.log('서버 통신 응답 받음', response);
    if(response.data.result === 'success') {
      result = true;
    } else {
      result = false;
    }
  } catch(error) {
    console.log('에러발생:', error);
  }
  if(result) {
    alert('아이디가 이메일로 전송되었습니다.');
    router.push('/Details/Member/SignIn');
  } else {
    alert('입력하신 내용과 일치한 정보가 없습니다.');
  }
  
}

const navigateToLogin = () => {
  router.push('/Details/Member/SignIn');
};
</script>
