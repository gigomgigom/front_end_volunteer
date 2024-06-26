  <template>
    <div>
      <TextHeader class="mb-3" title="비밀번호 찾기" />
      <FindAccount
        title="비밀번호 찾기 방식"
        :phoneFields="phoneFields"
        :emailFields="emailFields"
        submitButtonText="비밀번호 찾기"
        @submit="findPassword"
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
      errormsg: '올바른 이름을 입력해 주세요'

    },
    {
      id: 'uid',
      label: '아이디',
      type: 'text',
      value: '',
      placeholder: '아이디를 입력해 주세요',
      errormsg: '올바른 아이디를 입력해 주세요'

    },
    {
      id: 'phone',
      label: '휴대폰 번호',
      type: 'text',
      value: '',
      placeholder: '휴대폰 번호를 입력해 주세요',
      errormsg: '올바른 휴대폰 번호를 입력해 주세요',
      maxlength:11

  
    }
  ]);

  const emailFields = ref([
    {
      id: 'name',
      label: '이름',
      type: 'text',
      value: '',
      placeholder: '이름을 입력해 주세요',
      errormsg: '올바른 이름을 입력해 주세요'
    },
    {
      id: 'uid',
      label: '아이디',
      type: 'text',
      value: '',
      placeholder: '아이디를 입력해 주세요',
      errormsg: '올바른 아이디를 입력해 주세요'

    },
    {
      id: 'email',
      label: '이메일',
      type: 'email',
      value: '',
      placeholder: '이메일을 입력해 주세요',
      errormsg: '올바른 휴대폰 번호를 입력해 주세요'
    }
  ]);

  const findPassword = (data) => {
    const { findBy, fields } = data;
    // fields: 사용자가 입력한 필드들의 배열.   
    // fields 배열은 FindAccount 컴포넌트에서 dynamicFields 계산 속성으로 결정되며, 
    // 이는 phoneFields 또는 emailFields 중 하나다. 사용자가 선택한 옵션에 따라 dynamicFields는 fields로 전달되고, 부모 컴포넌트에서는 findPassword 함수에서 fields를 처리하게 된다.
    
    const fieldValues = fields.reduce((acc, field) => {
      acc[field.id] = field.value;
      return acc;
    }, {});

     // 제출된 필드 데이터를 객체로 변환하여 사용합니다.

    //acc: 누산기로 초기값은 빈 객체 {} 이다.
    // fieldValues는 { name: '입력된 값', id: '입력된 값', phone: '입력된 값', verificationPhone: '입력된 값' } 형태의 객체가 된다.


    if (findBy === 'phone') {
      alert(`이름: ${fieldValues.name}, 아이디: ${fieldValues.id}, 휴대번호: ${fieldValues.phone}`);
    } else {
      alert(`이름: ${fieldValues.name}, 아이디: ${fieldValues.id}, 이메일: ${fieldValues.email}`);
    }
  };
  </script>

  <style scoped>  
  </style>
