<template>
    <button @click="$emit('buttonClick')">
        {{ props.text }}
    </button>
</template>

<script setup>
const props = defineProps(['text']);
</script>

<style scoped>
button {
    background-color: rgb(240, 103, 4);
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