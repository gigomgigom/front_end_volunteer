<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid justify-content-center">
                    <!--창 크기를 줄였을 때도 navbar 나타나게 하는 역할-->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0 mx-auto">
                        <li class="brand-logo ms-2">
                           <RouterLink to="/"><img src="@/assets/socialpulse_re.png" height="85px"></RouterLink> 
                           <!-- 로고 누르면 홈으로 이동하게 -->
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/VolunteerGuide/EducatingSource" 
                                    class="nav-link active">
                            봉사 안내
                             </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="" 
                                    class="nav-link active">
                            봉사 참여
                             </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="" 
                                    class="nav-link active">
                            봉사 정보
                             </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="" 
                                    class="nav-link active">
                            고객센터
                             </RouterLink>
                        </li>

                        <li class="nav-item">
                            <RouterLink to="" 
                                    class="nav-link active">
                            마이페이지
                             </RouterLink>
                        </li>

                        <!-- <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                마이페이지
                            </a>
                            
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">나의 정보</a></li>
                                <li><a class="dropdown-item" href="#">봉사 내역</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">로그아웃</a></li>
                            </ul>
                        </li> -->   
                    </ul>           
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped>
.navbar-nav .nav-item {
    margin-right: 35px;
    font-weight: bold;
    letter-spacing: -0.12px;
    font-size:  1.26rem;
}


.navbar-nav{
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
    position: relative; /* 부모로부터 상대 위치 설정 */
}

.navbar-nav .nav-link::after {
    content: ''; /* 가상 요소의 내용 없음 */
    position: absolute; /* 절대 위치 설정 */
    left: 0; /* 가상 요소를 왼쪽부터 시작 */
    bottom: -3px; /* 밑줄을 아래로 3px 이동하여 숨김 */
    width: 100%; /* 가로 너비 100% 설정 */
    height: 1px; /* 밑줄 높이 설정 */
    background-color: rgb(64, 185, 53); /* 밑줄 색상 설정 */
    transition: bottom 0.3s ease-in-out; /* 호버 시 부드러운 이동 효과 적용 */
    opacity: 0; /* 초기에 밑줄 숨김 */
}

.navbar-nav .nav-link:hover::after {
    bottom: -1px; /* 호버 시 밑줄을 보여줌 */
    opacity: 1; /* 호버 시 밑줄이 나타남 */
}


.brand-logo {
    margin-right: 40px; /* Adjust this value to your desired spacing */
}
</style>
