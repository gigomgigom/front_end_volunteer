<template>
    <div class="row mt-5 mb-5 d-flex justify-content-center" style="padding: 0; ">
        <div class="col-sm-4 text-center">
            <RouterLink to="">이전글</RouterLink>
            <img src="@/assets/ico_board_btn_prev.png" style="margin-left: 15px;">
        </div>
        <div class="col-sm-4 text-center">
            <HighlightButton text="목록"/>
        </div>
        <div class="col-sm-4 text-center">
            <img src="@/assets/ico_board_btn_next.png" style="margin-right: 15px;">
            <RouterLink to="">다음글</RouterLink>
        </div>
    </div>
</template>

<script setup>
import HighlightButton from './Common/HighlightButton.vue';
</script>

<style scoped></style>