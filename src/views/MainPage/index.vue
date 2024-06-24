<template>
    <div class="col-md-12">
        <Carousel />
    </div>
    <div class="main_container row">
        <div class="col-md-12 row mt-3 first_floor">
            <div class="col-md-7">
                <TotalVolCnt />
            </div>
            <div class="col-md-5">
                <Login />
            </div>
        </div>
        <div class="col-md-12 row mt-4 second_floor">
            <div class="col-md-6 our_shortcut">
                <span style="padding-left: 30px;">SocialPulse에 오신것을 환영합니다.</span>
                <div class="p-4">
                    <div class="button_shortcut">
                        <dl>
                            <dt style="height: 100px">
                                <img src="@/assets/MainPage/자원봉사 2.png">
                            </dt>
                            <dd>
                                봉사프로그램 조회
                            </dd>
                        </dl>
                    </div>
                    <div class="button_shortcut">
                        <dl>
                            <dt style="height: 100px">
                                <img src="@/assets/MainPage/자원봉사 4.png">
                            </dt>
                            <dd>
                                지역별 봉사센터 조회
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="col-md-6 other_shortcut">
                <span style="padding-left: 30px;">유관기관 사이트 바로가기</span>
                <div class="d-flex justify-content-between p-4">
                    <dl class="other_shortcut_logo">
                        <dt class="d-flex justify-content-center mb-3"><img src="@/assets/logo1365.png" /></dt>
                        <dd><span>1365로 이동하기</span></dd>
                    </dl>
                    <dl class="other_shortcut_logo">
                        <dt class="d-flex justify-content-center mb-3"><img src="@/assets/logo_Volunteer_Archive.png" />
                        </dt>
                        <dd><span>아카이브로 이동하기</span></dd>
                    </dl>
                    <dl class="other_shortcut_logo">
                        <dt class="d-flex justify-content-center mb-3"><img src="@/assets/logo_VMS.png" /></dt>
                        <dd><span>VMS로 이동하기</span></dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <RecruitVol />
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="third_floor_title d-flex justify-content-center mt-5">
                    <h3>항목별 봉사활동</h3>
                </div>
                <div class="third_floor mt-4">
                    <div class="hashtag_container flex-wrap">
                        <dl class="hashtag">
                            <dt><img src="@/assets/MainPage/counsel.png"></dt>
                            <dd class="mt-3">#말벗상담</dd>
                        </dl>
                        <dl class="hashtag">
                            <dt><img src="@/assets/MainPage/nurse.png"></dt>
                            <dd class="mt-3">#간호간병</dd>
                        </dl>
                        <dl class="hashtag">
                            <dt><img src="@/assets/MainPage/protect_social.png"></dt>
                            <dd class="mt-3">#공익보호</dd>
                        </dl>
                        <dl class="hashtag">
                            <dt><img src="@/assets/MainPage/global_vol.png"></dt>
                            <dd class="mt-3">#해외봉사</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="third_floor_title d-flex justify-content-center mt-5">
                    <h3>공지사항</h3>
                </div>
                <div class="mt-4 pb-2 notice_board_head">
                    <span>더보기</span>
                </div>
                <div class="board_content">
                    <div class="d-flex justify-content-between">
                        <h6 class="board_title">[공지] 서버용 인증서 교체 작성 계획 안내</h6>
                        <h6>2024-06-24</h6>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6 class="board_title">[공지] 서버용 인증서 교체 작성 계획 안내</h6>
                        <h6>2024-06-24</h6>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6 class="board_title">[공지] 서버용 인증서 교체 작성 계획 안내</h6>
                        <h6>2024-06-24</h6>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6 class="board_title">[공지] 서버용 인증서 교체 작성 계획 안내</h6>
                        <h6>2024-06-24</h6>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6 class="board_title">[공지] 서버용 인증서 교체 작성 계획 안내</h6>
                        <h6>2024-06-24</h6>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6 class="board_title">[공지] 서버용 인증서 교체 작성 계획 안내</h6>
                        <h6>2024-06-24</h6>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6 class="board_title">[공지] 서버용 인증서 교체 작성 계획 안내</h6>
                        <h6>2024-06-24</h6>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6 class="board_title">[공지] 서버용 인증서 교체 작성 계획 안내</h6>
                        <h6>2024-06-24</h6>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6 class="board_title">[공지] 서버용 인증서 교체 작성 계획 안내</h6>
                        <h6>2024-06-24</h6>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6 class="board_title">[공지] 서버용 인증서 교체 작성 계획 안내</h6>
                        <h6>2024-06-24</h6>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6 class="board_title">[공지] 서버용 인증서 교체 작성 계획 안내</h6>
                        <h6>2024-06-24</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Carousel from "@/views/MainPage/Carousel.vue";
import MenuShortcuts from "@/views/MainPage/MenuShortcuts.vue";
import VolShortcuts from "@/views/MainPage/VolShortcuts.vue";
import RecruitVol from "@/views/MainPage/RecruitVol.vue";
import TotalVolCnt from "@/views/MainPage/TotalVolCnt.vue";
import Login from "./Login.vue";
import BoardOutline from "@/views/MainPage/BoardOutline.vue";
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
}

.main_container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main_container>div {
    width: 1100px;
}

.first_floor {
    height: 200px;
    display: flex;
    justify-content: space-between;
    border: 1px solid rgb(255, 201, 102);
    border-radius: 10px;
}

.second_floor {
    display: flex;
    justify-content: space-between;
    padding-top: 30px;

}

.other_shortcut {
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
}

.other_shortcut>span {
    padding-left: 10px;
    font-size: 1.5em;
}

.other_shortcut_logo {
    cursor: pointer;
}

.other_shortcut_logo:hover>dd>span {
    color: rgb(240, 103, 4);
}

.other_shortcut_logo>dt>img {
    width: 100px;
    border-radius: 100%;
    border: 3px solid rgb(240, 103, 4);
}

.other_shortcut_logo>dd>span {
    font-weight: bold;
}

.our_shortcut {
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
}

.our_shortcut>span {
    padding-left: 10px;
    font-size: 1.5em;
}

.our_shortcut>div {
    display: flex;
    justify-content: space-between;
    width: 100%;

}

.button_shortcut {
    width: 49%;
    height: 140px;
    border: 2px solid rgba(240, 102, 4, 0.6);
    border-radius: 5px;
    cursor: pointer;
}

.button_shortcut>dl {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(240, 103, 4, 0.8);
    font-weight: bold;
}

.button_shortcut:hover {
    border: 2px solid rgb(240, 102, 4);
}

.button_shortcut:hover>dl {
    color: rgb(240, 102, 4);
}

.third_floor {
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

.third_floor_title>h3 {
    font-weight: bold;
}

.hashtag_container {
    width: 100%;
    padding-right: 70px;
    padding-left: 70px;
    display: flex;
    justify-content: space-between;
}

.hashtag {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 30px;
    padding-bottom: 30px;
    border: 2px solid rgb(240, 102, 4);
    border-radius: 20px;
    color: rgb(240, 102, 4);
    font-size: 1.3em;
    font-weight: bold;
    cursor: pointer;
    margin: 10px;
}

.hashtag>dt>img {
    width: 100px;
    height: 100px;
}

.hashtag:hover {
    background-color: rgb(240, 102, 4);
    color: white;
}

.notice_board_head {
    display: flex;
    justify-content: end;
}
.notice_board_head > span {
    font-weight: bold;
    margin-right: 30px;
    color: rgb(240, 102, 4);
    cursor: pointer;
}
.board_content {
    border: 2px solid rgb(240, 102, 4);
    border-radius: 10px;
}
.board_content > div {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border-bottom: 1px solid silver;
}
.board_title {
    cursor: pointer;
}

.board_title:hover {
    text-decoration: underline;
}
</style>