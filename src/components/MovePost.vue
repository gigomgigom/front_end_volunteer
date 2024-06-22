<template>
    <div class="row" style="margin-bottom: 30px; margin-top: 30px;">
        <div class="col-sm-5  d-flex flex-column align-items-end">
            <RouterLink style="color: #666;  text-decoration: none; width: 100%;" to="">
                <div style="float: right;" class="">
                    <img src="@/assets/ico_board_btn_prev.png" style="margin-left: 15px;">
                    이전글
                </div>
                <div class="ellipsis" style="clear: both; display: block; content: '';">
                    어른신들을 위한 이.미용 활동sssssssssssssssssssssssssssssssssssssssss
                </div>
            </RouterLink>
        </div>
        <div class="col-sm-2  text-center">
            <HighlightButton text="목록" style="height: 50px;"/>
        </div>
        <div class="col-sm-5  d-flex flex-column align-items-start">
            <RouterLink style="color: #666; text-decoration: none; width: 100%;" to="" >
                <div>
                    다음글
                    <img src="@/assets/ico_board_btn_next.png" style="margin-right: 15px;">
                </div>
                <div class="ellipsis">
                    익산시 공공 승마장 자원봉사 모집[재활승마]sdasdasdasdsdasdasd
                </div>
            </RouterLink>
        </div>       
    </div>
</template>

<script setup>
import HighlightButton from './Common/HighlightButton.vue';
</script>

<style scoped>
.aa{
    border: 1px solid black; height: 20px;
}
.ellipsis{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
}
</style>