<template>
    <!-- 세림 -->
    <div>
        <h3 class="mt-4">자주하는 질문</h3>
        <hr/>

          <!-- <div style="display: flex;">
            <h6 class="all">[전체 32건, 현재페이지 1/4]
              <h2 class="accordion-header" id="headingFilter" >
                <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFilter" aria-expanded="false" aria-controls="collapseFilter">
                  제목
                </button>
              </h2>
            </h6>
          </div> -->
          <div class="accordion" id="filterAccordion">
  <div class="accordion-item" style="border: none;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <h6 class="all">[전체 32건, 현재페이지 1/3]</h6>
      <div style="display: flex; align-items: center;">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            제목
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">제목</a></li>
            <li><a class="dropdown-item" href="#">내용</a></li>
            <li><a class="dropdown-item" href="#">작성자</a></li>
          </ul>
        </div>
        <input class="form-control form-control-sm ms-2" type="text" aria-label=".form-control-sm example">
        <button class="btn btn-sm btn-primary ms-2" id="btn-sm1">검색</button>
      </div>
    </div>
    <div id="collapseFilter" class="accordion-collapse collapse" aria-labelledby="headingFilter">
      <div class="accordion-body">
        <form>
          <div class="mb-3">
            <label for="searchTitle" class="form-label">제목</label>
            <input type="text" class="form-control" id="searchTitle">
          </div>
          <div class="mb-3">
            <label for="searchContent" class="form-label">내용</label>
            <input type="text" class="form-control" id="searchContent">
          </div>
          <div class="mb-3">
            <label for="searchAuthor" class="form-label">작성자</label>
            <input type="text" class="form-control" id="searchAuthor">
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

</div>
    

    <div class="accordion mt-2" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <b>▪️ [봉사활동정보_실적확인] 봉사활동한 곳에서 1365로 실적 등록하지 않고 봉사확인서만 제공해줬습니다.</b>
        
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        봉사자분이 직접 실적을 등록하실 수 없습니다.
        <h6 class="row ms-1">지역자원봉사센터에 봉사확인서를 보내 실적 등록이 가능한지 문의해주시기 바랍니다.</h6>
         ※ 지역자원봉사센터 연락처는 홈페이지 하단의 "문의전화안내"버튼을 통해 확인이 가능합니다. 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <b> ▪️ [봉사활동정보_실적연계] 1365에서 VMS로 전송한 봉사 실적이 VMS 홈페이지에서 확인되지 않습니다.</b>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      봉사활동한 수요처에서 실적 등록 후 지역자원봉사센터에서 실적 승인 처리까지 완료되어야 봉사자가 실적 조회
      가능합니다.
      <h6 class="row ms-1 mt-3">자원봉사활동을 진행한 수요처로 문의하여 실적 등록 여부를 확인 하시기 바랍니다.</h6>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <b> ▪️ [봉사활동정보_실적연계] 나이스(NEIS)로 봉사실적 전송 성공하였는데, 나이스에선 실적 확인이
            되지 않습니다.
        </b>
      </button>
    </h2>
    
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="accordion-body">
      봉사활동한 수요처에서 실적 등록 후 지역자원봉사센터에서 실적 승인 처리까지 완료되어야 봉사자가 실적 조회
      가능합니다.
      <h6 class="row ms-1 mt-3">자원봉사활동을 진행한 수요처로 문의하여 실적 등록 여부를 확인 하시기 바랍니다.</h6>
      </div>
      </div>
    </div>

    
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
        <b> ▪️ [관리자_관리자 인증] 관리자 인증은 어떻게 하나요?</b>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="accordion-body">
      봉사활동한 수요처에서 실적 등록 후 지역자원봉사센터에서 실적 승인 처리까지 완료되어야 봉사자가 실적 조회
      가능합니다.
      <h6 class="row ms-1 mt-3">자원봉사활동을 진행한 수요처로 문의하여 실적 등록 여부를 확인 하시기 바랍니다.</h6>
      </div>
      </div>
    </div>

  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
        <b> ▪️ [회원정보_회원 탈퇴] 회원탈퇴 후 기존 가입되어 있었던 정보를 확인 하고 싶습니다.</b>
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="accordion-body">
      봉사활동한 수요처에서 실적 등록 후 지역자원봉사센터에서 실적 승인 처리까지 완료되어야 봉사자가 실적 조회
      가능합니다.
      <h6 class="row ms-1 mt-3">자원봉사활동을 진행한 수요처로 문의하여 실적 등록 여부를 확인 하시기 바랍니다.</h6>
      </div>
      </div>
    </div>

  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
        <b> ▪️ [회원정보_아이디 통합] 아이디를 하나로 통합하고 싶습니다.</b>
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="accordion-body">
      봉사활동한 수요처에서 실적 등록 후 지역자원봉사센터에서 실적 승인 처리까지 완료되어야 봉사자가 실적 조회
      가능합니다.
      <h6 class="row ms-1 mt-3">자원봉사활동을 진행한 수요처로 문의하여 실적 등록 여부를 확인 하시기 바랍니다.</h6>
      </div>
      </div>
    </div>

  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
        <b> ▪️ [봉사활동정보_봉사신청] 자원봉사 신청은 어떻게 하나요?</b>
      </button>
    </h2>
    <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="accordion-body">
      봉사활동한 수요처에서 실적 등록 후 지역자원봉사센터에서 실적 승인 처리까지 완료되어야 봉사자가 실적 조회
      가능합니다.
      <h6 class="row ms-1 mt-3">자원봉사활동을 진행한 수요처로 문의하여 실적 등록 여부를 확인 하시기 바랍니다.</h6>
      </div>
      </div>
    </div>

  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseThree">
        <b> ▪️ [봉사활동정보_봉사신청] 봉사신청 취소는 어떻게 하나요?</b>
      </button>
    </h2>
    <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="accordion-body">
      봉사활동한 수요처에서 실적 등록 후 지역자원봉사센터에서 실적 승인 처리까지 완료되어야 봉사자가 실적 조회
      가능합니다.
      <h6 class="row ms-1 mt-3">자원봉사활동을 진행한 수요처로 문의하여 실적 등록 여부를 확인 하시기 바랍니다.</h6>
      </div>
      </div>
    </div>

  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseThree">
        <b> ▪️ [회원정보_정보 수정] 개명을 해서 이름을 변경하고 싶습니다.</b>
      </button>
    </h2>
    <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="accordion-body">
      봉사활동한 수요처에서 실적 등록 후 지역자원봉사센터에서 실적 승인 처리까지 완료되어야 봉사자가 실적 조회
      가능합니다.
      <h6 class="row ms-1 mt-3">자원봉사활동을 진행한 수요처로 문의하여 실적 등록 여부를 확인 하시기 바랍니다.</h6>
      </div>
      </div>
    </div>

  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseThree">
        <b> ▪️ [기타_센터 업무] 지역자원봉사센터에서 처리 할 수 있는 업무 안내</b>
      </button>
    </h2>
    <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="accordion-body">
      봉사활동한 수요처에서 실적 등록 후 지역자원봉사센터에서 실적 승인 처리까지 완료되어야 봉사자가 실적 조회
      가능합니다.
      <h6 class="row ms-1 mt-3">자원봉사활동을 진행한 수요처로 문의하여 실적 등록 여부를 확인 하시기 바랍니다.</h6>
      </div>
      </div>
    </div>

  </div>
</div>

<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center mt-3">
    <li class="page-item disabled">
     
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
    </li>
  </ul>
</nav>
</template>

<script setup>

</script>

<style scoped>

.all {
    color: gray;
}

.accordion-header .accordion-button {
    background-color: #e9ecef;
    color: #333;
    border-radius: 0;
}

.accordion-header .accordion-button.collapsed {
    background-color: #e9ecef;
    color: #333;
    border-radius: 0;
}

.accordion-body {
    background-color: #ffffff;
    color: #000;
    border-radius: 0;
}

.form-label {
    z-index: 999;
}

.accordion-collapse {
    position: relative;
    width: 100%;
}

input.form-control.form-control-sm {
    width: 150px;
}

.accordion-button.collapsed1 {
    width: 100px;
    padding: 5px;
    font-size: 14px;
}

#btn-sm1 {
    background-color: orange;
    border-color: #ffffff;
}

.dropdown-toggle {
    background-color: orange; 
    color: #ffffff; 
    width: 70px;
    height: 30px; 
    padding: 5px 10px; 
    font-size: 14px; 
    border-radius: 5px; 
    border-color: #ffffff;
}

.dropdown-toggle:hover {
    background-color: orange; 
}


</style>