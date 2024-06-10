<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid justify-content-center">
                <!--창 크기를 줄였을 때도 navbar 나타나게 하는 역할-->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0 mx-auto">
                        <li class="brand-logo ms-2">
                            <RouterLink to="/Main"><img src="@/assets/socialpulse_logo.png" height="85px"></RouterLink>
                            <!-- 로고 누르면 홈으로 이동하게 -->
                        </li>
                        <li class="nav-item">
                            <span class="nav-link active" @click="goDetailBody(0)">
                                봉사 안내
                            </span>
                        </li>
                        <li class="nav-item">
                            <span class="nav-link active" @click="goDetailBody(1)">
                                봉사 참여
                            </span>
                        </li>
                        <li class="nav-item">
                            <span class="nav-link active" @click="goDetailBody(2)">
                                봉사 정보
                            </span>
                        </li>
                        <li class="nav-item">
                            <span class="nav-link active" @click="goDetailBody(3)">
                                고객센터
                            </span>
                        </li>

                        <li class="nav-item">
                            <span class="nav-link active" @click="goDetailBody(4)">
                                마이페이지
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

function goDetailBody(firstFloorIndex) {
    if (store.state.menuState.menuList[firstFloorIndex].secondFloor[0].thirdFloor.length === 0) {
        let payload = {
        firstFloor: firstFloorIndex,
        secondFloor: 0,
        thirdFloor: -1
        }
        store.commit("menuState/setMenuIndex", payload);
    } else {
        let payload = {
            firstFloor: firstFloorIndex,
            secondFloor: 0,
            thirdFloor: 0
        }
        store.commit("menuState/setMenuIndex", payload);
    }
    router.push("/Details");
}
</script>

<style scoped>
.navbar-nav .nav-item {
    margin-right: 35px;
    font-weight: bold;
    letter-spacing: -0.12px;
    font-size: 1.26rem;
}

.navbar-nav {
    align-items: center;
}

.navbar-collapse {
    display: flex;
    justify-content: center;
}

.navbar-nav {
    text-align: center;
}

.navbar-nav .nav-link {
    position: relative;
    cursor: pointer;
    /* 부모로부터 상대 위치 설정 */
}

.navbar-nav .nav-link::after {
    content: '';
    /* 가상 요소의 내용 없음 */
    position: absolute;
    /* 절대 위치 설정 */
    left: 0;
    /* 가상 요소를 왼쪽부터 시작 */
    bottom: -3px;
    /* 밑줄을 아래로 3px 이동하여 숨김 */
    width: 100%;
    /* 가로 너비 100% 설정 */
    height: 1px;
    /* 밑줄 높이 설정 */
    background-color: rgb(64, 185, 53);
    /* 밑줄 색상 설정 */
    transition: bottom 0.3s ease-in-out;
    /* 호버 시 부드러운 이동 효과 적용 */
    opacity: 0;
    /* 초기에 밑줄 숨김 */
}

.navbar-nav .nav-link:hover::after {
    bottom: -1px;
    /* 호버 시 밑줄을 보여줌 */
    opacity: 1;
    /* 호버 시 밑줄이 나타남 */
}


.brand-logo {
    margin-right: 40px;
    /* Adjust this value to your desired spacing */
}
</style>
