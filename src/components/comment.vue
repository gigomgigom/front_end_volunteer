<template>
    <div class="card">
        <form @submit.prevent="submitComment">
            <div class="row">
                <div class="col-sm-10">
                    <textarea v-model="newComment" placeholder="댓글을 입력하세요." style="width: 100%; height: 80px;">
                    </textarea>
                </div>
                <div class="col-sm-2" style="padding: 0;">
                    <HighlightButton text="등록" style="height: 80px; width: 91%;" />
                </div>
            </div>
        </form>
        <div class="bottom-line"></div>
    </div>
    <slot name="body">
    <div class="card-body" style="padding: 12px; padding-top: 10px; padding-bottom: 0;"
        v-for="(comment, index) in commentList" :key="comment.no">
        <div class="row">
            <div class="col-sm-12">
                <span style="color: rgb(240, 103, 4);">{{ comment.writer }}</span>
                <span style="margin-left: 10px;">{{ comment.date }}</span>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <span>{{ comment.content }}</span>
                </div>
            </div>
        </div>
        <div class="row"
            style="font-size: 14px; border-bottom: 1px solid gray; padding-bottom: 10px; padding-top: 5px;">
            <div class="col-sm-8 d-flex align-items-center">
                <span style="margin-right: 10px;"> <button type="button"
                        style="border: 0;background-color: transparent;" @click="toggleReply(index)">답글 {{ comment.replies.length }}개</button>
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
                        <form @submit.prevent="submitReply(index, $event)">
                            <div class="row">
                                <div class="col-sm-10">
                                    <textarea v-model="newReply[index]" placeholder="답글을 입력하세요." style="width: 100%; height: 30px;"></textarea>
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
    </slot>
</template>

<script setup>
import HighlightButton from './Common/HighlightButton.vue';
import NormalButton from './Common/NormalButton.vue';
import { ref } from "vue";
import { useRouter } from 'vue-router';

const commentList = ref([
    {
        no: 0,
        writer: 'cosa1992',
        content: '나는야 홍길동이다 덤벼라~',
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

const newComment = ref("");
const newReply = ref({}); // 각 댓글에 대한 답댓글을 저장(굳이 필요없을까 하는데 일단 찾아서 넣음)

const router = useRouter();

//중복으로 alert창이 뜨는걸 방지
function submitComment(event) {
    event.preventDefault();
    
    //요소의 값이 공백을 제외하고 아무 문자도 포함하지 않는 경우를 체크
    if (newComment.value.trim() === "") {
        alert("댓글은 공백으로 남길 수 없습니다.");
        return;
    }

    const newCommentObj = {
        no: commentList.value.length,
        writer: 'current_user', // 실제 사용자 이름으로 대체
        content: newComment.value,
        date: new Date().toISOString().slice(0, 16).replace("T", " "),
        repliesVisible: false,
        replies: []
    };

    commentList.value.push(newCommentObj);
    newComment.value = "";
    alert("댓글이 등록되었습니다.");
    router.push('/Details/Information/Review/ViewReviewDetail');
}

function submitReply(commentIndex, event) {
    event.preventDefault();
    
    //값이 비어 있지 않은 경우 해당 문자열에서 양 끝 공백을 제거한 값을 replyContent에 할당
    //값이 존재하지 않거나 빈 문자열인 경우에는 빈 문자열 ("")을 할당
    const replyContent = newReply.value[commentIndex] ? newReply.value[commentIndex].trim() : "";
    if (replyContent === "") {
        alert("답댓글은 공백으로 남길 수 없습니다.");
        return;
    }

    const newReplyObj = {
        no: commentList.value[commentIndex].replies.length,
        writer: 'current_user', // 실제 사용자 이름으로 대체
        content: replyContent,
        date: new Date().toISOString().slice(0, 16).replace("T", " "),
    };

    commentList.value[commentIndex].replies.push(newReplyObj);
    newReply.value[commentIndex] = "";
    alert("답댓글이 등록되었습니다.");
}

//toggleReply 함수 - 댓글 리스트에서 특정 댓글의 답글 표시 여부를 토글하는 역할
//답글 표시 상태 변경 - 답글이 숨겨져 있으면 보이게 되고, 보이는 상태면 숨겨짐
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