<template>
  <div>
    <TextHeader class="mb-3" title="SocialPulse 소개" />

    <div class="center-intro">
      <div class="section">
        <h3><B>설립 근거</B></h3>
        <ul>
          <li>
            <img src="@/assets/Insurance/next-bold.png" width="12px" class="li-img" />
            자원봉사활동 기본법 제19조(자원봉사센터 설립·운영)
          </li>
        </ul>
      </div>

      <div class="section">
        <h3><B>설립목적</B></h3>
        <ul>
          <li>
            <img src="@/assets/Insurance/next-bold.png" width="12px" class="li-img" />
            자원봉사 진흥, 전국 자원봉사센터와의 네트워크 구축 등 허브기능 수행 (2010.06.설립 / 2020.01. 재단법인 출범)
          </li>
        </ul>
      </div>

      <div class="section">
        <h3><B>미션 및 비전</B></h3>
        <table>
          <thead>
            <tr>
              <th class="wide-column"><b>핵심가치</b></th>
              <th>사람</th>
              <th>현장</th>
              <th>연대협력</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>비전</b></td>
              <td colspan="3" class="inside-text">모든 국민의 자원봉사 참여로 만드는 안녕한 대한민국</td>
            </tr>
            <tr>
              <td><B>미션</B></td>
              <td colspan="3"  class="inside-text">자원봉사 지원체계의 허브</td>
            </tr>
            <tr>
              <td><B>핵심목표</B></td>
              <td class="inside-text">현장중심의 자원봉사 정책활동</td>
              <td class="inside-text" >사회변화를 위한 역량강화</td>
              <td class="inside-text">자원봉사가 주도하는 참여문화 형성</td>
            </tr>
            <tr>
              <td><B>사업</B></td>
              <td class="inside-text">
                <ul>
                  <li>- 자원봉사자 시스템 운영 지원</li>
                  <li>- 자원봉사 아카이브 운영</li>
                  <li>- 재난대응 자원봉사 통합지원</li>
                </ul>
              </td>
              <td class="inside-text">
                <ul>
                  <li>- 사회문제해결형 자원봉사 지원</li>
                  <li>- 자원봉사 관리자 역량강화</li>
                  <li>- 자원봉사 협력체계 구축</li>
                </ul>
              </td>
              <td class="inside-text">
                <ul>
                  <li>- 탄소중립 2050 자원봉사 캠페인</li>
                  <li>- 자원봉사 인정 지원</li>
                  <li>- 홍보 콘텐츠 개발 보급</li>
                  <li>- 자원봉사 안전보장</li>
                </ul>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import TextHeader from "@/components/Common/TextHeader.vue";
</script>

<style scoped>
.center-intro {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.section {
  margin-bottom: 40px;
}

.inside-text{
  font-size: 0.95em;
}

h3 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 20px;
}

.li-img {
  margin-right: 8px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
  color: #333;
}

td {
  background-color: #fff;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.wide-column {
  width: 25%; /* Adjust this value to set the desired width */
  min-width: 150px; /* Optional: Set a minimum width */
}

/* Style for the top and bottom rows */
thead th {
  border-top: 2px solid #979797;
  /* border-bottom: 2px solid #000; */
}

tfoot td {
   border-top: 2px solid #979797; 
 
}

/* Remove left and right borders */
th:first-child, td:first-child {
  border-left: none;
}

th:last-child, td:last-child {
  border-right: none;
}
</style>
