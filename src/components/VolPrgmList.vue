<template>
    <div>
        <div class="row">
            <div class="col-sm-10" style="padding:0 0 8px 0;">
                [전체 <span class="highlight">{{ data.pager.totalCount }}</span>건,
                현재페이지 <span class="highlight">{{ data.pager.pageNo }}</span>/{{ data.pager.totalPage }}]
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
        <div class="row-wrapper py-3" v-for="(vol, index) in data.programList" :key="index">
            <div class="row">
                <div class="col-md-10 d-flex">
                    <div class="vol-checkbox">
                        <slot name="checkBox">
                            <!--선택하기 체크박스 생성-->
                        </slot>
                    </div>
                    <div class="d-flex flex-column">
                        <div class="vol-title">
                            <span @click="moveToDetail(vol.url, vol.isExternal)">
                                {{ vol.title }}
                            </span>
                        </div>
                        <div class="vol-desc">
                            [모집기간] <span class="me-2" style="color: gray;">{{ vol.recruitDate }}</span>
                            [봉사기간] <span class="me-2" style="color: gray;">{{ vol.volDate }}</span>
                            [봉사시간] <span style="color: gray;">{{ vol.volTime }}</span>
                        </div>
                        <div class="vol-desc">
                            [봉사지역] <span class="me-2" style="color: gray;">{{ vol.region }}</span>
                            [모집기관] <span style="color: gray;">{{ vol.recruitCenter }}</span>
                        </div>
                        <div class="vol-desc">
                            [분류] <span style="font-weight: bold; color: #4e76ad;">{{ vol.classification }}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 right-side-container" :id="vol.no">
                    <slot name="right-side">

                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from "@/router";
import { inject } from "vue";

const data = inject('responseData');

function moveToDetail(url, isExternal) {
    if (isExternal) {
        window.open(url, '_blank');
    } else {
        router.push(url);
    }
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

.vol-title>span {
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