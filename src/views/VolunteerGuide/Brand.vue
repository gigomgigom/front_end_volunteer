<template>
  <div class="container">
    <TextHeader class="mb-3" title="브랜드 소개" />
    <div class="volunteer-brand">
      <p>
        아래의 로고는 대한민국 자원봉사 현장이라면 누구나, 어디서나 활용할 수 있습니다.
      </p>

      <div class="brand-details">
        <div class="main-brand">
          <img src="@/assets/socialpulse_logo.png" alt="Korea Volunteer Center Logo" width="500px" />
          <div class="top-buttons">
            <a href="/Brand/socialpulse_logo.png" download="socialpulse_logo.png" class="download-btn">로고 다운로드</a>
          </div>
        </div>

        <div class="brand-icons">
          <div class="section-title">
            <img src="@/assets/Insurance/next-bold.png" width="12px" class="li-img" />
            <span><b>로고 탄생 배경</b></span>
          </div>

          <div class="icon">
            <div class="icon-img">
              <img src="@/assets/Brand/hand.png" alt="V Icon" width="200px"/>
            </div>
            <div class="icon-text">
              <p>
                자원봉사를 통해 사랑을 전하고, 협력을 통한 나눔의 실천적 이미지를 형상화함.
              </p>
            </div>
          </div>

          <div class="icon">
            <div class="icon-img">
              <img src="@/assets/Brand/pulse.png" alt="Heart Icon" width="190px"/>
            </div>
            <div class="icon-text">
              <p>
                더불어 살아가는 공동체 속에서, 온기로 인해 박동하는 사회적 맥박이라는 의미를 담았다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="signature">
        <div class="signature-header">
          <div class="section-title">
            <img src="@/assets/Insurance/next-bold.png" width="12px" class="li-img" />
            <span><b>타입별 로고</b></span>
          </div>
          <a href="/Brand/all_logos.zip" download="all_logos.zip" class="download-btn">ZIP 파일 다운</a>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Minimum Size</th>
              <th>국문</th>
              <th>축약형</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="@/assets/Brand/small_logo.png" alt="Small Logo" width="200px" /></td>
              <td><img src="@/assets/Brand/logo_korean.png" alt="Korean Logo" width="200px" /></td>
              <td><img src="@/assets/Brand/logo_abbreviated.png" alt="Abbreviated Logo" width="200px" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import TextHeader from "@/components/Common/TextHeader.vue";
</script>

<style scoped>
.top-buttons {
  text-align: right;
}

.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: 'Arial, sans-serif';
  border-radius: 8px;
}

.volunteer-brand {
  padding: 20px; /* 내부 패딩 추가 */
}

.volunteer-brand p {
  font-size: 1.2em;
  margin-bottom: 20px;
  line-height: 1.6;
  color: #333;
}

.brand-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-brand {
  justify-content: right;
  margin-bottom: 40px;
}

.download-btn {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background-color: #fff; /* 흰색 배경 */
  color: #333; /* 글자색 */
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid #4a90e2;
  transition: background-color 0.3s;
}

.download-btn:hover {
  background-color: #357ab8;
  color: #fff; /* hover 시 글자색 */
}

.brand-icons {
  width: 100%;
  margin-bottom: 40px;
}

.section-title {
  display: flex;
  align-items: center;
  font-size: 1.4em;
  margin-bottom: 20px;
  color: #333;
}

.li-img {
  margin-right: 10px;
}

.icon {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.icon:hover {
  transform: translateY(-5px);
}

.icon-img {
  flex: 0 0 auto;
  margin-right: 20px;
}

.icon-text {
  flex: 1;
  text-align: left;
  font-size: 1em;
  color: #555;
}

.signature {
  margin-top: 40px;
}

.signature-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.signature table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.signature th, .signature td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
  font-size: 1em;
}

.signature th {
  background-color: #f2f2f2;
  font-weight: bold;
}
</style>
