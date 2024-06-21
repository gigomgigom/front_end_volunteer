<template>
    <!-- <div class="container"> -->
      <table class="post-table" style="">
        <thead style="">
          
          <tr style="font-size: 25px; ">
            <th colspan="2" class="title-line">
              <span>{{ post.title }}</span>
            </th>
          </tr>
          <tr>
            <th colspan="2" class="write-info">
              작성자: <span class="normal-text">{{ post.author }}</span>
              <span class="separator">|</span>
              작성일: <span class="normal-text">{{ post.date }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2" class="post-content">
              <p class="content-text">{{ post.content }}</p>
              <div class="image-container">
                <img src="@/assets/volunteering-sample.jpg" alt="Volunteering Sample" />
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="bottom-line">
              <div v-if="attachedFile">
                <span class="attachedfile-text">첨부파일: {{ attachedFile }}</span>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    <!-- </div> -->
  </template>
  
  <script>
  export default {
    data() {
      return {
        post: {
          title: '게시물 제목입니다',
          author: '홍길동',
          date: '2024년 6월 18일',
          content: '게시물 내용이 여기에 들어갑니다'
        },
        attachedFile: '첨부파일 이름'
      };
    }
  };
  </script>
  
  <style scoped>
  /* .container {
    max-width: 100%;
    margin: 20px auto;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow-x: auto;
  } */
  
  .post-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border-bottom: 1px solid #e0e0e0;
    padding: 11px 15px;
    text-align: left;
  }
  
  .top-line, .bottom-line {
    border-bottom: 2px solid #757575;
  }
  
  .title-line {
    border-bottom: 2px solid #cfcfcf;
    text-align: center;
    font-size: 1.05em;
    font-weight: bold;
    color: #333333;
  }
  
  .write-info {
    font-size: 0.9em;
    color: #666666;
  }
  
  .separator {
    margin: 0 10px;
    font-weight: normal;
    color: #666666;
  }
  
  .attachedfile-text {
    font-weight: normal;
    font-size: 0.9em;
    color: #414141;
  }
  
  .normal-text {
    font-size: 0.9em;
    font-weight: normal;
  }
  
  .content-text {
    font-size: 1.0em;
    margin-left: 20px;
    font-weight: normal;
  }
  
  .post-content {
    padding: 10px 0;
  }
  
  .image-container {
    text-align: center;
    margin-top: 10px;
  }
  
  .image-container img {
    max-width: 100%;
    height: auto;
  }
  </style>
  