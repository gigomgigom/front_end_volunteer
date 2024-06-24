<template>
  <div class="login_container h-100" v-if="store.state.menuState.isAuthenticated === 0">
    <div class="login_button">
        <span style="font-weight: bold; margin-right: 10px;">Social Pulse</span><span>로그인</span>
    </div>
    <div class="find_user_data">
        <div class="me-1">
            <span>아이디 찾기</span>
        </div>
        <div class="me-1">
            <span>비밀번호 찾기</span>
        </div>
        <div>
            <span>회원가입</span>
        </div>
    </div>
  </div>
  <div class="login_container h-100" v-if="store.state.menuState.isAuthenticated">

  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.login_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: rgb(255, 201, 102);
    border-radius: 10px;
}
.login_button {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4em;
    cursor: pointer;
    color: white;
    background-color: rgba(240, 102, 4, 0.7);
    border-radius: 10px;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 30px;
    padding-right: 30px;
}
.find_user_data {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
.find_user_data > div {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login_button:hover {
    background-color: rgb(240, 103, 4);
}

.me-1 {
    border-right: 1px solid rgb(240, 103, 4);
}

</style>