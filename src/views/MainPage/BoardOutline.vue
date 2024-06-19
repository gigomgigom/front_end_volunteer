<template>
<div class="d-flex justify-content-between mt-5 mb-5">
  <div class="box box3">
    <div class="section">
      <div class="row justify-content-end plus me-3">
        ➕더보기
      </div>
      <div class="mb-3">알림판</div>
      <div class="row">
        <div class="content">
          <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          <h6>[공지] 서버용 인증서 교체 작성 계획 안내...</h6>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="row justify-content-end plus me-3">
        ➕더보기
      </div>
      <div class="mb-3">자원봉사 이야기</div>
      <div class="row">
        <div class="content">
          <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          <h6>[공지] 서버용 인증서 교체 작성 계획 안내...</h6>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="row justify-content-end plus me-3">
        ➕더보기
      </div>
      <div class="mb-3">자원봉사 후기</div>
      <div class="row">
        <div class="content">
          <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          <h6>[공지] 서버용 인증서 교체 작성 계획 안내...</h6>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>

.d-flex {
  display: flex;
  flex-wrap: wrap;
  margin: 0 45px;
}

.justify-content-between {
  justify-content: space-between;
}

.box2, .box3, .box4 {
  background-color: floralwhite !important;
  padding: 20px;
  flex-grow: 1;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: auto;
  color: black;
  font-size: 30px;
  flex: 1 1 200px;
  min-width: 150px;
}

.box2 .content {
  max-height: 100%;
}

h5 {
  margin: 0;
  padding: 5px;
}

h6 {
  margin-top: 0;
  margin-bottom: 10px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.plus {
  font-size: 15px;
  margin-top: 15px;
}

.box3 .content {
  max-height: 180px;
  overflow-y: auto;
  color: #666;
}

.box3 {
  background-color: floralwhite;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-basis: 100%;
  max-width: 100%;
}

.section {
  flex: 1;
  margin: 0 10px;
  background-color: floralwhite;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}

.section:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -5px;
  transform: translateY(-50%);
  height: 80%; 
  width: 1px;
  background-color: #ccc;
}

.section .content {
  max-height: 180px;
  overflow-y: auto;
  color: #666;
}

</style>