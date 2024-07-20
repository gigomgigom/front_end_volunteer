<template>
    <BoardForm/>
</template>

<script setup>
import BoardForm from '@/components/BoardForm.vue';
import { provide } from 'vue';

const memberInfo = {
    memberId: 'tlarlrma17',
    center: '인천광역시 서구'
}
provide('memberInfo', memberInfo);
</script>

<style scoped>

</style>