<template>
    <div class="card">
        <div class="card-body" style="padding: 12px;">
            <div class="row" style="border-bottom: 2px solid gray;">
                <div class="col-sm-10" style="padding: 0;">
                    <span>
                    [전체 25건, 현재페이지 1/3]
                    </span>
                </div>
                <div class="col-sm-2">
                    <button class="" style="display: inline-block; margin-bottom: 4px; border: none; border-radius: 4px; margin-left: 25px">새로 생성</button>
                </div>
            </div>
            <div class="row_container mt-3 mb-3">
                <div class="row">
                    <div class="col-sm-12" style="padding: 0;">
                        <span style="font-weight: bold; font-size: 18px;">
                            2024. 자원봉사 대학
                        </span>
                    </div>
                </div>
                <div class="row" style="font-size: 14px; border-bottom: 1px solid gray; padding-bottom: 10px; ">
                    <div class="col-sm-10 mt-1" style="padding: 0;">
                        <span>[교육센터] 
                            <span style="color: gray;">
                                충청북도 단양군
                            </span>
                        </span>
                        <span class="ms-3">[모집기간] 
                            <span style="color: gray;">
                                2024.06.10 - 2024.06.26
                            </span>
                        </span>
                        <span class="ms-3">[교육기간] 
                            <span style="color: gray;">
                                2024.07.02 - 2024.07.07
                            </span>
                        </span>
                    </div>
                    <div class="col-sm-2 ">
                        <button class="" style="display: inline-block; margin-bottom: 4px; border: none; border-radius: 4px; margin-left: 25px; font-size: 16px; width: 81.63px;" @click="emit('showDialogA')">추가</button>
                    </div>
                </div>
            </div>
            <div class="row_container mt-3 mb-3">
                <div class="row">
                    <div class="col-sm-12" style="padding: 0;">
                        <span style="font-weight: bold; font-size: 18px;">
                            2024. 자원봉사 대학
                        </span>
                    </div>
                </div>
                <div class="row" style="font-size: 14px; border-bottom: 1px solid gray; padding-bottom: 10px; ">
                    <div class="col-sm-10 mt-1" style="padding: 0;">
                        <span>[교육센터] 
                            <span style="color: gray;">
                                충청북도 단양군
                            </span>
                        </span>
                        <span class="ms-3">[모집기간] 
                            <span style="color: gray;">
                                2024.06.10 - 2024.06.26
                            </span>
                        </span>
                        <span class="ms-3">[교육기간] 
                            <span style="color: gray;">
                                2024.07.02 - 2024.07.07
                            </span>
                        </span>
                    </div>
                    <div class="col-sm-2">
                        <button class="" style="display: inline-block; margin-bottom: 4px; border: none; border-radius: 4px; margin-left: 25px; font-size: 16px; width: 81.63px;">추가</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//스크립트 이용해서 v-for 짜기
const emit = defineEmits(["showDialogA"]);
</script>

<style scoped>

</style>