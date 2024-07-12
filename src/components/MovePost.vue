<template>
    <div class="row" style="margin-bottom: 30px; margin-top: 30px;">
        <div class="col-sm-5  d-flex flex-column align-items-end">
            <RouterLink style="color: #666;  text-decoration: none; width: 100%;" to="">
                <div style="float: right;" class="">
                    <img src="@/assets/ico_board_btn_prev.png" style="margin-left: 15px;">
                    이전글
                </div>
                <div class="ellipsis" style="text-align: right; clear: both; display: block; content: '';">
                    {{boardDto.preTitle}}
                </div>
            </RouterLink>
        </div>          
        <div class="col-sm-2  text-center">
            <HighlightButton text="목록" style="height: 50px;" @buttonClick="$emit('moveList')"/>
        </div>
        <div class="col-sm-5  d-flex flex-column align-items-start">
            <RouterLink style="color: #666; text-decoration: none; width: 100%;" to="" >
                <div>
                    다음글
                    <img src="@/assets/ico_board_btn_next.png" style="margin-right: 15px;">
                </div>
                <div class="ellipsis" style="text-align: left;">
                    {{boardDto.nextTitle}}
                </div>
            </RouterLink>
        </div>       
    </div>
</template>

<script setup>
import HighlightButton from './Common/HighlightButton.vue';
import intergratedBoardAPI from '@/apis/intergratedBoardAPI';
import { inject,ref } from 'vue';
import { onMounted } from 'vue';
defineEmits(["moveList"]);
const boardDto = inject("boardDto");

onMounted(() => { 
    getSequenceBoard(boardDto.value);
});

async function getSequenceBoard(formData){
  const response = await intergratedBoardAPI.getSequenceBoard(formData);
  boardDto.value.preTitle = response.data.previous.title;
  boardDto.value.preBoardNo = response.data.previous.boardNo;
  boardDto.value.nextTitle = response.data.next.title;
  boardDto.value.nextBoardNo = response.data.next.boardNo;
}

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