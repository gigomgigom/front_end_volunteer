<template>
    <div class="card" style="border: none;">
        <div class="card-body" style="padding: 12px;">
            <div class="row" style="border-bottom: 2px solid gray; ">
                <div class="col-sm-10" style="padding:0 0 8px 0;">
                    [전체 <span class="highlight">25</span>건,
                    현재페이지 <span class="highlight">1</span>/3]
                </div>
                <div class="col-sm-2">
                    <button class="" style="display: inline-block; border: none; border-radius: 4px; margin-left: 25px"
                        @click="emit('buttonClick')" v-if="isAddPage">새로 생성</button>
                </div>
            </div>
            <slot name="body">
                <div class="row_container mt-3 mb-3" v-for="(edu) in eduList" :key="edu.no">
                    <div class="row">
                        <div class="col-sm-12" style="padding: 0;">
                            <span style="font-weight: bold; font-size: 18px;">
                                {{ edu.title }}
                            </span>
                        </div>
                    </div>

                    <div class="row" style="font-size: 14px; border-bottom: 1px solid gray; padding-bottom: 10px; ">
                        <div class="col-sm-3 mt-1" style="padding: 0;">
                            <span>[교육센터]
                                <span style="color: gray;">
                                    {{ edu.center }}
                                </span>
                            </span>
                        </div>
                        <div class="col-sm-7">
                            <span class="ms-5" style="">[모집기간]
                                <span style="color: gray;">
                                    {{ edu.recruitDate }}
                                </span>
                            </span>
                        </div>
                        <div class="col-sm-2 ">
                            <button class="" style="display: inline-block; margin-bottom: 4px; border: none; 
                            border-radius: 4px; margin-left: 25px; font-size: 16px; width: 81.63px;"
                                @click="emit('buttonClick')">추가
                            </button>
                        </div>
                        <div class="row">
                            <div class="col-sm-12" style="padding: 0; margin-bottom: 4px;">
                                <span class="">[교육기간]
                                    <span style="color: gray;">
                                        {{ edu.eduDate }}
                                    </span>
                                </span>
                            </div>
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
.highlight {
  color: coral;
  font-weight: bolder;
}
  </style>