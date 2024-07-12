<template>
    <div style="padding: 12px;">
        <div class="row" style="border-bottom: 2px solid gray;">
            <div class="col-sm-10" style="padding:0 0 8px 0;">
                [전체 <span class="highlight">{{ responseData.pager.totalCount }}</span>건,
                현재페이지 <span class="highlight">{{ responseData.pager.pageNo }}</span>/{{ responseData.pager.totalPage }}]
            </div>
            <div class="col-sm-2">
                <slot name="createButton">

                </slot>
            </div>
        </div>
        <div class="row-wrapper py-3" v-for="(program, index) in responseData.programList" :key="index">
            <div class="row">
                <div class="col-md-10 edu-container">
                    <div class="edu-title">
                        <span @click="moveToDetail(program.url, program.isExternal)" style="cursor: pointer;">
                            {{ program.title }}
                        </span>
                    </div>
                    <div class="edu-desc">
                        [모집인원]<span class="mx-1" style="color: gray">
                            {{ program.rcCount }}
                        </span>
                        [교육기간]<span class="mx-1" style="color: gray;">
                            {{ program.eduDate }}
                        </span>
                    </div>
                    <div class="edu-desc">
                        [교육시간]<span class="mx-1" style="color: gray;">
                            14:00 ~ 16:00
                        </span>
                        [교육센터]<span class="mx-1" style="color: gray;">
                            {{ program.center }}
                        </span>
                    </div>
                </div>
                <div class="col-md-2 right-side-container" :id="program.no">
                    <slot name="right-side" :index="index">
                        
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from "vue";
import { useRouter } from 'vue-router';
const responseData = inject('responseData');
const router = useRouter();

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

.edu-container {
    display: flex;
    flex-direction: column;
}
.edu-title {
    font-weight: bold;
    font-size: 18px;
}
.edu-desc {
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