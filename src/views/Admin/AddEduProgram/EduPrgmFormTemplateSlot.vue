<template>
    <EduPrgmFormTemplate>
        <template v-slot:header>
            교육 추가
        </template>


        <template v-slot:footer>
            <HighlightButton text="추가" @buttonClick="$emit('buttonClick')"/>
            <NormalButton text="취소" data-bs-dismiss="modal"/>
        </template>
    </EduPrgmFormTemplate>
</template>

<script setup>
import EduPrgmFormTemplate from '@/components/EduPrgmFormTemplate.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';

</script>

<style scoped></style>