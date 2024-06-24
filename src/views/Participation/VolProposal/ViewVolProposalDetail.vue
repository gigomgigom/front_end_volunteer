<template>
  <BoardDetail/>
  <Comment>
    <template v-slot:body>
      <div class="card-body" style="padding: 12px; padding-top: 10px; padding-bottom: 0; margin-bottom: 30px;">
        <div class="row">
            <div class="col-sm-12" style="">
                <span style="color: rgb(240, 103, 4);">{{ comment.writer }}</span>
                <span style="margin-left: 10px;">{{ comment.date }}</span>
            </div>
            <div class="row">
                <div class="col-sm-12" style="">
                    <span>{{ comment.content }}</span>
                </div>
            </div>
        </div>
        <div class="row"
            style="font-size: 14px; border-bottom: 1px solid gray; padding-bottom: 10px; padding-top: 5px;">
            <div class="col-sm-8 d-flex align-items-center">
            </div>
            <div class="col-sm-4" style="text-align: right;">
                <HighlightButton text="수정" />
                <NormalButton text="삭제" style="margin-left: 8px;" />
            </div>
        </div>
    </div>
    </template>
  </Comment>

</template>

<script setup>
import BoardDetail from '@/components/BoardDetail.vue';
import Comment from '@/components/Comment.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';
import { ref } from "vue";

const comment = ref(
    {
        no: 0,
        writer: 'cosa1992',
        content: '정말 보람차셨을 것 같아요!',
        date: '2024.04.12 17:32'
    }
  )
</script>

<style scoped>

</style>