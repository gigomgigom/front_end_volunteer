<template>
    <div class="login_container h-100" v-if="store.getters.getUserId === ''">
        <div class="login_button" @click="router.push('/Details/Member/SignIn')">
            <span style="font-weight: bold; margin-right: 10px;">Social Pulse</span><span>로그인</span>
        </div>
        <div class="find_user_data">
            <div class="me-1 find_text" @click="moveFindAccPage(0)">
                <span>아이디 찾기</span>
            </div>
            <div class="me-1 find_text" @click="moveFindAccPage(1)">
                <span>비밀번호 찾기</span>
            </div>
            <div class="find_text" @click="moveFindAccPage(2)">
                <span>회원가입</span>
            </div>
        </div>
    </div>
    <div class="login_container h-100" v-if="store.getters.getUserId">
        <div class="login_profile">
            <div>
                <span class="user_logo">
                    <img src="@/assets/MainPage/user_logo.png">
                </span>
            </div>
            <div class="user_name me-3">
                <span style="font-size: 1.1em; font-weight: bold;">{{ member.memberName }} 님</span>
                <span>좋은 하루 되세요!</span>
            </div>
            <div class="user_button_wrapper">
                <div class="me-3" style="width: 70px;">
                    <div v-if="store.getters.getUserRole === 'ROLE_ADMIN'">
                        <button class="btn user_button" @click="router.push('/Details/Admin/MngVolProgram')">
                            <span>관리자</span>
                        </button>
                    </div>
                </div>

                <button class="btn user_button" @click="logout">
                    <span class="me-2">로그아웃</span>
                    <img src="@/assets/MainPage/logout.png" width="12px">
                </button>
            </div>
        </div>
        <div class="user_info_container">
            <div class="user_perform">
                <div class="user_data">
                    <div>
                        총 봉사시간 : <span class="user_info_number">1,023</span>시간
                    </div>
                    <div>
                        참여 봉사수 : <span class="user_info_number">500</span>건
                    </div>
                </div>
                <div class="user_info_button" @click="moveDetailPage(0)">
                    <span>봉사 실적 이동</span>
                </div>
            </div>
            <div class="user_appl">
                <div class="user_data">
                    <div>
                        신청한 봉사 : <span class="user_info_number">20</span>건
                    </div>
                    <div>
                        신청한 교육 : <span class="user_info_number">10</span>건
                    </div>
                </div>
                <div class="user_info_button" @click="moveDetailPage(1)">
                    <span>신청내역 이동</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '@/router';
import { useStore } from 'vuex';
import memberAPI from '@/apis/memberAPI';
import { ref } from 'vue';

const store = useStore();
const member = ref({});

function moveFindAccPage(index) {
    let urlList = ['/Details/Member/FindID', '/Details/Member/FindPW', '/Details/Member/SignUp'];
    router.push(urlList[index]);
}

function moveDetailPage(index) {
    let urlList = ['/Details/MyPage/Perform/ViewPerformList', '/Details/MyPage/VolApplDetails/ViewApplList'];
    router.push(urlList[index]);
}

function logout() {
    store.dispatch('deleteAuth');
    router.go(0);
    alert('로그아웃 되었습니다!');
}

async function getMemberName() {
    try {
        const response = await memberAPI.getMemberName();
        member.value = response.data.member;
        console.log(member.value);
    } catch(error) {
        console.log(error);
    }
}
getMemberName();
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
    border: 1px solid rgb(240, 103, 4);
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

.find_user_data>div {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.find_text:hover {
    color: rgb(240, 103, 4);
    font-weight: bold;
    cursor: pointer;
}
.login_button:hover {
    background-color: rgb(240, 103, 4);
}

.login_profile {
    width: 90%;
    display: flex;
}

.user_logo>img {
    width: 64px;
    /* border: 1px solid black; */
    border-radius: 100%;
    background-color: rgb(255, 107, 1)
}

.user_name {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.user_button_wrapper {
    display: flex;
    align-items: center;
}

.user_button {
    border: 1px solid rgb(240, 103, 4);
    border-radius: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    font-size: 0.9em;
    color: darkslategrey;
    font-weight: bold;
}

.user_button:hover {
    background-color: rgb(240, 103, 4);
    color: white;
}

.user_info_number {
    color: rgb(240, 103, 4);
    font-weight: bold;
}

.user_info_button {
    background-color: rgb(240, 103, 4);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
}

.user_info_container {
    margin-top: 10px;
    width: 90%;
    display: flex;
    justify-content: space-between;
}

.user_perform {
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(240, 103, 4);
    border-radius: 10px;
    width: 48%;
}

.user_data {
    padding-left: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.user_appl {
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(240, 103, 4);
    border-radius: 10px;
    width: 48%;
}
</style>