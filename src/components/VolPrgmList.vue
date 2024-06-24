<template>
    <div>
        <div class="row">
            <div class="col-sm-10" style="padding:0 0 8px 0;">
                [전체 <span class="highlight">25</span>건,
                현재페이지 <span class="highlight">1</span>/3]
            </div>
            <div class="col-sm-2">
                <slot name="createButton">
                    <!--생성버튼 추가-->
                </slot>
            </div>
        </div>
        <div class="d-flex ps-2" style="border-bottom: 2px solid gray;">
            <slot name="vol-checkbox">

            </slot>
        </div>
        <div class="row-wrapper py-3" v-for="(vol) in volList" :key="vol.no">
            <div class="row">
                <div class="col-md-10 d-flex">
                    <div class="vol-checkbox">
                        <slot name="checkBox">
                            <!--선택하기 체크박스 생성-->
                        </slot>
                    </div>
                    <div class="d-flex flex-column">
                        <div class="vol-title">
                            <span @click="moveToDetail(url)">
                                {{ vol.title }}
                            </span>
                        </div>
                        <div class="vol-desc">
                            [모집기간] <span class="me-2" style="color: gray;">{{ vol.recruitDate }}</span>
                            [봉사기간] <span class="me-2" style="color: gray;">{{ vol.volDate }}</span>
                            [봉사시간] <span style="color: gray;">{{ vol.volTime }}</span>
                        </div>
                        <div class="vol-desc">
                            [봉사지역] <span class="me-2" style="color: gray;">{{ vol.registerCenter }}</span>
                            [모집기관] <span style="color: gray;">{{ vol.recruitCenter }}</span>
                        </div>
                        <div class="vol-desc">
                            [분류] <span style="font-weight: bold; color: #4e76ad;">{{ vol.classification }}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 right-side-container">
                    <slot name="right-side">

                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from "@/router";
import { onMounted, ref } from "vue";

const props = defineProps(['isAddPage']);
const emit = defineEmits(["showModal"]);
const isAddPage = ref();
const volList = ref([
    { no: 1, title: "서구치매안심센터 치매가족프로그램 활동 지원(치매안심센터 건담분소)", registerCenter: "경기도 수원시", recruitCenter: "인천서구육아종합지원센터", recruitDate: "2012.02.10 - 2012.02.11", volDate: "2012.03.12 - 2012.03.16", volTime: "13:00 - 17:00", classification: "생활편의지원 > 활동보조" },
    { no: 1, title: "서구치매안심센터 치매가족프로그램 활동 지원(치매안심센터 건담분소)", registerCenter: "경기도 수원시", recruitCenter: "인천서구육아종합지원센터", recruitDate: "2012.02.10 - 2012.02.11", volDate: "2012.03.12 - 2012.03.16", volTime: "13:00 - 17:00", classification: "생활편의지원 > 활동보조" },
    { no: 1, title: "서구치매안심센터 치매가족프로그램 활동 지원(치매안심센터 건담분소)", registerCenter: "경기도 수원시", recruitCenter: "인천서구육아종합지원센터", recruitDate: "2012.02.10 - 2012.02.11", volDate: "2012.03.12 - 2012.03.16", volTime: "13:00 - 17:00", classification: "생활편의지원 > 활동보조" },
    { no: 1, title: "서구치매안심센터 치매가족프로그램 활동 지원(치매안심센터 건담분소)", registerCenter: "경기도 수원시", recruitCenter: "인천서구육아종합지원센터", recruitDate: "2012.02.10 - 2012.02.11", volDate: "2012.03.12 - 2012.03.16", volTime: "13:00 - 17:00", classification: "생활편의지원 > 활동보조" },
    { no: 1, title: "서구치매안심센터 치매가족프로그램 활동 지원(치매안심센터 건담분소)", registerCenter: "경기도 수원시", recruitCenter: "인천서구육아종합지원센터", recruitDate: "2012.02.10 - 2012.02.11", volDate: "2012.03.12 - 2012.03.16", volTime: "13:00 - 17:00", classification: "생활편의지원 > 활동보조" },
]);

onMounted(() => {
    isAddPage.value = props.isAddPage;
})

function moveToDetail(url) {
    url = "/Details/Participation/VolProgram/ViewVolProgramDetail";
    router.push(url);
}

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.row-wrapper {
    border-bottom: 1px solid silver;
}

.vol-title {
    font-weight: bold;
    font-size: 18px;
}

.vol-title > span {
    cursor: pointer;
}

.vol-checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
}

.vol-desc {
    font-size: 14px;
}

.right-side-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.highlight {
    color: coral;
    font-weight: bolder;
}
</style>