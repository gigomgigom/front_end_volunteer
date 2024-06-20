<template>
    <div>
        <h2>{{title.title}}</h2>
    </div>
</template>

<script setup>
const title = defineProps(['title']);
</script>

<style scoped>
div h2{
    padding-bottom: 17px;
    border-bottom: 1px solid #ccc;
    font-size: 35px;
    font-weight: 550;
    color: #333;
    letter-spacing: -0.060em;
    margin: 0;
}

div {
    margin-top: 30px;
    margin-bottom: 30px;
}
    
</style>