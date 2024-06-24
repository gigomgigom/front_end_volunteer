<template>
    <div class="card">
        <form>
            <div class="row">
                <div class="col-sm-10">
                    <textarea type="text" style="width: 100%; height: 80px;"></textarea>

                </div>
                <div class="col-sm-2 " style="padding: 0;">
                    <HighlightButton text="등록" style="height: 80px; width: 91%;" />
                </div>
            </div>
        </form>
        <div class="bottom-line"></div>
    </div>
    <div class="card-body" style="padding: 12px; padding-top: 10px; padding-bottom: 0;"
        v-for="(comment, index) in commentList" :key="comment.no">
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
                <span style="margin-right: 10px;"> <button type="button"
                        style="border: 0;background-color: transparent;" @click="toggleReply(index)">답글 n개</button>
                </span>
                <span><button type="button" style="border: 0;background-color: transparent;"
                        @click="toggleReply(index)">답글달기</button></span>
            </div>
            <div class="col-sm-4" style="text-align: right;">
                <HighlightButton text="수정" />
                <NormalButton text="삭제" style="margin-left: 8px;" />
            </div>
        </div>
        <div class="card-body" style="padding: 12px; padding-bottom: 0px;" v-if="comment.repliesVisible">
            <div class="comment_list">
                <div v-for="(reply) in comment.replies" :key="reply.no">
                    <div class="row">
                        <div class="col-sm-11 d-flex align-items-center">
                            <span style="color:rgb(240, 103, 4); ">{{ reply.writer }}</span>
                            <span style="margin-left: 5px;">{{ reply.date }}</span>
                        </div>
                        <div class="col-sm-1">
                            <HighlightButton class="" text="삭제"
                                style="background: gray; margin: 0px; padding: 5px 10px; width: 50px ; font-size: 13px;" />
                        </div>
                    </div>
                    <div class="row" style="margin-bottom: 10px; border-bottom: 1px solid gray; padding-bottom: 5px;">
                        <div class="col-sm-12">
                            <span>{{ reply.content }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12" style=" margin-top: 10px ">
                        <form>
                            <div class="row" style="">
                                <div class="col-sm-10" style="">
                                    <textarea type="text" style="width: 100%; height: 30px;"></textarea>

                                </div>
                                <div class="col-sm-2" style="padding: 0 17px;">
                                    <HighlightButton class="" text="등록"
                                        style="padding: 5px 10px; width: 100%; font-size: 14px; height: 30px;" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script setup>
import HighlightButton from './Common/HighlightButton.vue';
import NormalButton from './Common/NormalButton.vue';
import { ref } from "vue";


const commentList = ref([
    {
        no: 0,
        writer: 'cosa1992',
        content: '정말 보람차셨을 것 같아요!',
        date: '2024.04.12 17:32',
        repliesVisible: false,
        replies: [
            { no: 1, writer: 'johndoe', content: '고마워요!', date: '2024.04.12 18:00' } 
        ]  
    },
    {
        no: 1,
        writer: 'cosa1992',
        content: '댓글입니다.',
        date: '2024.04.12 17:33',
        repliesVisible: false,
        replies: []
    },
    {
        no: 2,
        writer: 'cosa1992',
        content: '정말 보람차셨을 것 같아요!',
        date: '2024.04.12 17:32',
        repliesVisible: false,
        replies: [
            { no: 1, writer: 'johndoe', content: '고마워요!', date: '2024.04.12 18:00' },
            { no: 2, writer: 'janedoe', content: '감사합니다!', date: '2024.04.12 18:05' },
            { no: 3, writer: 'janedoe', content: '감사합니다!', date: '2024.04.12 18:05' }
        ]  
    },
    {
        no: 3,
        writer: 'cosa1992',
        content: '정말 보람차셨을 것 같아요!',
        date: '2024.04.12 17:32',
        repliesVisible: false,
        replies: [
            { no: 1, writer: 'johndoe', content: '고마워요!', date: '2024.04.12 18:00' },
            { no: 2, writer: 'janedoe', content: '감사합니다!', date: '2024.04.12 18:05' }
        ]  
    },
    {
        no: 4,
        writer: 'cosa1992',
        content: '정말 보람차셨을 것 같아요!',
        date: '2024.04.12 17:32',
        repliesVisible: false,
        replies: [
            { no: 1, writer: 'johndoe', content: '고마워요!', date: '2024.04.12 18:00' },
            { no: 2, writer: 'janedoe', content: '감사합니다!', date: '2024.04.12 18:05' },
            { no: 3, writer: 'johndoe', content: '고마워요!', date: '2024.04.12 18:00' },
            { no: 4, writer: 'janedoe', content: '감사합니다!', date: '2024.04.12 18:05' },
            { no: 5, writer: 'johndoe', content: '고마워요!', date: '2024.04.12 18:00' },
            { no: 6, writer: 'janedoe', content: '감사합니다!', date: '2024.04.12 18:05' }
        ]  
    },
    {
        no: 5,
        writer: 'cosa1992',
        content: '정말 보람차셨을 것 같아요!',
        date: '2024.04.12 17:32',
        repliesVisible: false,
        replies: [
            { no: 1, writer: 'johndoe', content: '고마워요!', date: '2024.04.12 18:00' },
            { no: 2, writer: 'janedoe', content: '감사합니다!', date: '2024.04.12 18:05' },
            { no: 3, writer: 'johndoe', content: '고마워요!', date: '2024.04.12 18:00' },
            { no: 4, writer: 'janedoe', content: '감사합니다!', date: '2024.04.12 18:05' }
        ]  
    },
]);


function toggleReply(index) {
    commentList.value[index].repliesVisible = !commentList.value[index].repliesVisible;

}

</script>

<style scoped>
.card {
    border: none;
    margin-top: 20px;
}

.bottom-line {
    border-bottom: 2px solid #757575;
    margin-top: 20px;
}
</style>