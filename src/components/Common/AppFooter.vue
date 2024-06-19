<template>
    <footer class="footer">
      <div class="content">
        <img src="@/assets/socialpulse_logo.png" height="65px" class="logo">
        <div class="footer-details">
          <ul class="footer-menu">
            <li><router-link to="/Main">홈</router-link></li> |
            <li><router-link to="/Details/VolunteerGuide/Introduce">단체 소개</router-link></li> |
            <li><router-link to="/Details/ServiceCenter/FAQ">자주 묻는 질문</router-link></li>
          </ul>
          <p>(05717) 서울특별시 송파구 중대로 135 IT 벤처타워</p>
          <p>&copy; 2024 Social Pulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #e2e2e2;
    color: #333;
    padding: 20px 0;
  }
  
  .footer .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0px 20px;
  }
  
  .footer .logo {
    margin-right: 20px;
  }
  
  .footer .footer-details {
    flex-grow: 1;
    text-align: center;
  }
  
  .footer .footer-menu {
    list-style: none;
    padding: 0;
    margin: 10px 0;
    display: flex;
    justify-content: center;
  }
  
  .footer .footer-menu li {
    margin: 0 15px;
  }
  
  .footer .footer-menu a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
  }
  
  .footer .footer-menu a:hover {
    text-decoration: underline;
  }
  
  .footer p {
    margin: 10px 0;
  }
  </style>
  