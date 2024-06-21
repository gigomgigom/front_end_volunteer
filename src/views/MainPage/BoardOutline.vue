<template>
<div class="mt-5 mb-5">
  <div class="box box3">
    <div class="section">
      <router-link to="/Details/ServiceCenter/Notice/ViewNoticeList" class="no-underline">
      <div class="row justify-content-end plus me-5">
        ➕더보기
      </div>
    </router-link>
      <div class="mb-3 ms-4">공지사항</div>
   
      <div class="row">
        <div class="content ms-5">
          
          <router-link to="/Details/ServiceCenter/Notice/ViewNoticeList" class="no-underline1">
            <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          </router-link>
          <router-link to="/Details/ServiceCenter/Notice/ViewNoticeList" class="no-underline1">
            <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          </router-link>
          <router-link to="/Details/ServiceCenter/Notice/ViewNoticeList" class="no-underline1">
            <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          </router-link>
          <router-link to="/Details/ServiceCenter/Notice/ViewNoticeList" class="no-underline1">
            <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          </router-link>
          <router-link to="/Details/ServiceCenter/Notice/ViewNoticeList" class="no-underline1">
            <h6>[공지] 서버용 인증서 교체 작성 계획 안내...</h6>
          </router-link>
        </div>
      </div>
    </div>
    <div class="section">
      <router-link to="/Details/Information/Interview/ViewInterviewList" class="no-underline">
      <div class="row justify-content-end plus me-5">
        ➕더보기
      </div>
      </router-link>
      <div class="mb-3 ms-4">자원봉사 이야기</div>
   
      <div class="row">
        <div class="content ms-5">
          <router-link to="/Details/Information/Interview/ViewInterviewList" class="no-underline1">
            <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          </router-link>
          <router-link to="/Details/Information/Interview/ViewInterviewList" class="no-underline1">
            <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          </router-link>
          <router-link to="/Details/Information/Interview/ViewInterviewList" class="no-underline1">
            <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          </router-link>
          <router-link to="/Details/Information/Interview/ViewInterviewList" class="no-underline1">
            <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          </router-link>
          <router-link to="/Details/Information/Interview/ViewInterviewList" class="no-underline1">
            <h6>[공지] 서버용 인증서 교체 작성 계획 안내...</h6>
          </router-link>
        </div>
      </div>
    </div>
    <div class="section">
      <router-link to="/Details/Information/Review/ViewReviewList" class="no-underline">
      <div class="row justify-content-end plus me-5">
        ➕더보기
      </div>
    </router-link>
      <div class="mb-3 ms-4">자원봉사 후기</div>
      
      <div class="row">
        <div class="content ms-5">
          <router-link to="/Details/Information/Review/ViewReviewList" class="no-underline1">
            <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          </router-link>
          <router-link to="/Details/Information/Review/ViewReviewList" class="no-underline1">
            <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          </router-link>
          <router-link to="/Details/Information/Review/ViewReviewList" class="no-underline1">
            <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          </router-link>
          <router-link to="/Details/Information/Review/ViewReviewList" class="no-underline1">
            <h6>[공지] 서버용 인증서 교체 작성 계획 안내</h6>
          </router-link>
          <router-link to="/Details/Information/Review/ViewReviewList" class="no-underline1">
            <h6>[공지] 서버용 인증서 교체 작성 계획 안내...</h6>
          </router-link>
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

.box3 {
  background-color: linen !important;
  padding: 20px;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 300px;
  color: black;
  font-size: 30px;
  min-width: 150px;
  margin: 0;
  flex: 1;
  width: 100%;
}


@media (max-width: 768px) {
  .box3 {
    width: 100%;
  }
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
  background-color: linen;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-basis: 100%;
  max-width: 100%;

}

.section {
  flex: 1;
  margin: 0 10px;
  background-color: linen;
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

.no-underline {
  text-decoration: none;
  color:black;
}

.no-underline:hover {
  text-decoration: none;
  color:black;
}

.no-underline1 {
  text-decoration: none;
  color: #666;
}
</style>