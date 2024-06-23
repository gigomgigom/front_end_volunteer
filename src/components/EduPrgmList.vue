<template>
    <div style="padding: 12px;">
        <div class="row" style="border-bottom: 2px solid gray;">
            <div class="col-sm-10" style="padding:0 0 8px 0;">
                [전체 <span class="highlight">25</span>건,
                현재페이지 <span class="highlight">1</span>/3]
            </div>
            <div class="col-sm-2">
                <slot name="createButton">

                </slot>
            </div>
        </div>
        <div class="row-wrapper py-3" v-for="(edu) in eduList" :key="edu.no">
            <div class="row">
                <div class="col-md-10 edu-container">
                    <div class="edu-title">
                        <span>
                            {{ edu.title }}
                        </span>
                    </div>
                    <div class="edu-desc">
                        [모집기간]<span class="mx-1" style="color: gray">
                            {{ edu.recruitDate }}
                        </span>
                        [교육기간]<span class="mx-1" style="color: gray;">
                            {{ edu.eduDate }}
                        </span>
                    </div>
                    <div class="edu-desc">
                        [교육시간]<span class="mx-1" style="color: gray;">
                            14:00 ~ 16:00
                        </span>
                        [교육센터]<span class="mx-1" style="color: gray;">
                            {{ edu.center }}
                        </span>
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
import { onMounted, ref } from "vue";
const props = defineProps(['isAddPage']);
const emit = defineEmits(["buttonClick"]);
const isAddPage = ref();
const eduList = ref([
    { no: 1, title: "2012. 봉사", center: "경기도 수원시", recruitDate: "2012.02.10 - 2012.02.11", eduDate: "2012.03.12 - 2012.03.16" },
    { no: 2, title: "2013. 봉사", center: "인천광역시 광역시", recruitDate: "2013.02.10 - 2013.02.11", eduDate: "2013.03.12 - 2013.03.16" },
    { no: 3, title: "2014. 봉사", center: "서울특별시 노원구", recruitDate: "2014.02.10 - 2014.02.11", eduDate: "2014.03.12 - 2014.03.16" },
    { no: 4, title: "2015. 봉사", center: "부산광역시 해운대구", recruitDate: "2015.02.10 - 2015.02.11", eduDate: "2015.03.12 - 2015.03.16" },
    { no: 5, title: "2016. 봉사", center: "제주특별시 서귀포시", recruitDate: "2016.02.10 - 2016.02.11", eduDate: "2016.03.12 - 2016.03.16" }
]);

onMounted(() => {
    isAddPage.value = props.isAddPage;
})



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