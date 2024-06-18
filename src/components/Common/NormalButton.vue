<template>
    <button @click="handleButtonClick()">
        {{ props.text }}
    </button>
</template>

<script setup>
const props = defineProps(['text']);
const emits = defineEmits(['buttonClick']);

function handleButtonClick() {
    emits('buttonClick');
}
</script>

<style scoped>
button {
    background-color: gray;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5%;

    border: none;
    font-weight: bold;
    color: white;
}
</style>