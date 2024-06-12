<template>
   <div class="body">
     <h2 class="maintitle"><b>{{maintitle}}</b></h2>
     <hr>
     <h5 class="subtitle">{{subtitle}}</h5>
     <p></p>
     <div class="items">
       <div class="item" v-for="(item, index) in items" :key="index">
         <div class="item-content">
            <a :href="item.link" target="_blank">
             <img :src="item.image" alt="image" class="item-image" />
           </a>
           <div class="text">
            <a :href="item.link" target="_blank" class="content-link">
               <p class="content-title">{{ item.title }}</p>
             </a>
             <ul>
               <li v-for="(content, index) in item.contents" :key="index">- {{ content }}</li>
             </ul>
           </div>
         </div>
       </div>
     </div>
   </div>
 </template>
 
 <script setup>
const maintitle='자원봉사 교육 자료'
const subtitle= '자원봉사의 의미, 방법 등 자원봉사활동에 도움이 되는 교육자료 모음입니다.'
 const items = [
   {
     image: require('@/assets/Educating/image1.jpg'),
     title: '세상의 변화는 나의 변화로부터!',
     contents: [
       '자원봉사의 가치',
       '자원봉사자의 자세',
     ],
    link: 'https://archives.v1365.or.kr/items/show/1362'
   },

   {
     image: require('@/assets/Educating/image3.jpg'),
     title: '청소년 자원봉사 교육',
     contents: [
       '청소년 단계별 교육',
       '꼭 알아야 할 것들',
     ],
     link: 'https://www.youtube.com/watch?v=Fu_SUPJigbc&ab_channel=%EC%88%98%EC%9E%90%EB%B4%89%EB%B4%89%EC%82%AC%ED%86%A1%ED%86%A1%28talktalk%29'
   },
   {
     image: require('@/assets/Educating/image2.jpg'),
     title: '자원봉사 보수 교육 ',
     contents: [
       '자원봉사의 가치',
       '자원봉사자의 자세',
     ], link: 'https://www.youtube.com/watch?v=0Ro3qqOx2ZY'
   },
   
   {
     image: require('@/assets/Educating/image4.jpg'),
     title: '성인 자원봉사 기초 교육',
     contents: [
       '자원봉사의 영역',
       '자원봉사의 유형',
     ], link: 'https://www.youtube.com/watch?v=TriVdUaCw4g'
   },
   {
     image: require('@/assets/Educating/image5.jpg'),
     title: '자원봉사 교육 언박싱',
     contents: [
       '성인 2 과정',
       '체험을 통한 교육',
     ], 
     link: 'https://www.youtube.com/watch?v=n0iA81q5D5o&ab_channel=%EC%A0%84%EB%9D%BC%EB%82%A8%EB%8F%84%EC%9E%90%EC%9B%90%EB%B4%89%EC%82%AC%EC%84%BC%ED%84%B0'
   },
   {
     image: require('@/assets/Educating/image6.jpg'),
     title: 'Guide for foreigners',
     contents: [
      'How to volunteer?',
      'various volunteer activities',
     ], 
     link: 'https://www.youtube.com/watch?app=desktop&v=tYmvsrkN8po&embeds_referring_euri=https%3A%2F%2Fwww.rokutanjuku.com%2F&feature=emb_imp_woyt'
   }  ];
 </script>
 
 <style scoped>
.content-title {
  font-weight: bold; 
  font-size:20px;
  color:black;
}
.body{
   width: 845px;
    padding: 60px 0 60px 40px;
 }
 .item-content {
   display: flex;
   align-items: center;
   margin-bottom: 50px;
 }
 
 .item-image {
   max-width: 280px; 
   margin-right: 30px; /* 이미지와 텍스트 사이 여백 */
   transition: transform 0.3s, box-shadow 0.3s; /* 호버 효과에 대한 부드러운 전환 */
 }

 .item-image:hover {
  transform: scale(1.08); /* 이미지 확대 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 그림자 효과 */
}

.content-link {
  text-decoration: none; /* 밑줄 제거 */
}
  
 .text {
   flex: 1; /* 텍스트가 남은 공간을 채우도록 함 */
 }

.subtitle{
   margin-bottom: 50px;
}
 
 .item-content h3 {
   font-size: 1.2em;
   font-weight: bold;

   color: #333;
   margin-bottom: 12px;
 }


 .item-content ul {
   list-style-type: none;
   padding: 0;
   font-size: 20px;

 }
 
 .item-content li {
   margin-bottom: 5px;
   font-size: 16px;
   color: #666;
 }
 </style>
 