<template>
    <div class="card">
        <div class="card-body" style="padding: 12px;">
            <form>
                <div class="row" style="margin-bottom: 30px; margin-top: 10px;">
                    <div class="col-sm-6 aa">
                        <span class="bb">교육지역</span>
                            <select name="" id="" class="ms-4 me-2" >
                                <option value="">인천 광역시</option>
                                <option value="">전체</option>
                                <option value="">전체</option>
                                <option value="">전체</option>
                                <option value="">전체</option>
                                <option value="">전체</option>
                            </select>
                            <select name="" id="">
                                <option value="">전체</option>
                            </select>
                    </div>
                    <div class="col-sm-6 aa">
                        <span class="bb">모집상태</span>
                        <div class="ms-4" style="display: inline-block;">
                        <span class="checks small"><input type="radio" id="ex_rds1" name="searchSrvcStts" value="3"><label for="ex_rds1" class="ms-1">전체</label></span>
                        <span class="checks small ms-2"><input type="radio" id="ex_rds2" name="searchSrvcStts" value="0" checked="checked"><label for="ex_rds2" class="ms-1">모집중</label></span>
                        <span class="checks small ms-2"><input type="radio" id="ex_rds3" name="searchSrvcStts" value="1"><label for="ex_rds3" class="ms-1">모집완료</label></span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 aa">
                        <span class="bb">봉사명</span>
                        <input type="text" style="width: 83%; margin-left: 40px; border-radius: 2px; border: 1px solid">
                    </div>
                </div>
                <div class="mt-4 mb-2" style="text-align: center;">
                    <button class="btn btn-info me-2"
                        style="color: #fff; background-color: #d43e0c; border: none; border-radius: 0">검색</button>
                    <button class="btn btn-danger"
                        style="background-color: #666; border: none; border-radius: 0;">초기화</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.aa {
    height: 30px;
    line-height: 30px;
    padding: 0;
}

.bb {
    padding: 0 0 0 12px;
    margin-left: 12px;
    background: url("@/assets/ico_search.png") center left no-repeat;
}


</style>