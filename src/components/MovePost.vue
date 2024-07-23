<template>
    <div class="row" style="margin-bottom: 30px; margin-top: 30px;">
        <div class="col-sm-5  d-flex flex-column align-items-end">
            <div style="cursor: pointer;" @click="$emit('movePrevious', boardDto.preBoardNo)">
                <div style="float: right;" class="" >
                    <img src="@/assets/ico_board_btn_prev.png" style="margin-left: 15px;">
                    이전글
                </div>
                <div class="ellipsis" style="text-align: right; clear: both; display: block; content: '';">
                    {{boardDto.preTitle}}
                </div>
            </div>
        </div>          
        <div class="col-sm-2  text-center">
            <HighlightButton text="목록" style="height: 50px;" @buttonClick="$emit('moveList')"/>
        </div>
        <div class="col-sm-5  d-flex flex-column align-items-start">
            <div style="cursor: pointer;" @click="$emit('moveNext', boardDto.nextBoardNo)">
                <div>
                    다음글
                    <img src="@/assets/ico_board_btn_next.png" style="margin-right: 15px;">
                </div>
                <div class="ellipsis" style="text-align: left;">
                    {{boardDto.nextTitle}}
                </div>
            </div>
        </div>       
    </div>
</template>

<script setup>
import HighlightButton from './Common/HighlightButton.vue';
import { inject } from 'vue';
const boardDto = inject("boardDto2");




</script>

<style scoped>
.aa{
    border: 1px solid black; height: 20px;
}
.ellipsis{
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    max-width: 345px;
}
</style>