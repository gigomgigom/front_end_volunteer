<template>
    <div class="modal">
        <div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        프로그램 신청인 정보
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div style="overflow: auto">
                        <table class="table">
                            <thead class="thead">
                                <tr>
                                    <th>신청인 이름</th>
                                    <th>아이디</th>
                                    <th>생년월일</th>
                                    <th>연락처</th>
                                    <th>소속 센터</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(member, index) in applicantList" :key="index">
                                    <td>{{ member.name }}</td>
                                    <td>{{ member.id }}</td>
                                    <td>{{ member.birth }}</td>
                                    <td>{{ member.tel }}</td>
                                    <td>{{ member.affCenter }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">닫기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const applicantList = [
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
    {
        name: '심영조',
        id: 'tlarlrma',
        birth: '2000.01.07',
        tel: '01028104870',
        affCenter: '인천광역시 서구'
    },
];

</script>

<style scoped>
.table {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}
</style>