<template>
    <div class="border-bottom" style="background-color: #FFCD4A">
        <div>
            <ul class="nav">
                <li class="nav-item" v-if="store.state.menuState.isAdmin">
                    <RouterLink class="nav-link text-darkgray" to="/Details/Admin/MngVolProgram">관리자 페이지로 이동</RouterLink>
                </li>
                <li class="nav-item" v-if="store.state.menuState.isAuthenticated === 0">
                    <RouterLink class="nav-link text-darkgray" to="/Details/Member/SignIn">로그인</RouterLink>
                </li>
                <li class="nav-item" v-if="store.state.menuState.isAuthenticated === 0">
                    <RouterLink class="nav-link text-darkgray" to="/Details/Member/SignUp">회원가입</RouterLink>
                </li>
                <li class="nav-item" v-if="store.state.menuState.isAuthenticated">
                    <RouterLink class="nav-link text-darkgray" to="/Details/MyPage/Perform">OO님 안녕하세요</RouterLink>
                </li>
                <li class="nav-item" v-if="store.state.menuState.isAuthenticated">
                    <RouterLink class="nav-link text-darkgray" to="/">로그아웃</RouterLink>
                </li>
            </ul>
        </div>
    </div>


</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
</script>

<style scoped>
.nav {
    display: flex;
    justify-content: end;
    margin-right: 50px;
}
.nav-item {
    border-right: 1px solid silver;
    border-left: 1px solid silver;
    border-collapse: collapse;
}
.nav-link {
    font-size: calc(1em / 1.2);
}
.text-darkgray {
    color: dimgray;
}
.nav-link:hover {
    color: saddlebrown;
}
</style>