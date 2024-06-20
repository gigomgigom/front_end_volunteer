<template>
    <div class="modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">일자 선택</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <VueDatePicker v-model="selectDate" :min-date="startDate" :max-date="endDate" multi-dates :enable-time-picker="false"/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const startDate = new Date(2024, 5, 19);
const endDate = new Date(2024, 5, 23);

const selectDate = ref(null);

watch(() => selectDate.value, (newDate, oldDate) => {
    console.log(newDate);
})
</script>

<style scoped></style>