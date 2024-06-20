<template>
    <div class="card" style="border:none">
        <div class="card-body" style="padding: 12px;">
            <div class="row" style="border-bottom: 2px solid gray;">
                <div class="col-sm-10" style="padding:0 0 8px 0;">
                    [전체 <span class="highlight">25</span>건,
                    현재페이지 <span class="highlight">1</span>/3]
                </div>
                <div class="col-sm-2">
                    <button class=""
                        style="display: inline-block; margin-bottom: 4px; border: none; border-radius: 4px; margin-left: 25px"
                        @click="emit('showModal')" v-if="isAddPage">새로 생성</button>
                </div>
            </div>
            <slot name="body">
                <div class="row_container mt-3 mb-3" v-for="(vol) in volList" :key="vol.no">
                    <div class="row">
                        <div class="col-sm-12" style="padding: 0;">
                            <span style="font-weight: bold; font-size: 18px;">
                                {{ vol.title }}
                            </span>
                        </div>
                    </div>
                    <div class="row" style="font-size: 14px;">
                        <div class="col-sm-10 mt-1" style="padding: 0;">
                            <span>[모집기간]
                                <span style="color: gray;">
                                    {{ vol.recruitDate }}
                                </span>
                            </span>
                            <span class="ms-3">[봉사기간]
                                <span style="color: gray;">
                                    {{ vol.volDate }}
                                </span>
                            </span>
                            <span class="ms-3">[봉사시간]
                                <span style="color: gray;">
                                    {{ vol.volTime }}
                                </span>
                            </span>
                        </div>
                        <div class="col-sm-2 ">
                            <button class=""
                                style="display: inline-block; margin-bottom: 4px; border: none; border-radius: 4px; margin-left: 25px; font-size: 16px; width: 81.63px;"
                                v-if="isAddPage" @click="emit('showModal')">추가</button>
                        </div>
                    </div>
                    <div class="row" style="font-size: 14px; ">
                        <div class="col-sm-12 " style="padding: 0;">
                            <span>[등록기관]
                                <span style="color: gray;">
                                    {{ vol.registerCenter }}
                                </span>
                            </span>
                            <span class="ms-3">[모집기관]
                                <span style="color: gray;">
                                    {{ vol.recruitCenter }}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div class="row" style="font-size: 14px; border-bottom: 1px solid gray; padding-bottom: 10px; ">
                        <div class="col-sm-12 mt-1" style="padding: 0; color: #4e76ad;">
                            <span>[분류]
                                <span>
                                    {{ vol.classification }}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </slot>
        </div>
    </div>
</template>

<script setup>
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

</script>

<style scoped>
.highlight {
    color: coral;
    font-weight: bolder;
}
</style>